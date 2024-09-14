export default function Sphere() {
  return (
    <mesh>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial color={'blue'} />
    </mesh>
  )
}
