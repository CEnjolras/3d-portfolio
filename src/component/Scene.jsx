import { useFrame } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "../component/Loader";
import { OrbitControls, Environment } from "@react-three/drei";
import Lab from "../models/Lab/Lab";
import { useRef } from "react";
import * as THREE from "three";
import MeshButton from "./MeshButton";

export default function Scene({ view, clicked }) {
  const vec = new THREE.Vector3();

  useFrame((state) => {
    if (view === "home") {
      state.camera.position.lerp(vec.set(2, 2, -5), 0.075);
      state.camera.updateProjectionMatrix();
    }

    if (view === "skills") {
      state.camera.position.lerp(vec.set(2, 2, 5), 0.075);
      state.camera.updateProjectionMatrix();
    }

    if (view === "blog") {
      state.camera.position.lerp(vec.set(-5, 2, 5), 0.075);
      state.camera.updateProjectionMatrix();
    }

    if (view === "contact") {
      state.camera.position.lerp(vec.set(0.75, 0.5, 1), 0.075);
      state.camera.updateProjectionMatrix();
    }

    return null;
  });

  return (
    <Suspense fallback={<Loader />}>
      <axesHelper args={[5]} />
      <Environment preset="night" background backgroundBlurriness={0.4} />
      <OrbitControls />
      <Lab
        position={[0, -1, 0]}
        scale={[1, 1, 1]}
        rotation={[0, 0, 0]}
        clicked={clicked}
      />
      <MeshButton position={[-0.4, 0.8, 1.7]} rotation={[0, 1, 0]} />
    </Suspense>
  );
}
