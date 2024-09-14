export default function Torus() {
  return (
    <mesh>
      <torusGeometry args={[1, 0.5, 64, 64]} />
      <meshStandardMaterial color={'blue'} />
    </mesh>
  )
}
