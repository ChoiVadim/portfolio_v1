import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { useAnimations, useGLTF } from '@react-three/drei'

function Computer(props) {
  const ref = useRef()
  const { scene, animations } = useGLTF('./smol_ame_in_an_upcycled_terrarium_hololiveen.glb')
  const { actions, names } = useAnimations(animations, ref)

  useEffect(() => {
    if (names.length > 0) {
      const action = actions[names[0]]
      action.reset().fadeIn(0.5).play()
      action.setLoop(THREE.LoopRepeat)
      action.clampWhenFinished = true
    }
  }, [actions, names])

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y -= 0.001
    }
  })

  return (
    <group {...props} ref={ref}>
      <primitive object={scene} />
    </group>
  )
}

useGLTF.preload("./smol_ame_in_an_upcycled_terrarium_hololiveen.glb")

export default Computer