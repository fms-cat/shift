import xorshift from './xorshift';

let bvh = ( _array ) => {
  let tris = [];

  for ( let iTri = 0; iTri < _array.length / 9; iTri ++ ) {
    let verts = [];
    let min = [ 1E9, 1E9, 1E9 ];
    let max = [ -1E9, -1E9, -1E9 ];
    let cen = [ 0.0, 0.0, 0.0 ];

    for ( let iVert = 0; iVert < 3; iVert ++ ) {
      verts[ iVert ] = [];

      for ( let iAx = 0; iAx < 3; iAx ++ ) {
        verts[ iVert ][ iAx ] = _array[ iTri * 9 + iVert * 3 + iAx ];
        min[ iAx ] = Math.min( min[ iAx ], verts[ iVert ][ iAx ] );
        max[ iAx ] = Math.max( max[ iAx ], verts[ iVert ][ iAx ] );
        cen[ iAx ] += verts[ iVert ][ iAx ];
      }
    }

    cen = cen.map( ( _v ) => _v / 3.0 );

    tris.push( {
      verts: verts,
      min: min,
      max: max,
      cen: cen
    } );
  }

  // ------

  let vLength = ( _v1, _v2 ) => {
    let x = ( _v2[ 0 ] - _v1[ 0 ] );
    let y = ( _v2[ 1 ] - _v1[ 1 ] );
    let z = ( _v2[ 2 ] - _v1[ 2 ] );
    return Math.sqrt( x * x + y * y + z * z );
  };

  const clustersN = 4;
  const clusterDepth = 8;
  const clusterIter = 8;

  let cluster = ( _tris, _vbox1, _vbox2 ) => {
    let clusters = [];
    for ( let iClu = 0; iClu < clustersN; iClu ++ ) {
      clusters[ iClu ] = {
        tris: [],
        min: [ 1E9, 1E9, 1E9 ],
        max: [ -1E9, -1E9, -1E9 ],
        cen: [
          _vbox1[ 0 ] + ( _vbox2[ 0 ] - _vbox1[ 0 ] ) * xorshift(),
          _vbox1[ 1 ] + ( _vbox2[ 1 ] - _vbox1[ 1 ] ) * xorshift(),
          _vbox1[ 2 ] + ( _vbox2[ 2 ] - _vbox1[ 2 ] ) * xorshift()
        ],
        newsum: [ 0.0, 0.0, 0.0 ]
      };
    }

    for ( let iIter = 0; iIter < clusterIter; iIter ++ ) {
      _tris.map( ( _tri ) => {
        let nearestI;
        let nearestL = 1E9;

        for ( let iClu = 0; iClu < clustersN; iClu ++ ) {
          let l = vLength( _tri.cen, clusters[ iClu ].cen );
          if ( l < nearestL ) {
            nearestI = iClu;
            nearestL = l;
          }
        }

        clusters[ nearestI ].tris.push( _tri );
        clusters[ nearestI ].min = [
          Math.min( clusters[ nearestI ].min[ 0 ], _tri.min[ 0 ] ),
          Math.min( clusters[ nearestI ].min[ 1 ], _tri.min[ 1 ] ),
          Math.min( clusters[ nearestI ].min[ 2 ], _tri.min[ 2 ] )
        ];
        clusters[ nearestI ].max = [
          Math.max( clusters[ nearestI ].max[ 0 ], _tri.max[ 0 ] ),
          Math.max( clusters[ nearestI ].max[ 1 ], _tri.max[ 1 ] ),
          Math.max( clusters[ nearestI ].max[ 2 ], _tri.max[ 2 ] )
        ];
        clusters[ nearestI ].newsum = [
          clusters[ nearestI ].newsum[ 0 ] + _tri.cen[ 0 ],
          clusters[ nearestI ].newsum[ 1 ] + _tri.cen[ 1 ],
          clusters[ nearestI ].newsum[ 2 ] + _tri.cen[ 2 ]
        ];
      } );

      if ( iIter !== clusterIter - 1 ) {
        for ( let iClu = 0; iClu < clustersN; iClu ++ ) {
          clusters[ iClu ] = {
            tris: [],
            min: [ 1E9, 1E9, 1E9 ],
            max: [ -1E9, -1E9, -1E9 ],
            cen: [
              clusters[ iClu ].newsum[ 0 ] / clusters[ iClu ].tris.length,
              clusters[ iClu ].newsum[ 1 ] / clusters[ iClu ].tris.length,
              clusters[ iClu ].newsum[ 2 ] / clusters[ iClu ].tris.length
            ],
            newsum: [ 0.0, 0.0, 0.0 ]
          };
        }
      }
    }

    return clusters;
  };

  let treeClustering = ( _tris, _vbox1, _vbox2, _depth ) => {
    let depth = _depth || 0;
    let tree = {
      min: _vbox1,
      max: _vbox2,
      clusters: cluster( _tris, _vbox1, _vbox2 )
    };
    tree.clusters = tree.clusters.filter( ( _ctree ) => _ctree.tris.length !== 0 );
    if ( depth < clusterDepth ) {
      for ( let iTree = 0; iTree < tree.clusters.length; iTree ++ ) {
        tree.clusters[ iTree ] = treeClustering( tree.clusters[ iTree ].tris, tree.clusters[ iTree ].min, tree.clusters[ iTree ].max, depth + 1 );
      }
    }
    return tree;
  };

  let rootCluster = treeClustering( tris, [ -1.0, -1.0, -1.0 ], [ 1.0, 1.0, 1.0 ] );

  // ------

  let construct = ( _cluster ) => {
    let buffer = [];

    if ( _cluster.clusters ) {
      buffer = buffer.concat( [
        _cluster.min[ 0 ], _cluster.min[ 1 ], _cluster.min[ 2 ], 0,
        _cluster.max[ 0 ], _cluster.max[ 1 ], _cluster.max[ 2 ], 0,
        0.0, 0.0, 0.0, 0.0
      ] );

      let bufferEndIndex = 1;
      _cluster.clusters.map( ( _clu ) => {
        let nextBuffer = construct( _clu );
        bufferEndIndex += nextBuffer.length / 12;
        buffer = buffer.concat( nextBuffer );
      } );
      buffer[ 7 ] = bufferEndIndex;
    } else {
      _cluster.tris.map( ( _tri ) => {
        buffer = buffer.concat( [
          _tri.verts[ 0 ][ 0 ], _tri.verts[ 0 ][ 1 ], _tri.verts[ 0 ][ 2 ], 1,
          _tri.verts[ 1 ][ 0 ], _tri.verts[ 1 ][ 1 ], _tri.verts[ 1 ][ 2 ], 1,
          _tri.verts[ 2 ][ 0 ], _tri.verts[ 2 ][ 1 ], _tri.verts[ 2 ][ 2 ], 0
        ] );
      } );
    }

    return buffer;
  };
  
  let buffer = construct( rootCluster );
  while ( buffer.length % ( 768 * 4 ) !== 0 ) {
    buffer = buffer.concat( [
      0.0, 0.0, 0.0, -1,
      0.0, 0.0, 0.0, 0,
      0.0, 0.0, 0.0, 0.0
    ] );
  } 

  // ------

  let ret = new Float32Array( buffer );

  return {
    triangles: _array.length / 9,
    length: buffer.length,
    array: ret
  };
};

export default bvh;