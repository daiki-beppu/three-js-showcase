'use client'

import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { CineonToneMapping, SRGBColorSpace } from 'three/webgpu'

function Box() {
  return (
    <mesh>
      <boxGeometry args={[2, 2, 2]} />
      <meshBasicMaterial color={'red'} />
    </mesh>
  )
}

export default function Canvas3D() {
  return (
    <div className="w-full h-screen">
      <Canvas
        gl={{
          antialias: true,
          toneMapping: CineonToneMapping,
          outputColorSpace: SRGBColorSpace,
        }}
      >
        <Suspense fallback={null}>
          <Box />
          <OrbitControls />
        </Suspense>
      </Canvas>
    </div>
  )
}
