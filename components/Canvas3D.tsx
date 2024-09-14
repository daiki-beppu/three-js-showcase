'use client'

import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { type ComponentType, lazy, Suspense } from 'react'
import { CineonToneMapping, SRGBColorSpace } from 'three/webgpu'

const Cube = lazy(() => import('./3d-objects/Cube'))
const Shpere = lazy(() => import('./3d-objects/Sphere'))
const Torus = lazy(() => import('./3d-objects/Torus'))

type ObjectKey = 'cube' | 'sphere' | 'torus'

const objectMap: Record<ObjectKey, ComponentType> = {
  cube: Cube,
  sphere: Shpere,
  torus: Torus,
}

interface Canvas3DProps {
  projectId?: ObjectKey
}

export default function Canvas3D({ projectId = 'cube' }: Canvas3DProps) {
  const ObjectComponent = objectMap[projectId]
  return (
    <div className="w-screen h-screen">
      <Canvas
        gl={{
          antialias: true,
          toneMapping: CineonToneMapping,
          outputColorSpace: SRGBColorSpace,
        }}
      >
        <Suspense
          fallback={
            <mesh>
              <boxGeometry args={[1, 1, 1]} />
              <meshBasicMaterial color="white" />
            </mesh>
          }
        >
          {ObjectComponent && <ObjectComponent />}
          <ambientLight intensity={1} />
          <OrbitControls />
        </Suspense>
      </Canvas>
    </div>
  )
}
