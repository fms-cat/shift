export default {
  pos: [
    1,1,1,1,-1,1,1,-1,-1,
    1,1,1,1,-1,-1,1,1,-1,
    -1,1,-1,-1,-1,-1,-1,-1,1,
    -1,1,-1,-1,-1,1,-1,1,1,
    -1,1,-1,-1,1,1,1,1,1,
    -1,1,-1,1,1,1,1,1,-1,
    -1,-1,1,-1,-1,-1,1,-1,-1,
    -1,-1,1,1,-1,-1,1,-1,1,
    -1,1,1,-1,-1,1,1,-1,1,
    -1,1,1,1,-1,1,1,1,1,
    1,1,-1,1,-1,-1,-1,-1,-1,
    1,1,-1,-1,-1,-1,-1,1,-1
  ],
  nor: [
    [1,0,0],
    [-1,0,0],
    [0,1,0],
    [0,-1,0],
    [0,0,1],
    [0,0,-1]
  ].reduce( ( p, v ) => { for ( let i = 0; i < 6; i ++ ) { p = p.concat( v ); } return p; }, [] )
};