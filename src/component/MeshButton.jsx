import { Html } from "@react-three/drei";
import { useNavigate } from "react-router-dom";

export default function MeshButton({ children, to, ...props }) {
  const navigate = useNavigate();
  return (

    <Html distanceFactor={10} {...props} >
        <div 
          onClick={() => { navigate(to); }}
          className="z-100 absolute hover:cursor-pointer h-4 w-4 lg:h-3 lg:w-3 pointer-events-auto rounded-full bg-black bg-opacity-80 shadow-lg ring-2 ring-white ring-opacity-70" 
        />
    </Html>

  );
}
