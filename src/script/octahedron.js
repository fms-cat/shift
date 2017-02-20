let octahedron = ( _div ) => {
  let pos = [];
  let nor = [];

  for ( let ii = 0; ii < 2; ii ++ ) {
    for ( let iq = 0; iq < 4; iq ++ ) {
      for ( let iy = 0; iy < _div + 1; iy ++ ) {
        for ( let ix = 0; ix < iy + 1; ix ++ ) {
          let lat0 = ( ii * 2.0 + iy / ( _div + 1 ) ) * Math.PI / 2.0;
          let lat1 = ( ii * 2.0 + ( iy + 1 ) / ( _div + 1 ) ) * Math.PI / 2.0;

          let lon0 = ( ii * 2.0 - 1.0 ) * ( ( ix - 1 ) / Math.max( 1, iy ) + iq ) * Math.PI / 2.0;
          let lon1 = ( ii * 2.0 - 1.0 ) * ( ix / ( iy + 1 ) + iq ) * Math.PI / 2.0;
          let lon2 = ( ii * 2.0 - 1.0 ) * ( ix / Math.max( 1, iy ) + iq ) * Math.PI / 2.0;
          let lon3 = ( ii * 2.0 - 1.0 ) * ( ( ix + 1 ) / ( iy + 1 ) + iq ) * Math.PI / 2.0;

          if ( ix !== 0 ) {
            let x1 = Math.sin( lat0 ) * Math.cos( lon0 ); pos.push( x1 );
            let y1 = Math.cos( lat0 ); pos.push( y1 );
            let z1 = Math.sin( lat0 ) * Math.sin( lon0 ); pos.push( z1 );

            let x2 = Math.sin( lat1 ) * Math.cos( lon1 ); pos.push( x2 );
            let y2 = Math.cos( lat1 ); pos.push( y2 );
            let z2 = Math.sin( lat1 ) * Math.sin( lon1 ); pos.push( z2 );

            let x3 = Math.sin( lat0 ) * Math.cos( lon2 ); pos.push( x3 );
            let y3 = Math.cos( lat0 ); pos.push( y3 );
            let z3 = Math.sin( lat0 ) * Math.sin( lon2 ); pos.push( z3 );

            {
              let x = x1 + x2 + x3;
              let y = y1 + y2 + y3;
              let z = z1 + z2 + z3;
              let l = Math.sqrt( x * x + y * y + z * z );

              for ( let i = 0; i < 3; i ++ ) {
                nor.push( x / l );
                nor.push( y / l );
                nor.push( z / l );
              }
            }
          }

          {
            let x1 = Math.sin( lat0 ) * Math.cos( lon2 ); pos.push( x1 );
            let y1 = Math.cos( lat0 ); pos.push( y1 );
            let z1 = Math.sin( lat0 ) * Math.sin( lon2 ); pos.push( z1 );

            let x2 = Math.sin( lat1 ) * Math.cos( lon1 ); pos.push( x2 );
            let y2 = Math.cos( lat1 ); pos.push( y2 );
            let z2 = Math.sin( lat1 ) * Math.sin( lon1 ); pos.push( z2 );

            let x3 = Math.sin( lat1 ) * Math.cos( lon3 ); pos.push( x3 );
            let y3 = Math.cos( lat1 ); pos.push( y3 );
            let z3 = Math.sin( lat1 ) * Math.sin( lon3 ); pos.push( z3 );

            {
              let x = x1 + x2 + x3;
              let y = y1 + y2 + y3;
              let z = z1 + z2 + z3;
              let l = Math.sqrt( x * x + y * y + z * z );

              for ( let i = 0; i < 3; i ++ ) {
                nor.push( x / l );
                nor.push( y / l );
                nor.push( z / l );
              }
            }
          }
        }
      }
    }
  }

  return {
    pos: pos,
    nor: nor
  };
};

export default octahedron;