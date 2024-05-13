import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Playground() {
  return (
    <div className="canvas-container">
      <Canvas>
        <ambientLight intensity={Math.PI / 2} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        <mesh>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default Playground;
