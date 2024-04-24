import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "../component/Loader";
import AlchemistWorkshop from "../component/AlchemistWorkshop";
import { Environment, OrbitControls } from "@react-three/drei";

export default function Home() {
  return (
    <section className="w-full h-screen relative">
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={50} />{" "}
          <AlchemistWorkshop />
          <OrbitControls />
        </Suspense>
      </Canvas>
    </section>
  );
}
