import * as three from "three"

const camera = new three.PerspectiveCamera(80,16/9);
const scene = new three.Scene();
const render =new three.WebGL1Renderer()
const  geo= new three.BoxGeometry(23,33)
console.log(camera);
console.log('+++++++++++++++++++++++++++++++++++++++')
console.log(scene);
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log(render)
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log(geo)

