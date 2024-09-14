import Link from 'next/link'

export type Project = {
  id: string
  title: string
  imageSrc: string
}

const projects: Project[] = [
  { id: '1', title: 'Project 1', imageSrc: '' },
  { id: '2', title: 'Project 2', imageSrc: '' },
  { id: '3', title: 'Project 3', imageSrc: '' },
]
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
                <img
                  className="aspect-video object-cover object-center"
                  src={project.imageSrc}
                  alt={`${project.title} thumbnail`}
                />
                <p className="p-2 bg-white">{project.title}</p>
                <span className="absolute inset-0"> </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
