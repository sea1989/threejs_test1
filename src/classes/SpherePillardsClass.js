import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import * as THREE from 'three'

class SpherePillardsClass {
    constructor() {
        this.bind()
        this.modelLoader = new GLTFLoader()
    }

    init(scene) {
        this.scene = scene

        this.modelLoader.load('./assets/models/pillard.glb', (glb) => {
            console.log(glb)

            glb.scene.traverse(child => {
                if (child instanceof THREE.Mesh)
                    child.material = new THREE.MeshNormalMaterial
            })


            this.scene.add(glb.scene)
        })
    }

    update() {

    }

    bind() {

    }
}

const _instance = new SpherePillardsClass()
export default _instance
