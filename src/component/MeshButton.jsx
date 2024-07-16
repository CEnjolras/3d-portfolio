import { Html } from "@react-three/drei";
import { useNavigate } from "react-router-dom";

export default function MeshButton({
  children,
  distanceFactor,
  external,
  label,
  to,
  ...props
}) {
  const navigate = useNavigate();
  return (
    <Html distanceFactor={distanceFactor || 10} {...props}>
      <div
        className="group relative cursor-pointer"
        onClick={() => {
          if (!to) return;
          if (external) {
            window.open(to, "_blank");
          } else {
            navigate(to);
          }
        }}
      >
        <div className="group-hover:ring-opacity-100 z-100 transition-all absolute hover:cursor-pointer h-4 w-4 lg:h-3 lg:w-3 pointer-events-auto rounded-full bg-black bg-opacity-80 shadow-lg ring-2 ring-white ring-opacity-70" />
        {label && (
          <div className="hidden group-hover:flex group-hover:opacity-100 opacity-0 transition-opacity absolute -top-8 left-4 right-0 bottom-0 z-10  items-center justify-center text-white text-xs lg:text-sm underline font-bold underline-offset-2 opacity-80 hover:opacity-100">
            {label}
          </div>
        )}
        {children}
      </div>
    </Html>
  );
}
