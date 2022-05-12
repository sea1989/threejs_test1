varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal;
varying vec2 vMatCapUV;

uniform sampler2D uMatCap;

void main() {

vec4 matCapCol = texture2D(uMatCap, vUv);

    gl_FragColor = vec4(matCapCol);
}