import Canvas3D from '@/components/Canvas3D'
import Navigation from '@/components/Navigation'

export default function Home() {
  return (
    <div className=" flex h-screen bg-gray-100 text-gray-800">
      <nav className="w-64 bg-white shadow-md">
        <Navigation />
      </nav>

      <main className="flex-1 flex flex-col">
        <div>
          <div>
            <Canvas3D />
          </div>
        </div>
      </main>
    </div>
  )
}
