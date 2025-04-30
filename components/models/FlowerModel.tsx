'use client'

import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import { Model as FlowerSanguinariaCanadensis } from './FlowerSanguinariaCanadensis' // Use named import and alias

const FlowerModel = () => {
  return (
    <Canvas shadows camera={{ position: [4, 0, -12], fov: 35 }}>
      <Suspense fallback={null}>
        <Stage environment="city" intensity={0.6}>
          <FlowerSanguinariaCanadensis scale={0.01} /> {/* Use the aliased name */}
        </Stage>
      </Suspense>
      <OrbitControls autoRotate />
    </Canvas>
  )
}

export default FlowerModel 