import { Html } from "@react-three/drei";
import { NavLink } from "react-router-dom";

export default function MeshButton({ children, ...props }) {
  return (
    <group {...props}>
      {/* White border */}
      <mesh position={[0, 0, -0.01]}>
        <circleGeometry args={[0.06, 32]} />
        <meshBasicMaterial color="white" opacity={0.5} transparent />
      </mesh>

      {/* Black circle */}
      <mesh>
        <circleGeometry args={[0.05, 32]} />
        <meshBasicMaterial color="black" opacity={0.8} transparent />
      </mesh>
    </group>
  );
}
