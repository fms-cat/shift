let props = {};

let glslify = require( "glslify" );

let audio = new AudioContext();
let bufferSize = 2048;
let renderWidth = 4096;
let renderHeight = 2048;
let sampleRate = audio.sampleRate;

let bufferSource;
let buffer = audio.createBuffer( 2, renderWidth * renderHeight, 44100 );

let pixels = new Float32Array( 4 * renderWidth * renderHeight );

let playing = false;

let prepare = ( _props ) => {
  props = _props;

  let gl = props.gl;
  let glCat = props.glCat;

  // ------

  let vboQuad = glCat.createVertexbuffer( [ -1, -1, 1, -1, -1, 1, 1, 1 ] );

  let shader = glslify( "./shader/shader.glsl" );
  let programMusic = glCat.createProgram(
    "#define _VERT\n#define _VQUAD"+shader,
    "#define _FRAG\n#define _MUSIC"+shader
  );

  let framebufferMusic = glCat.createFloatFramebuffer( renderWidth, renderHeight );

  let textureRandom = props.textureRandom;

  // ------

  gl.viewport( 0, 0, renderWidth, renderHeight );
  glCat.useProgram( programMusic );
  gl.bindFramebuffer( gl.FRAMEBUFFER, framebufferMusic.framebuffer );
  gl.blendFunc( gl.ONE, gl.ONE );
  glCat.clear( 0.0, 0.0, 0.0, 0.0 );

  glCat.attribute( 'p', vboQuad, 2 );

  props.uniforms();

  glCat.uniform1f( 'sampleRate', sampleRate );
  glCat.uniform2fv( 'resolution', [ renderWidth, renderHeight ] );

  glCat.uniformTexture( 'textureRandom', textureRandom, 0 );

  gl.drawArrays( gl.TRIANGLE_STRIP, 0, 4 );
  gl.flush();

  gl.readPixels( 0, 0, renderWidth, renderHeight, gl.RGBA, gl.FLOAT, pixels );

  for ( let i = 0; i < renderWidth * renderHeight; i ++ ) {
    buffer.getChannelData( 0 )[ i ] = pixels[ i * 4 + 0 ];
    buffer.getChannelData( 1 )[ i ] = pixels[ i * 4 + 1 ];
  }
}

let beginTime;
let play = () => {
  if ( playing ) { return; }

  bufferSource = audio.createBufferSource()
  bufferSource.buffer = buffer;
  bufferSource.connect( audio.destination );
  
  beginTime = audio.currentTime + 1.0;
  bufferSource.start( beginTime );

  playing = true;
};

let stop = () => {
  if ( !playing ) { return; }

  bufferSource.stop();
  bufferSource = null;
  playing = false;
};

let seek = ( _time ) => {
  if ( playing ) {
    stop();

    bufferSource = audio.createBufferSource()
    bufferSource.buffer = buffer;
    bufferSource.connect( audio.destination );

    bufferSource.start( audio.currentTime, _time );
    beginTime = audio.currentTime - _time;
    
    playing = true;
  }
};

let getCurrentTime = () => {
  return playing ? audio.currentTime - beginTime : 0.0;
};

export default {
  prepare: prepare,
  play: play,
  stop: stop,
  getCurrentTime: getCurrentTime,
  seek: seek
};