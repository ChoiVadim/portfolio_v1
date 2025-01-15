import { useRef, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, useHelper } from '@react-three/drei'
import Room from '../models/Room'
import Computer from '../models/Computer'
import * as THREE from 'three'

const Scene = () => {
  const directionalLightRef = useRef()
  const targetRef = useRef()
  useHelper(directionalLightRef, THREE.DirectionalLightHelper, 50, 'red')

  useEffect(() => {
    if (directionalLightRef.current && targetRef.current) {
      directionalLightRef.current.target = targetRef.current
      directionalLightRef.current.target.updateMatrixWorld()
    }
  }, [])

  return (
    <>
      <PerspectiveCamera
        makeDefault
        position={[500, 200, 500]}
        fov={100}
        near={0.1}
        far={2000}
      />
      <directionalLight 
        ref={directionalLightRef}
        position={[-500, 100, -100]} 
        intensity={3} 
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      
      {/* This object controls where the light points to */}
      <object3D 
        ref={targetRef}
        position={[200, -250, -150]}
      />

      <ambientLight intensity={0.5} />

      <Computer 
        position={[0, -2, 0]} 
        rotation={[0, Math.PI / 4, 0]}
        scale={2}
      />
      <OrbitControls
        enableZoom={true}
        enablePan={false}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2}
        minAzimuthAngle={-Math.PI / 2}
        maxAzimuthAngle={Math.PI / 2}
      />
    </>
  )
}

const Hero = () => {
  return (
    <div className="h-screen w-full z-20">
      <Canvas
        shadows
        camera={{
          position: [500, 200, 500],
          fov: 100,
          near: 0.1,
          far: 2000
        }}
      >
        <Scene />
      </Canvas>
    </div>
  )
}

export default Hero