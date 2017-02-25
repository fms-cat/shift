import Automaton from "./automaton.min";
import GLCat from "./glcat.min";
import xorshift from "./xorshift";
import bvh from "./bvh";
import stlLoader from "./stl";
import cube from "./cube";
import octahedron from "./octahedron";
import music from "./music";

let glslify = require( "glslify" );

// ------

let go = () => {
  let automaton = Automaton( {
    gui: checkboxGUI.checked,
    seek: ( t ) => { music.seek( t ); return t; },
    data: `
{"length":170,"resolution":400,"params":{"particleSize":[{"time":0,"value":0,"mode":1,"params":{},"mods":[false,false,false,false]},{"time":24.683214285714286,"value":0,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":26.057142857142857,"value":0.7,"mode":2,"params":{},"mods":[false,false,false,false]},{"time":68.57142857142857,"value":1,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":89.14285714285715,"value":0,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":90.51428571428572,"value":0,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":91.88571428571429,"value":1,"mode":4,"params":{"rate":500,"damp":1},"mods":[false,false,false,false]},{"time":156.34285714285713,"value":0,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":170,"value":0,"mode":0,"params":{},"mods":[false,false,false,false]}],"shiftPosX":[{"time":0,"value":8.083293868497366,"mode":1,"params":{},"mods":[false,false,false,false]},{"time":24.342857142857145,"value":8.083293868497366,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":24.685714285714287,"value":10.32,"mode":4,"params":{"rate":2000,"damp":1},"mods":[false,false,false,false]},{"time":46.285714285714285,"value":10.32,"mode":2,"params":{},"mods":[false,false,false,false]},{"time":46.628571428571426,"value":6.5,"mode":4,"params":{"rate":500,"damp":1},"mods":[false,false,false,false]},{"time":68.57142857142857,"value":4,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":90.51428571428572,"value":4,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":112.45714285714287,"value":3.98323639663728,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":170,"value":0,"mode":0,"params":{},"mods":[false,false,false,false]}],"shiftPosY":[{"time":0,"value":9.850362763367643,"mode":1,"params":{},"mods":[false,false,false,false]},{"time":24.342857142857145,"value":9.850362763367643,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":24.685714285714287,"value":6.37,"mode":4,"params":{"rate":2000,"damp":1},"mods":[false,false,false,false]},{"time":46.28454581097114,"value":6.37,"mode":2,"params":{},"mods":[false,false,false,false]},{"time":46.628571428571426,"value":6.85,"mode":4,"params":{"rate":500,"damp":1},"mods":[false,false,false,false]},{"time":68.57142857142857,"value":4,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":112.45714285714287,"value":5.314191908355392,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":170,"value":0,"mode":0,"params":{},"mods":[false,false,false,false]}],"shiftPosZ":[{"time":0,"value":8.966828315932505,"mode":1,"params":{},"mods":[false,false,false,false]},{"time":24.342857142857145,"value":8.966828315932505,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":24.685714285714287,"value":4.46,"mode":4,"params":{"rate":2000,"damp":1},"mods":[false,false,false,false]},{"time":46.285714285714285,"value":4.46,"mode":2,"params":{},"mods":[false,false,false,false]},{"time":46.628571428571426,"value":3.72,"mode":4,"params":{"rate":500,"damp":1},"mods":[false,false,false,false]},{"time":68.57142857142857,"value":4,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":90.51428571428572,"value":4,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":112.45714285714287,"value":4.071,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":170,"value":0,"mode":0,"params":{},"mods":[false,false,false,false]}],"shiftSizeX":[{"time":0,"value":1.2674567025691594,"mode":1,"params":{},"mods":[false,false,false,false]},{"time":24.342857142857145,"value":1.2674567025691594,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":24.685714285714287,"value":0.559853048931596,"mode":4,"params":{"rate":2000,"damp":1},"mods":[false,false,false,false]},{"time":46.285714285714285,"value":0.559853048931596,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":46.628571428571426,"value":0.8469336313170741,"mode":4,"params":{"rate":500,"damp":1},"mods":[false,false,false,false]},{"time":68.57142857142857,"value":0.07,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":111.08571428571429,"value":-1,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":112.45714285714287,"value":0.07,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":154.97142857142856,"value":-1,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":170,"value":0,"mode":0,"params":{},"mods":[false,false,false,false]}],"shiftSizeY":[{"time":0,"value":0.2577030483575733,"mode":1,"params":{},"mods":[false,false,false,false]},{"time":24.342857142857145,"value":0.2577030483575733,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":24.685714285714287,"value":0.37569738978952394,"mode":4,"params":{"rate":2000,"damp":1},"mods":[false,false,false,false]},{"time":46.285714285714285,"value":0.37569738978952394,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":46.628571428571426,"value":0.28082107960568514,"mode":4,"params":{"rate":500,"damp":1},"mods":[false,false,false,false]},{"time":68.57142857142857,"value":0.7,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":170,"value":0,"mode":0,"params":{},"mods":[false,false,false,false]}],"shiftSizeZ":[{"time":0,"value":0.051968738632372,"mode":1,"params":{},"mods":[false,false,false,false]},{"time":24.342857142857145,"value":0.051968738632372,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":24.685714285714287,"value":0.30203512613269456,"mode":4,"params":{"rate":2000,"damp":1},"mods":[false,false,false,false]},{"time":46.285714285714285,"value":0.30203512613269456,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":46.628571428571426,"value":0.10663260215602843,"mode":4,"params":{"rate":500,"damp":1},"mods":[false,false,false,false]},{"time":68.57142857142857,"value":0.7,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":170,"value":0,"mode":0,"params":{},"mods":[false,false,false,false]}],"shiftRotX":[{"time":0,"value":0.1462945446883864,"mode":1,"params":{},"mods":[false,false,false,false]},{"time":24.342857142857145,"value":0.1331235666652777,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":24.685714285714287,"value":-0.006976833315715303,"mode":4,"params":{"rate":2000,"damp":1},"mods":[false,false,false,false]},{"time":46.285714285714285,"value":-0.006976833315715303,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":46.628571428571426,"value":0.1462945446883864,"mode":4,"params":{"rate":500,"damp":1},"mods":[false,false,false,false]},{"time":68.57142857142857,"value":0.16,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":170,"value":0,"mode":0,"params":{},"mods":[false,false,false,false]}],"shiftRotY":[{"time":0,"value":0.12834511830813566,"mode":1,"params":{},"mods":[false,false,false,false]},{"time":24.342857142857145,"value":0.09311788678702992,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":24.685714285714287,"value":-0.025679657326344474,"mode":4,"params":{"rate":2000,"damp":1},"mods":[false,false,false,false]},{"time":46.285714285714285,"value":-0.025679657326344474,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":46.628571428571426,"value":0.12834511830813566,"mode":4,"params":{"rate":500,"damp":1},"mods":[false,false,false,false]},{"time":68.57142857142857,"value":0.13,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":170,"value":0,"mode":0,"params":{},"mods":[false,false,false,false]}],"shiftRotZ":[{"time":0,"value":-0.04858494172576461,"mode":1,"params":{},"mods":[false,false,false,false]},{"time":24.342857142857145,"value":-0.026899152847715158,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":24.685714285714287,"value":0.004244861090662244,"mode":4,"params":{"rate":2000,"damp":1},"mods":[false,false,false,false]},{"time":46.285714285714285,"value":0.004244861090662244,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":46.628571428571426,"value":-0.04858494172576461,"mode":4,"params":{"rate":500,"damp":1},"mods":[false,false,false,false]},{"time":68.57776396612941,"value":-0.02,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":170,"value":0,"mode":0,"params":{},"mods":[false,false,false,false]}],"cameraPosX":[{"time":0,"value":0,"mode":1,"params":{},"mods":[false,false,false,false]},{"time":24.342857142857145,"value":0,"mode":0,"params":{},"mods":[false,{"freq":7,"amp":0.2,"phase":0},false,false]},{"time":24.685714285714287,"value":0,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":45.25714285714285,"value":0,"mode":0,"params":{},"mods":[false,{"freq":5,"amp":2,"phase":0},false,false]},{"time":46.285714285714285,"value":1,"mode":2,"params":{},"mods":[false,false,false,false]},{"time":46.628571428571426,"value":1,"mode":2,"params":{},"mods":[false,false,false,false]},{"time":68.57142857142857,"value":0,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":74.05714285714286,"value":0.9949013330657657,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":79.54285714285714,"value":2.5678546430704148,"mode":2,"params":{},"mods":[false,false,false,false]},{"time":79.54535714285714,"value":0.6016630055646042,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":85.05673744715212,"value":0,"mode":2,"params":{},"mods":[false,false,false,false]},{"time":90.51428571428572,"value":0,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":111.08571428571429,"value":0,"mode":0,"params":{},"mods":[false,{"freq":5,"amp":2,"phase":0},false,false]},{"time":112.45714285714287,"value":0,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":154.97142857142856,"value":0.017358397810538717,"mode":0,"params":{},"mods":[false,{"freq":9,"amp":2,"phase":0},false,false]},{"time":170,"value":0,"mode":0,"params":{},"mods":[false,false,false,false]}],"cameraPosY":[{"time":0,"value":0,"mode":1,"params":{},"mods":[false,false,false,false]},{"time":24.342857142857145,"value":0,"mode":0,"params":{},"mods":[false,{"freq":8,"amp":0.2,"phase":0},false,false]},{"time":24.685714285714287,"value":0,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":46.628571428571426,"value":0,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":170,"value":0,"mode":0,"params":{},"mods":[false,false,false,false]}],"cameraPosZ":[{"time":0,"value":3,"mode":1,"params":{},"mods":[false,false,false,false]},{"time":24.685714285714287,"value":0,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":45.25714285714285,"value":2,"mode":0,"params":{},"mods":[false,{"freq":5,"amp":2,"phase":0.25},false,false]},{"time":46.285714285714285,"value":52,"mode":2,"params":{},"mods":[false,false,false,false]},{"time":46.628571428571426,"value":52,"mode":2,"params":{},"mods":[false,false,false,false]},{"time":68.57142857142857,"value":2,"mode":1,"params":{},"mods":[false,false,false,false]},{"time":68.57392857142857,"value":1,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":74.05714285714286,"value":3,"mode":2,"params":{},"mods":[false,false,false,false]},{"time":74.05964285714286,"value":0.9075150380655073,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":79.54285714285714,"value":0.33950412056382806,"mode":2,"params":{},"mods":[false,false,false,false]},{"time":79.54535714285714,"value":2.742627233070934,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":85.02857142857144,"value":1.519219103067317,"mode":2,"params":{},"mods":[false,false,false,false]},{"time":90,"value":50,"mode":5,"params":{"gravity":3,"bounce":0.3},"mods":[false,false,false,false]},{"time":90.0025,"value":2,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":90.51428571428572,"value":0,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":111.08571428571429,"value":0,"mode":0,"params":{},"mods":[false,{"freq":5,"amp":2,"phase":0.25},false,false]},{"time":112.45714285714287,"value":0,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":154.97142857142856,"value":2,"mode":0,"params":{},"mods":[false,{"freq":9,"amp":2,"phase":0.25},false,false]},{"time":170,"value":0,"mode":0,"params":{},"mods":[{"velocity":0},false,false,false]}],"cameraTarX":[{"time":0,"value":0,"mode":1,"params":{},"mods":[false,false,false,false]},{"time":45.25714285714285,"value":0,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":46.285714285714285,"value":0.6,"mode":2,"params":{},"mods":[false,false,false,false]},{"time":46.628571428571426,"value":0.6,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":68.57142857142857,"value":0.6,"mode":0,"params":{},"mods":[false,false,{"freq":1,"amp":0.5,"reso":8,"recursion":4,"seed":76},false]},{"time":68.57392857142857,"value":0,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":170,"value":0,"mode":0,"params":{},"mods":[false,false,false,false]}],"cameraTarY":[{"time":0,"value":0,"mode":1,"params":{},"mods":[false,false,false,false]},{"time":68.57142857142857,"value":0,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":170,"value":0,"mode":0,"params":{},"mods":[false,false,false,false]}],"cameraTarZ":[{"time":0,"value":0,"mode":1,"params":{},"mods":[false,false,false,false]},{"time":45.25714285714285,"value":0,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":46.28072842603181,"value":50,"mode":2,"params":{},"mods":[false,false,false,false]},{"time":46.628571428571426,"value":50,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":68.57142857142857,"value":0,"mode":1,"params":{},"mods":[false,false,{"freq":1,"amp":0.5,"reso":8,"recursion":4,"seed":78},false]},{"time":170,"value":0,"mode":0,"params":{},"mods":[false,false,false,false]}],"spherePosX":[{"time":0,"value":0,"mode":1,"params":{},"mods":[false,false,false,false]},{"time":170,"value":0,"mode":0,"params":{},"mods":[false,false,false,false]}],"spherePosY":[{"time":0,"value":0,"mode":1,"params":{},"mods":[false,false,false,false]},{"time":170,"value":0,"mode":0,"params":{},"mods":[false,false,false,false]}],"spherePosZ":[{"time":0,"value":0,"mode":1,"params":{},"mods":[false,false,false,false]},{"time":170,"value":0,"mode":0,"params":{},"mods":[false,false,false,false]}],"sphereSize":[{"time":0,"value":0,"mode":1,"params":{},"mods":[false,false,false,false]},{"time":68.57142857142857,"value":0.5,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":112.45714285714287,"value":0,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":134.39999999999998,"value":0,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":135.77142857142857,"value":0.5,"mode":2,"params":{},"mods":[false,false,false,false]},{"time":156.34285714285713,"value":0,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":170,"value":0,"mode":0,"params":{},"mods":[false,false,false,false]}],"sphereLofi":[{"time":0,"value":0,"mode":1,"params":{},"mods":[false,false,false,false]},{"time":68.57142857142857,"value":0.75,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":90.51428571428572,"value":0.375,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":111.08571428571429,"value":0.375,"mode":1,"params":{},"mods":[false,{"freq":3,"amp":0.375,"phase":0.25},false,false]},{"time":111.08821428571429,"value":0.75,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":111.42857142857143,"value":0,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":111.77142857142857,"value":0.4,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":112.11428571428571,"value":0,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":112.45714285714287,"value":1,"mode":1,"params":{},"mods":[false,false,false,false]},{"time":134.39999999999998,"value":0,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":154.97142857142856,"value":0.75,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":155.31428571428572,"value":0,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":155.65714285714284,"value":0.4,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":156,"value":0,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":156.34285714285713,"value":1,"mode":1,"params":{},"mods":[false,false,false,false]},{"time":170,"value":0,"mode":0,"params":{},"mods":[false,false,false,false]}],"anotherShader":[{"time":0,"value":1,"mode":1,"params":{},"mods":[false,false,false,false]},{"time":46.628571428571426,"value":1,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":90.17142857142858,"value":1,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":90.51428571428572,"value":0,"mode":4,"params":{"rate":500,"damp":1},"mods":[false,false,false,false]},{"time":111.08571428571429,"value":1,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":112.47078087331866,"value":0,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":134.20049040066792,"value":-0.7649420337895503,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":134.39999999999998,"value":0,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":145.37142857142857,"value":3,"mode":2,"params":{},"mods":[false,false,false,false]},{"time":154.97142857142856,"value":10,"mode":2,"params":{},"mods":[false,false,false,false]},{"time":154.97392857142856,"value":1,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":170,"value":0,"mode":0,"params":{},"mods":[false,false,false,false]}],"anotherShaderDif":[{"time":0,"value":0.5,"mode":1,"params":{},"mods":[false,false,false,false]},{"time":24.17142857142857,"value":0.23,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":68.22857142857143,"value":0.23,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":68.57142857142857,"value":0,"mode":2,"params":{},"mods":[false,false,false,false]},{"time":69.25714285714287,"value":0.4,"mode":2,"params":{},"mods":[false,false,false,false]},{"time":90.08571428571429,"value":0,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":134.39999999999998,"value":0,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":142.62857142857143,"value":0.3,"mode":2,"params":{},"mods":[false,false,false,false]},{"time":150.85714285714286,"value":0.2,"mode":2,"params":{},"mods":[false,false,false,false]},{"time":170,"value":0,"mode":0,"params":{},"mods":[false,false,false,false]}],"anotherShaderEdge":[{"time":0,"value":-1,"mode":1,"params":{},"mods":[false,false,false,false]},{"time":24.17142857142857,"value":1,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":68.22870073919495,"value":0.8,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":68.57040571327354,"value":0,"mode":2,"params":{},"mods":[false,false,false,false]},{"time":90.08571428571429,"value":1,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":134.39999999999998,"value":1,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":142.62857142857143,"value":-1,"mode":2,"params":{},"mods":[false,false,false,false]},{"time":154.97142857142856,"value":1,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":170,"value":0,"mode":0,"params":{},"mods":[false,false,false,false]}],"particlePosX":[{"time":0,"value":0,"mode":1,"params":{},"mods":[false,false,false,false]},{"time":170,"value":0,"mode":0,"params":{},"mods":[false,false,false,false]}],"particlePosY":[{"time":0,"value":0,"mode":1,"params":{},"mods":[false,false,false,false]},{"time":24.685714285714287,"value":2,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":46.628571428571426,"value":0,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":112.45714285714287,"value":2,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":134.39999999999998,"value":0,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":170,"value":0,"mode":0,"params":{},"mods":[false,false,false,false]}],"particlePosZ":[{"time":0,"value":0,"mode":1,"params":{},"mods":[false,false,false,false]},{"time":46.628571428571426,"value":45,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":65.8197481623429,"value":1.5,"mode":1,"params":{},"mods":[false,false,false,false]},{"time":68.57142857142857,"value":0,"mode":4,"params":{"rate":5,"damp":1},"mods":[false,false,false,false]},{"time":170,"value":0,"mode":0,"params":{},"mods":[false,false,false,false]}],"cameraRoll":[{"time":0,"value":0,"mode":1,"params":{},"mods":[false,false,false,false]},{"time":24.342857142857145,"value":0,"mode":0,"params":{},"mods":[false,{"freq":5,"amp":0.1,"phase":0},false,false]},{"time":24.685714285714287,"value":0,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":45.25714285714285,"value":0,"mode":0,"params":{},"mods":[false,{"freq":8,"amp":0.1,"phase":0},false,false]},{"time":46.628571428571426,"value":0,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":68.57142857142857,"value":0,"mode":0,"params":{},"mods":[false,false,{"freq":1,"amp":0.2,"reso":8,"recursion":4,"seed":81},false]},{"time":90.51428571428572,"value":0,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":111.08571428571429,"value":0,"mode":0,"params":{},"mods":[false,{"freq":4,"amp":0.1,"phase":0},false,false]},{"time":112.45714285714287,"value":0,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":154.97142857142856,"value":0,"mode":0,"params":{},"mods":[false,{"freq":8,"amp":0.1,"phase":0},false,false]},{"time":170,"value":0,"mode":0,"params":{},"mods":[false,false,false,false]}],"particleGenSize":[{"time":0,"value":10000,"mode":1,"params":{},"mods":[false,false,false,false]},{"time":24.685714285714287,"value":0.2,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":46.628571428571426,"value":3,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":170,"value":1,"mode":0,"params":{},"mods":[false,false,false,false]}],"particleField":[{"time":0,"value":0,"mode":1,"params":{},"mods":[false,false,false,false]},{"time":46.628571428571426,"value":1,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":112.45714285714287,"value":0.2,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":134.39999999999998,"value":1,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":170,"value":1,"mode":0,"params":{},"mods":[false,false,false,false]}],"particleGravity":[{"time":0,"value":0,"mode":1,"params":{},"mods":[false,false,false,false]},{"time":24.685714285714287,"value":4,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":46.628571428571426,"value":0,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":112.45714285714287,"value":4,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":134.39999999999998,"value":0,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":170,"value":1,"mode":0,"params":{},"mods":[false,false,false,false]}],"distFuncMode":[{"time":0,"value":0,"mode":1,"params":{},"mods":[false,false,false,false]},{"time":24.685714285714287,"value":0,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":26.057142857142857,"value":1,"mode":2,"params":{},"mods":[false,false,false,false]},{"time":30.171428571428574,"value":1,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":31.542857142857144,"value":2,"mode":2,"params":{},"mods":[false,false,false,false]},{"time":35.65714285714285,"value":2,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":37.028571428571425,"value":3,"mode":2,"params":{},"mods":[false,false,false,false]},{"time":41.14285714285714,"value":3,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":42.51428571428571,"value":4,"mode":2,"params":{},"mods":[false,false,false,false]},{"time":46.628571428571426,"value":0,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":112.45964285714287,"value":2.5,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":133.0285714285714,"value":1,"mode":0,"params":{},"mods":[false,{"freq":2,"amp":1.5,"phase":0.75},false,false]},{"time":134.39999999999998,"value":0,"mode":1,"params":{},"mods":[{"velocity":0},false,false,false]},{"time":170,"value":1,"mode":0,"params":{},"mods":[{"velocity":0},false,false,false]}],"randomyGlitch":[{"time":0,"value":0,"mode":1,"params":{},"mods":[false,false,false,false]},{"time":90.17142857142858,"value":1,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":90.51428571428572,"value":0,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":112.11428571428571,"value":1,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":112.45714285714287,"value":0,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":156,"value":1,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":156.34285714285713,"value":0,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":170,"value":1,"mode":0,"params":{},"mods":[false,false,false,false]}],"sphereBeat":[{"time":0,"value":0,"mode":1,"params":{},"mods":[false,false,false,false]},{"time":90.51428571428572,"value":0.3,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":111.08571428571429,"value":0,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":134.39999999999998,"value":0.3,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":154.97142857142856,"value":0,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":170,"value":0,"mode":0,"params":{},"mods":[false,false,false,false]}],"finalGlitch":[{"time":0,"value":0,"mode":1,"params":{},"mods":[false,false,false,false]},{"time":19.2,"value":0,"mode":5,"params":{"gravity":0.004,"bounce":0.3},"mods":[false,false,false,false]},{"time":24,"value":0.2,"mode":5,"params":{"gravity":0.01,"bounce":0.3},"mods":[false,false,false,false]},{"time":24.685714285714287,"value":0,"mode":4,"params":{"rate":500,"damp":1},"mods":[false,false,false,false]},{"time":46.285714285714285,"value":0.17744413870839815,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":46.628571428571426,"value":0,"mode":4,"params":{"rate":720,"damp":1},"mods":[{"velocity":0},false,false,false]},{"time":68.22857142857143,"value":0,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":68.57142857142857,"value":0.04,"mode":2,"params":{},"mods":[false,false,false,false]},{"time":69.94285714285715,"value":0,"mode":2,"params":{},"mods":[false,false,false,false]},{"time":85.02857142857144,"value":0,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":89.82857142857144,"value":0.2,"mode":5,"params":{"gravity":0.01,"bounce":0.3},"mods":[false,false,false,false]},{"time":90.51428571428572,"value":0,"mode":4,"params":{"rate":500,"damp":1},"mods":[false,false,false,false]},{"time":111.08569040190697,"value":0.01,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":111.42857142857143,"value":0,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":111.77142857142857,"value":0.01,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":112.11428571428571,"value":0,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":154.97142857142856,"value":0.01,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":155.31428571428572,"value":0,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":155.65714285714284,"value":0.01,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":156,"value":0,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":170,"value":1,"mode":0,"params":{},"mods":[false,false,false,false]}]},"gui":{"beatSnap":true,"beatSnapBpm":175,"beatSnapOffset":2.742857142857143,"timelineMinT":0,"timelineMaxT":170,"timelineMinV":2.4211163725121034,"timelineMaxV":8.460160080159199}}
    `
  } );
  let auto = automaton.auto;

  // ------

  let width = canvas.width = 1280 * selectReso.value;
  let height = canvas.height = 720 * selectReso.value;

  let gl = canvas.getContext( "webgl" );
  let glCat = new GLCat( gl );

  let time = 0.0;
  let deltaTime = 1.0 / 60.0;
  let beginDate = +new Date();

  let particleCountSqrt = 64;
  let particleCount = particleCountSqrt * particleCountSqrt;
  let particleInit = true;

  let charCubeCountSqrt = 32;
  let charCubeCount = charCubeCountSqrt * charCubeCountSqrt;

  // ------

  let vboQuad = glCat.createVertexbuffer( [ -1, -1, 1, -1, -1, 1, 1, 1 ] );

  let vboParticle = glCat.createVertexbuffer( ( () => {
    let ret = [];
    for ( let i = 0; i < particleCount; i ++ ) {
      ret.push( i );
    }
    return ret;
  } )() );

  let vboCharCube = glCat.createVertexbuffer( ( () => {
    let ret = [];
    for ( let i = 0; i < charCubeCount; i ++ ) {
      ret.push( i );
    }
    return ret;
  } )() );

  let oct0 = octahedron( 0 );
  let vboOctPos = glCat.createVertexbuffer( oct0.pos );
  let vboOctNor = glCat.createVertexbuffer( oct0.nor );

  let vboCubePos = glCat.createVertexbuffer( cube.pos );
  let vboCubeNor = glCat.createVertexbuffer( cube.nor );

  // ------

  let shader = "\n#define REFLECT_ITER " + selectRef.value + glslify( "./shader/shader.glsl" );

  let programReturn = glCat.createProgram(
    "#define _VERT\n#define _VQUAD"+shader,
    "#define _FRAG\n#define _RETURN"+shader
  );

  let programParticleCompute = glCat.createProgram(
    "#define _VERT\n#define _VQUAD"+shader,
    "#define _FRAG\n#define _PARTICLECOMPUTE"+shader
  );

  let programParticleRender = glCat.createProgram(
    "#define _VERT\n#define _VPARTICLERENDER"+shader,
    "#define _FRAG\n#define _PARTICLERENDER"+shader
  );

  let programCharCubeCompute = glCat.createProgram(
    "#define _VERT\n#define _VQUAD"+shader,
    "#define _FRAG\n#define _CHARCUBECOMPUTE"+shader
  );

  let programRender = glCat.createProgram(
    "#define _VERT\n#define _VQUAD"+shader,
    "#define _FRAG\n#define _RENDER"+shader
  );

  let programDownscale = glCat.createProgram(
    "#define _VERT\n#define _VQUAD"+shader,
    "#define _FRAG\n#define _DOWNSCALE"+shader
  );

  let programParticleIllumination = glCat.createProgram(
    "#define _VERT\n#define _VPARTICLEILLUMINATION"+shader,
    "#define _FRAG\n#define _PARTICLEILLUMINATION"+shader
  );

  let programBloom = glCat.createProgram(
    "#define _VERT\n#define _VQUAD"+shader,
    "#define _FRAG\n#define _BLOOM"+shader
  );

  let programPost = glCat.createProgram(
    "#define _VERT\n#define _VQUAD"+shader,
    "#define _FRAG\n#define _POST"+shader
  );

  let programGlitch = glCat.createProgram(
    "#define _VERT\n#define _VQUAD"+shader,
    "#define _FRAG\n#define _GLITCH"+shader
  );

  // ------

  let framebufferDownscale = glCat.createFloatFramebuffer( width * 0.25, height * 0.25 );
  let framebufferParticleIllumination = glCat.createFloatFramebuffer( width * 0.25, height * 0.25 );
  let framebufferBloomTemp = glCat.createFloatFramebuffer( width * 0.25, height * 0.25 );
  let framebufferBloom = glCat.createFloatFramebuffer( width * 0.25, height * 0.25 );

  let drawbuffersParticleIndex = 0;
  let drawbuffersParticle = [
    glCat.createDrawBuffers( particleCountSqrt, particleCountSqrt, 4 ),
    glCat.createDrawBuffers( particleCountSqrt, particleCountSqrt, 4 )
  ];
  let drawbuffersCharCube = [
    glCat.createDrawBuffers( charCubeCountSqrt, charCubeCountSqrt, 4 ),
    glCat.createDrawBuffers( charCubeCountSqrt, charCubeCountSqrt, 4 )
  ];

  let framebufferPost = glCat.createFloatFramebuffer( width, height );

  let drawbuffersParticleRender = glCat.createDrawBuffers( width, height, 3 );
  let drawbuffersRender = glCat.createDrawBuffers( width, height, 3 );

  // ------

  let textureRandomSize = 256;

  let textureRandomUpdate = ( _tex ) => {
    glCat.setTextureFromFloatArray( _tex, textureRandomSize, textureRandomSize, ( () => {
      let len = textureRandomSize * textureRandomSize * 4;
      let ret = new Float32Array( len );
      for ( let i = 0; i < len; i ++ ) {
        ret[ i ] = xorshift();
      }
      return ret;
    } )() );
  };

  let textureRandom = glCat.createTexture();
  glCat.textureWrap( textureRandom, gl.REPEAT );
  textureRandomUpdate( textureRandom );

  let textureModelWidth;
  let textureModelHeight;
  let textureModel = glCat.createTexture();
  {
    let data = bvh( octahedron( 5 ).pos );
    textureModelWidth = 768;
    textureModelHeight = data.length / 4 / 768;
    glCat.setTextureFromFloatArray( textureModel, textureModelWidth, textureModelHeight, data.array );
  }

  let charDef = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 4329476, 10813440, 11512810, 31636111, 18092113, 3332406, 4325376, 8523912, 2232450, 4897444, 4357252, 132, 31744, 4, 17043521,
    15259182, 6426756, 16267327, 15249966, 18414096, 32554511, 31505966, 33079824, 15252014, 15268366, 131200, 131204, 8521864, 459200, 2236546, 15249412,
    15267454, 15269425, 16301615, 15238702, 16303663, 32554047, 32554017, 14738990, 18415153, 32641183, 17318446, 18128177, 1082431, 18732593, 18470705, 15255086,
    16301089, 15258934, 16301617, 31504911, 32641156, 18400814, 18393412, 18536106, 18157905, 18157700, 32772191, 12718220, 1118480, 6426758, 4521984, 31,
  ];

  let textureCharCube = glCat.createTexture();
  let textureCharCubeArray = new Float32Array( charCubeCount * 4 );
  let textureCharCubeIndex = 0;
  let genCharCube = ( _str ) => {
    for ( let iChar = 0; iChar < _str.length; iChar ++ ) {
      let v = charDef[ _str.charCodeAt( iChar ) ];
      for ( let iPos = 0; iPos < 25; iPos ++ ) {
        if ( ( v >> iPos ) & 1 ) {
          let x = iPos % 5 + 1 + iChar * 6 - _str.length * 3;
          let y = Math.floor( iPos / 5 ) - 2;
          textureCharCubeArray[ textureCharCubeIndex * 4 + 0 ] = x;
          textureCharCubeArray[ textureCharCubeIndex * 4 + 1 ] = y;
          textureCharCubeArray[ textureCharCubeIndex * 4 + 2 ] = 0.0;
          textureCharCubeArray[ textureCharCubeIndex * 4 + 3 ] = Math.random();
          textureCharCubeIndex = ( textureCharCubeIndex + 1 ) % charCubeCount;
        }
      }
    }
    glCat.setTextureFromFloatArray( textureCharCube, charCubeCountSqrt, charCubeCountSqrt, textureCharCubeArray );
  }
  let resetCharCube = () => {
    textureCharCubeArray.fill( 0 );
    glCat.setTextureFromFloatArray( textureCharCube, charCubeCountSqrt, charCubeCountSqrt, textureCharCubeArray );
  };

  // ------

  let uniforms = () => {
    glCat.uniform1f( "time", time );
    glCat.uniform1f( "deltaTime", deltaTime );

    glCat.uniform1f( "distFuncMode", auto( "distFuncMode" ) );

    glCat.uniform1f( "particleSize", auto( "particleSize" ) );
    glCat.uniform1f( "particleField", auto( "particleField" ) );
    glCat.uniform1f( "particleGravity", auto( "particleGravity" ) );
    glCat.uniform1f( "particleGenSize", auto( "particleGenSize" ) );
    glCat.uniform3fv( "particlePos", [
      auto( "particlePosX" ),
      auto( "particlePosY" ),
      auto( "particlePosZ" )
    ] );
    
    glCat.uniform3fv( "shiftPos", [
      auto( "shiftPosX" ),
      auto( "shiftPosY" ),
      auto( "shiftPosZ" )
    ] );
    glCat.uniform3fv( "shiftSize", [
      auto( "shiftSizeX" ),
      auto( "shiftSizeY" ),
      auto( "shiftSizeZ" )
    ] );
    glCat.uniform3fv( "shiftRot", [
      auto( "shiftRotX" ),
      auto( "shiftRotY" ),
      auto( "shiftRotZ" )
    ] );
    
    glCat.uniform3fv( "cameraPos", [
      auto( "cameraPosX" ),
      auto( "cameraPosY" ),
      auto( "cameraPosZ" )
    ] );
    glCat.uniform3fv( "cameraTar", [
      auto( "cameraTarX" ),
      auto( "cameraTarY" ),
      auto( "cameraTarZ" )
    ] );
    glCat.uniform1f( "cameraRoll", auto( "cameraRoll" ) );

    glCat.uniform3fv( "spherePos", [
      auto( "spherePosX" ),
      auto( "spherePosY" ),
      auto( "spherePosZ" )
    ] );
    glCat.uniform1f( "sphereSize", auto( "sphereSize" ) );
    glCat.uniform1f( "sphereBeat", auto( "sphereBeat" ) );
    glCat.uniform1f( "sphereLofi", auto( "sphereLofi" ) );

    glCat.uniform1f( "anotherShader", auto( "anotherShader" ) );
    glCat.uniform1f( "anotherShaderDif", auto( "anotherShaderDif" ) );
    glCat.uniform1f( "anotherShaderEdge", auto( "anotherShaderEdge" ) );

    glCat.uniform1f( "randomyGlitch", auto( "randomyGlitch" ) );

    glCat.uniform1f( "finalGlitch", auto( "finalGlitch" ) );
  }; 

  // ------

  music.prepare( {
    gl: gl,
    glCat: glCat,
    uniforms: uniforms,
    auto: auto,
    textureRandom, textureRandom
  } );

  // ------

  let render = () => {
    gl.viewport( 0, 0, particleCountSqrt, particleCountSqrt );
    glCat.useProgram( programParticleCompute );
    gl.bindFramebuffer( gl.FRAMEBUFFER, drawbuffersParticle[ ( drawbuffersParticleIndex + 1 ) % 2 ].framebuffer );
    glCat.drawBuffers( drawbuffersParticle[ drawbuffersParticleIndex ].textures.length );
    gl.blendFunc( gl.ONE, gl.ONE );
    glCat.clear( 0.0, 0.0, 0.0, 0.0 );

    glCat.attribute( 'p', vboQuad, 2 );

    uniforms();

    glCat.uniform1i( 'init', particleInit );
    glCat.uniform1f( 'particleCountSqrt', particleCountSqrt );

    glCat.uniformTexture( 'textureP0', drawbuffersParticle[ drawbuffersParticleIndex ].textures[ 0 ], 0 );
    glCat.uniformTexture( 'textureP1', drawbuffersParticle[ drawbuffersParticleIndex ].textures[ 1 ], 1 );
    glCat.uniformTexture( 'textureP2', drawbuffersParticle[ drawbuffersParticleIndex ].textures[ 2 ], 2 );
    glCat.uniformTexture( 'textureP3', drawbuffersParticle[ drawbuffersParticleIndex ].textures[ 3 ], 3 );

    glCat.uniformTexture( 'textureRandom', textureRandom, 4 );

    gl.drawArrays( gl.TRIANGLE_STRIP, 0, 4 );

    // ------

    gl.viewport( 0, 0, charCubeCountSqrt, charCubeCountSqrt );
    glCat.useProgram( programCharCubeCompute );
    gl.bindFramebuffer( gl.FRAMEBUFFER, drawbuffersCharCube[ ( drawbuffersParticleIndex + 1 ) % 2 ].framebuffer );
    glCat.drawBuffers( drawbuffersCharCube[ drawbuffersParticleIndex ].textures.length );
    gl.blendFunc( gl.ONE, gl.ONE );
    glCat.clear( 0.0, 0.0, 0.0, 0.0 );

    glCat.attribute( 'p', vboQuad, 2 );

    uniforms();

    glCat.uniform1i( 'init', particleInit );
    glCat.uniform1f( 'charCubeCountSqrt', charCubeCountSqrt );

    glCat.uniformTexture( 'textureP0', drawbuffersCharCube[ drawbuffersParticleIndex ].textures[ 0 ], 0 );
    glCat.uniformTexture( 'textureP1', drawbuffersCharCube[ drawbuffersParticleIndex ].textures[ 1 ], 1 );
    glCat.uniformTexture( 'textureP2', drawbuffersCharCube[ drawbuffersParticleIndex ].textures[ 2 ], 2 );
    glCat.uniformTexture( 'textureP3', drawbuffersCharCube[ drawbuffersParticleIndex ].textures[ 3 ], 3 );
    glCat.uniformTexture( 'textureCharCube', textureCharCube, 4 );

    glCat.uniformTexture( 'textureRandom', textureRandom, 5 );

    gl.drawArrays( gl.TRIANGLE_STRIP, 0, 4 );

    resetCharCube();

    // ------

    drawbuffersParticleIndex = ( drawbuffersParticleIndex + 1 ) % 2;
    particleInit = false;

    // ------

    gl.viewport( 0, 0, width, height );
    glCat.useProgram( programParticleRender );
    gl.bindFramebuffer( gl.FRAMEBUFFER, drawbuffersParticleRender.framebuffer );
    glCat.drawBuffers( drawbuffersParticleRender.textures.length );
    gl.blendFunc( gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA );
    glCat.clear( 0.0, 0.0, 0.0, 0.0 );

    glCat.attribute( "attPos", vboOctPos, 3 );
    glCat.attribute( "attNor", vboOctNor, 3 );
    glCat.attribute( "particleId", vboParticle, 1, 1 );

    uniforms();

    glCat.uniform2fv( "resolution", [ width, height ] );
    glCat.uniform1f( 'particleCountSqrt', particleCountSqrt );

    glCat.uniformTexture( 'textureP0', drawbuffersParticle[ drawbuffersParticleIndex ].textures[ 0 ], 0 );
    glCat.uniformTexture( 'textureP1', drawbuffersParticle[ drawbuffersParticleIndex ].textures[ 1 ], 1 );
    glCat.uniformTexture( 'textureP2', drawbuffersParticle[ drawbuffersParticleIndex ].textures[ 2 ], 2 );
    glCat.uniformTexture( 'textureP3', drawbuffersParticle[ drawbuffersParticleIndex ].textures[ 3 ], 3 );

    glCat.extInstancedArrays.drawArraysInstancedANGLE( gl.TRIANGLES, 0, oct0.pos.length / 3, particleCount );

    // ------

    gl.viewport( 0, 0, width, height );
    glCat.useProgram( programParticleRender );
    gl.bindFramebuffer( gl.FRAMEBUFFER, drawbuffersParticleRender.framebuffer );
    glCat.drawBuffers( drawbuffersParticleRender.textures.length );
    gl.blendFunc( gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA );

    glCat.attribute( "attPos", vboCubePos, 3 );
    glCat.attribute( "attNor", vboCubeNor, 3 );
    glCat.attribute( "particleId", vboCharCube, 1, 1 );

    uniforms();

    glCat.uniform2fv( "resolution", [ width, height ] );
    glCat.uniform1f( 'particleCountSqrt', charCubeCountSqrt );

    glCat.uniformTexture( 'textureP0', drawbuffersCharCube[ drawbuffersParticleIndex ].textures[ 0 ], 0 );
    glCat.uniformTexture( 'textureP1', drawbuffersCharCube[ drawbuffersParticleIndex ].textures[ 1 ], 1 );
    glCat.uniformTexture( 'textureP2', drawbuffersCharCube[ drawbuffersParticleIndex ].textures[ 2 ], 2 );
    glCat.uniformTexture( 'textureP3', drawbuffersCharCube[ drawbuffersParticleIndex ].textures[ 3 ], 3 );

    glCat.extInstancedArrays.drawArraysInstancedANGLE( gl.TRIANGLES, 0, cube.pos.length / 3, charCubeCount );

    // ------

    gl.viewport( 0, 0, width, height );
    glCat.useProgram( programRender );
    gl.bindFramebuffer( gl.FRAMEBUFFER, drawbuffersRender.framebuffer );
    glCat.drawBuffers( drawbuffersRender.textures.length );
    gl.blendFunc( gl.ONE, gl.ONE );
    glCat.clear( 0.0, 0.0, 0.0, 1.0 );

    glCat.attribute( "p", vboQuad, 2 );

    uniforms();

    glCat.uniform2fv( "resolution", [ width, height ] );

    glCat.uniform2fv( "textureModelReso", [ textureModelWidth, textureModelHeight ] );
    glCat.uniformTexture( "textureModel", textureModel, 0 );

    glCat.uniformTexture( "textureParticlePos", drawbuffersParticleRender.textures[ 0 ], 1 );
    glCat.uniformTexture( "textureParticleNor", drawbuffersParticleRender.textures[ 1 ], 2 );
    glCat.uniformTexture( "textureParticleParam", drawbuffersParticleRender.textures[ 2 ], 3 );

    glCat.uniformTexture( "textureRandom", textureRandom, 4 );

    gl.drawArrays( gl.TRIANGLE_STRIP, 0, 4 );

    // ------

    if ( checkboxIllumination.checked ) {
      gl.viewport( 0, 0, width * 0.25, height * 0.25 );
      glCat.useProgram( programParticleIllumination );
      gl.bindFramebuffer( gl.FRAMEBUFFER, framebufferParticleIllumination.framebuffer );
      gl.blendFunc( gl.SRC_ALPHA, gl.ONE );
      glCat.clear( 0.0, 0.0, 0.0, 1.0 );

      gl.disable( gl.DEPTH_TEST );

      glCat.attribute( "particleId", vboParticle, 1 );

      uniforms();

      glCat.uniform1f( "particleCountSqrt", particleCountSqrt );
      glCat.uniform2fv( "resolution", [ width * 0.25, height * 0.25 ] );

      glCat.uniformTexture( 'textureP0', drawbuffersParticle[ drawbuffersParticleIndex ].textures[ 0 ], 0 );
      glCat.uniformTexture( 'textureP1', drawbuffersParticle[ drawbuffersParticleIndex ].textures[ 1 ], 1 );
      glCat.uniformTexture( 'textureP2', drawbuffersParticle[ drawbuffersParticleIndex ].textures[ 2 ], 2 );
      glCat.uniformTexture( 'textureP3', drawbuffersParticle[ drawbuffersParticleIndex ].textures[ 3 ], 3 );

      glCat.uniformTexture( 'textureRenderPos', drawbuffersRender.textures[ 1 ], 4 );
      glCat.uniformTexture( 'textureRenderIll', drawbuffersRender.textures[ 2 ], 5 );

      gl.drawArrays( gl.POINTS, 0, particleCount );

      gl.enable( gl.DEPTH_TEST );
    }

    // ------

    if ( checkboxBloom.checked ) {
      gl.viewport( 0, 0, width * 0.25, height * 0.25 );
      glCat.useProgram( programDownscale );
      gl.bindFramebuffer( gl.FRAMEBUFFER, framebufferDownscale.framebuffer );
      gl.blendFunc( gl.ONE, gl.ONE );
      glCat.clear( 0.0, 0.0, 0.0, 1.0 );

      glCat.attribute( "p", vboQuad, 2 );

      glCat.uniform2fv( "resolution", [ width * 0.25, height * 0.25 ] );

      glCat.uniformTexture( "texture", drawbuffersRender.textures[ 0 ], 0 );

      gl.drawArrays( gl.TRIANGLE_STRIP, 0, 4 );

      // ------

      for ( let i = 0; i < 4; i ++ ) {
        let gaussVar = Math.pow( 3.0, i + 1.0 );

        // ------

        gl.viewport( 0, 0, width * 0.25, height * 0.25 );
        glCat.useProgram( programBloom );
        gl.bindFramebuffer( gl.FRAMEBUFFER, framebufferBloomTemp.framebuffer );
        gl.blendFunc( gl.ONE, gl.ONE );
        glCat.clear( 0.0, 0.0, 0.0, 1.0 );

        glCat.attribute( 'p', vboQuad, 2 );

        glCat.uniform1i( 'isVert', false );
        glCat.uniform1f( 'gaussVar', gaussVar );
        glCat.uniform2fv( 'resolution', [ width * 0.25, height * 0.25 ] );

        glCat.uniformTexture( 'texture', framebufferDownscale.texture, 0 );

        gl.drawArrays( gl.TRIANGLE_STRIP, 0, 4 );

        // ------

        gl.viewport( 0, 0, width * 0.25, height * 0.25 );
        glCat.useProgram( programBloom );
        gl.bindFramebuffer( gl.FRAMEBUFFER, framebufferBloom.framebuffer );
        gl.blendFunc( gl.ONE, gl.ONE );
        if ( i === 0 ) { glCat.clear( 0.0, 0.0, 0.0, 1.0 ); }

        glCat.attribute( 'p', vboQuad, 2 );

        glCat.uniform1i( 'isVert', true );
        glCat.uniform1f( 'gaussVar', gaussVar );
        glCat.uniform2fv( 'resolution', [ width * 0.25, height * 0.25 ] );

        glCat.uniformTexture( 'texture', framebufferBloomTemp.texture, 0 );

        gl.drawArrays( gl.TRIANGLE_STRIP, 0, 4 );
      }
    }

    // ------

    gl.viewport( 0, 0, width, height );
    glCat.useProgram( programPost );
    gl.bindFramebuffer( gl.FRAMEBUFFER, framebufferPost.framebuffer );
    gl.blendFunc( gl.ONE, gl.ONE );
    glCat.clear( 0.0, 0.0, 0.0, 1.0 );

    glCat.attribute( 'p', vboQuad, 2 );

    uniforms();

    glCat.uniform2fv( 'resolution', [ width, height ] );

    glCat.uniformTexture( 'textureRender', drawbuffersRender.textures[ 0 ], 0 );
    glCat.uniformTexture( 'textureBloom', framebufferBloom.texture, 1 );
    glCat.uniformTexture( 'textureParticleIllumination', framebufferParticleIllumination.texture, 2 );

    gl.drawArrays( gl.TRIANGLE_STRIP, 0, 4 );

    // ------

    gl.viewport( 0, 0, width, height );
    glCat.useProgram( programGlitch );
    gl.bindFramebuffer( gl.FRAMEBUFFER, null );
    gl.blendFunc( gl.ONE, gl.ONE );
    glCat.clear( 0.0, 0.0, 0.0, 1.0 );

    glCat.attribute( 'p', vboQuad, 2 );

    uniforms();

    glCat.uniform2fv( 'resolution', [ width, height ] );

    glCat.uniformTexture( "textureRandom", textureRandom, 0 );
    glCat.uniformTexture( 'texture', framebufferPost.texture, 1 );

    gl.drawArrays( gl.TRIANGLE_STRIP, 0, 4 );

    // ------

    gl.flush();
  }

  // ------

  let stop = false;
  let beatPrev = 0.0;
  let count = 0;

  let update = () => {
    if ( !stop ) {
      time = music.getCurrentTime();
      let beat = Math.floor( time * 175.0 / 60.0 ) - 8;

      automaton.update( time );

      if ( beat < 452.0 ) {
        if ( beat !== beatPrev ) {
          if ( beat == 0.0 ) { genCharCube( "FMS_CAT" ); }
          if ( beat == 16.0 ) { genCharCube( "WEBGL DEMO" ); }
          if ( beat == 32.0 ) { genCharCube( "SHIFT" ); }

          if ( 128.0 <= beat && beat < 192.0 && beat % 4 == 0 ) {
            genCharCube( [
              "0X4015",
              "BRAINSTORM",
              "CTRL-ALT-TEST",
              "DOXAS",
              "GAM0022",
              "GAZ",
              "GYABO",
              "JUGEM-T",
              "NIKQ::CLUB",
              "RADIUM SOFTWARE",
              "POOBRAIN",
              "PRIMITIVE",
              "RTX1911",
              "SOMA_ARC",
              "SYSTEM K",
              "TOMOHIRO"
            ][ ( beat - 128.0 ) / 4 ] );
          }
        }
        beatPrev = beat;

        render();

        // there is weird bug, here is emergency procedure
        if ( 10 === count ++ ) {
          music.play();
        }
      }
    }

    requestAnimationFrame( update );
  };

  window.addEventListener( "keydown", event => {
    if ( event.which === 27 ) {
      stop = true;
      music.stop();
    }
  } );
  update();
};

document.body.innerHTML += "Resolution: ";
let selectReso = document.createElement( "select" );
document.body.appendChild( selectReso );
[
  [ 0.125, "160 x 90 (Cheap as hell)" ],
  [ 0.25, "320 x 180 (GTX750Ti Class)" ],
  [ 0.5, "640 x 360 (GTX980Ti Class)" ],
  [ 1.0, "1280 x 720 (GTX1080 Class)" ],
  [ 1.5, "1920 x 1080 (GPU Torture)" ]
].map( ( v, i ) => {
  let option = document.createElement( "option" );
  option.value = v[ 0 ];
  option.innerText = v[ 1 ];
  if ( i === 2 ) { option.setAttribute( "selected", true ); }
  selectReso.appendChild( option );
} );
selectReso.defaultSelectedIndex = 3;

document.body.innerHTML += "<br />Reflection: ";
let selectRef = document.createElement( "select" );
document.body.appendChild( selectRef );
[
  [ 1, "No refletions" ],
  [ 2, "1 reflection" ],
  [ 3, "2 reflections (Recommended)" ],
  [ 4, "3 reflections" ],
].map( ( v, i ) => {
  let option = document.createElement( "option" );
  option.value = v[ 0 ];
  option.innerText = v[ 1 ];
  if ( i === 2 ) { option.setAttribute( "selected", true ); }
  selectRef.appendChild( option );
} );

document.body.innerHTML += "<br />Bloom: ";
let checkboxBloom = document.createElement( "input" );
document.body.appendChild( checkboxBloom );
checkboxBloom.type = "checkbox";
checkboxBloom.defaultChecked = true;

document.body.innerHTML += "<br />ParticleIllumination: ";
let checkboxIllumination = document.createElement( "input" );
document.body.appendChild( checkboxIllumination );
checkboxIllumination.type = "checkbox";
checkboxIllumination.defaultChecked = true;

document.body.innerHTML += "<br />Automaton GUI (Experimental!): ";
let checkboxGUI = document.createElement( "input" );
checkboxGUI.type = "checkbox";
document.body.appendChild( checkboxGUI );

document.body.innerHTML += "<br />";
let buttonStart = document.createElement( "input" );
buttonStart.type = "button";
buttonStart.value = "Start";
document.body.appendChild( buttonStart );
buttonStart.addEventListener( "click", () => { 
  if ( canvas.requestFullscreen ) { canvas.requestFullscreen(); }
  else if ( canvas.webkitRequestFullscreen ) { canvas.webkitRequestFullscreen(); }
  else if ( canvas.mozRequestFullscreen ) { canvas.mozRequestFullscreen(); }
  canvas.style.width = window.innerWidth + "px";
  canvas.style.height = window.innerWidth / 16 * 9 + "px";
  setTimeout( go, 100 );
} );

let canvas = document.createElement( "canvas" );
document.body.appendChild( canvas );

module.exports = null;