import { useFrame } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "../component/Loader";
import { OrbitControls, Environment } from "@react-three/drei";
import Lab from "../models/Lab/Lab";
import Sky from "../models/Sky/Sky";
import { useRef } from "react";
import * as THREE from "three";

const scenesPositions = {
  home: {
    lab: {
      screenScale: [1, 1, 1],
      screenPosition: [0, -2, -0.5],
      rotation: [0, -2.5, 0],
      mobile: {
        screenScale: [0.8, 0.8, 0.8],
        screenPosition: [0, -1.5, 0],
      },
    },
  },
  skills: {
    lab: {
      screenScale: [1, 1, 1],
      screenPosition: [0, -1.5, 0],
      rotation: [0, -0.5, 0],
    },
  },
};

export default function Scene({ view, clicked }) {
  const vec = new THREE.Vector3();

  useFrame((state) => {
    if (view === "home") {
      state.camera.position.lerp(vec.set(10, 10, 10), 0.1);
      state.camera.updateProjectionMatrix();
    }

    if (view === "skills") {
      state.camera.position.lerp(vec.set(0, 0, 0), 0.1);
      state.camera.updateProjectionMatrix();
    }
    return null;
  });

  function adjustLabForScreenSize() {
    let { screenScale, screenPosition, rotation } = scenesPositions[view].lab;

    if (window.innerWidth < 768) {
      screenScale =
        scenesPositions[view].lab.mobile?.screenScale || screenScale;
      screenPosition =
        scenesPositions[view].lab.mobile?.screenPosition || screenPosition;
      rotation = scenesPositions[view].lab.mobile?.rotation || rotation;
    }

    return [screenScale, screenPosition, rotation];
  }

  const [labScale, labPosition, labRotation] = adjustLabForScreenSize();

  return (
    <Suspense fallback={<Loader />}>
      <axesHelper args={[5]} />
      <Environment preset="night" background backgroundBlurriness={0.4} />
      <OrbitControls />
      <Sky />
      <Lab
        position={labPosition}
        scale={labScale}
        rotation={labRotation}
        clicked={clicked}
      />
    </Suspense>
  );
}
