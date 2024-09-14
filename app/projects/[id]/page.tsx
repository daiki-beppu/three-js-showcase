'use client'

import Canvas3D from '@/components/Canvas3D'

export default function ProjectPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <Canvas3D projectId={params.id} />
    </div>
  )
}
