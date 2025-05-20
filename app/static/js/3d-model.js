  import * as THREE     from 'https://unpkg.com/three@0.162.0/build/three.module.js';
  import { OrbitControls } from 'https://unpkg.com/three@0.162.0/examples/jsm/controls/OrbitControls.js';
  import { GLTFLoader }   from 'https://unpkg.com/three@0.162.0/examples/jsm/loaders/GLTFLoader.js';

const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize( innerWidth, innerHeight );
renderer.outputEncoding       = THREE.sRGBEncoding;
renderer.physicallyCorrectLights = true;
document.body.appendChild(renderer.domElement);
const raycaster = new THREE.Raycaster();
const mouse     = new THREE.Vector2();
const scene    = new THREE.Scene();
scene.background = new THREE.Color( 0xeeeeee );
let camera = new THREE.PerspectiveCamera(45, innerWidth/innerHeight, 0.1, 1500);
camera.position.set(0, 2, 5);
scene.background = new THREE.Color( 0x000000 );
const loader = new GLTFLoader();
let loadedGltf = null;

// Lights
scene.add( new THREE.HemisphereLight(0xffffff, 0x444444, 1));
scene.add( new THREE.AmbientLight(0xffffff, 0.3));

// Load GLB
loader.load('/static/assets/test_model.glb',
  function(gltf) {
    loadedGltf = gltf;           // now it’s in outer scope
    scene.add(gltf.scene);
  },
  undefined,
  err => console.error(err)
);

// Controls (optional)
let controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// Lights
let hemi = new THREE.HemisphereLight(0xffffff, 0x444444, 1.0);
hemi.position.set(0, 20, 0);
scene.add(hemi);

const clickable = [];
if(loadedGltf){
    loadedGltf.scene.traverse(child => {
    if (child.isMesh && child.name === 'agac') {
        clickable.push(child);
        // Optionally stash text on the mesh:
        child.userData.infoText = "Here’s some info about " + child.name;
    }
    });    
}

renderer.domElement.addEventListener('click', evt => {
  // convert pixel coords to normalized device coords [-1..+1]
  mouse.x = (evt.clientX / innerWidth)  * 2 - 1;
  mouse.y =-(evt.clientY / innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);
  const hits = raycaster.intersectObjects(clickable, true);
  if (hits.length>0) {
    const mesh = hits[0].object;
    showPopup(mesh.userData.infoText || mesh.name);
  }
});

  // Render loop
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  }
  animate();

  // Handle resizing
  window.addEventListener('resize', () => {
    camera.aspect = innerWidth/innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(innerWidth, innerHeight);
  });