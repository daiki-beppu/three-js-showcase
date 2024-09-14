import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'

export type Project = {
  id: string
  title: string
  imageSrc: string
}

const projects: Project[] = [
  { id: 'cube', title: 'cube', imageSrc: '/thumbnails/box.png' },
  { id: 'sphere', title: 'Sphere', imageSrc: '/thumbnails/sphere.png' },
  { id: 'torus', title: 'Torus', imageSrc: '/thumbnails/torus.png' },
]

interface NavigationProps {
  onProjectSlect: (project: Project) => void
}
export default function Navigation() {
  return (
    <nav className="container mx-auto px-4">
      <h1 className="text-xl font-bold border-b mt-4 mb-8">
        Three.js Project Showcase
      </h1>
      <ul className="space-y-2">
        {projects.map((project) => (
          <li key={project.id}>
            <Link href={`/projects/${project.id}`}>
              <div className="flex flex-col border rounded-lg relative mb-4 bg-gray-200 hover:bg-gray-300 transition-colors">
                <Image
                  className="aspect-video object-cover object-center"
                  src={project.imageSrc}
                  alt={`${project.title} thumbnail`}
                  width={300}
                  height={169}
                />
                <p className="p-2 bg-white">{project.title}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
