let stlLoader = ( _url, _callback ) => {
  let xhr = new XMLHttpRequest();
  xhr.open( 'GET', _url, true );
  xhr.responseType = 'arraybuffer';
  xhr.onload = () => {
    let view = new DataView( xhr.response );
    let head = 80;

    let triangleLength = view.getUint32( head, true );
    head += 4;

    // ------

    let tris = new Float32Array( triangleLength * 3 * 3 );

    for ( let iTri = 0; iTri < triangleLength; iTri ++ ) {
      let verts = [];

      for ( let iVert = 0; iVert < 3; iVert ++ ) {
        verts[ iVert ] = [];

        for ( let iAx = 0; iAx < 3; iAx ++ ) {
          tris[ iTri * 9 + iVert * 3 + iAx ] = view.getFloat32( head + 12 + 4 * iAx + 12 * iVert, true );
        }
      }

      head += 50;
    }

    // ------

    _callback( tris );
  };
  xhr.send();
};

export default stlLoader;