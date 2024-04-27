import { Html } from "@react-three/drei";
import { useNavigate } from "react-router-dom";

export default function MeshButton({ children, to, ...props }) {
  const navigate = useNavigate();
  return (

    <Html distanceFactor={10} {...props}>
        <div 
          onClick={() => { navigate(to); }}
          className="z-100 absolute hover:cursor-pointer h-3 w-3 pointer-events-auto rounded-full bg-black bg-opacity-70 shadow-lg ring-2 ring-white ring-opacity-50" 
        />
    </Html>

  );
}
