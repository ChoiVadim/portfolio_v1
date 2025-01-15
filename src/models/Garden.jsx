import React, { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'

const MODEL_PATH = './vista_general_reial_monestir_de_santes_creus.glb'

const Garden = (props) => {
  const ref = useRef()
  const { scene } = useGLTF(MODEL_PATH)

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        const objectNumber = parseInt(child.name.split('_')[1]);
        
        if (objectNumber !== 49) {
          child.material = new THREE.MeshStandardMaterial({
            color: new THREE.Color(0.8, 0.8, 0.8),
            metalness: 0.1,          
            roughness: 0.6,      
            side: THREE.DoubleSide,  
            transparent: true,       
            opacity: 1,              
            flatShading: false       
          })
        }
      }
    })
  }, [scene])

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y -= 0.001
    }
  })

  return (
    <mesh ref={ref} {...props}>
      <primitive object={scene} />
    </mesh>
  )
}

// Add preload
useGLTF.preload(MODEL_PATH)

export default Garden