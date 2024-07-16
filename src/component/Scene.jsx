import { useFrame } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "../component/Loader";
import { CameraControls, Environment } from "@react-three/drei";
import Lab from "../models/Lab/Lab";
import * as THREE from "three";
import MeshButton from "./MeshButton";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

export default function Scene({ view, clicked }) {
  const navigate = useNavigate();
  const lookAtPos = new THREE.Vector3();
  const vecPos = new THREE.Vector3();
  const vecLook = new THREE.Vector3();

  useFrame((state) => {
    //console.log("position:", state.camera.position)
    //console.log("position:", state.camera.rotation)
    if (view !== "dev") state.camera.lookAt(lookAtPos);

    if (view === "home") {
      if (window.innerWidth < 768) {
        state.camera.position.lerp(vecPos.set(7, 5, 3), 0.075);
      } else {
        state.camera.position.lerp(vecPos.set(2, 2, 4), 0.075);
      }
      lookAtPos.lerp(vecLook.set(0, 0, 0), 0.075);

      state.camera.updateProjectionMatrix();
    }

    if (view === "skills") {
      state.camera.position.lerp(vecPos.set(1, 2.5, 5), 0.075);
      lookAtPos.lerp(vecLook.set(0, 0, 0), 0.075);

      state.camera.updateProjectionMatrix();
    }

    if (view === "realisations") {
      state.camera.position.lerp(vecPos.set(-3.2, 1.5, 3.4), 0.075);
      lookAtPos.lerp(vecLook.set(-1, -0.5, 0), 0.075);
      state.camera.updateProjectionMatrix();
    }

    if (view === "contact") {
      state.camera.position.lerp(vecPos.set(1, 1.5, 3), 0.075);
      lookAtPos.lerp(vecLook.set(0, 0.75, 0), 0.075);

      state.camera.updateProjectionMatrix();
    }

    return null;
  });

  return (
    <Suspense fallback={<Loader />}>
      {view === "dev" && <CameraControls />}
      <Environment preset="night" background backgroundBlurriness={0.4} />

      <Lab
        position={[0, -1, 0]}
        scale={window.innerWidth < 768 ? [1, 1, 1] : [1, 1, 1]}
        rotation={[0, 0, 0]}
        clicked={clicked}
      />

      <MeshButton
        to="/skills"
        position={[-0.4, 0.8, 1.7]}
        rotation={[0, 1, 0]}
        label="skills"
      />
      <MeshButton
        to="/contact"
        position={[0.05, 0.35, -0.3]}
        rotation={[0, 1, 0]}
        label="contact"
      />
      {view !== "contact" && view !== "realisations" && view !== "dev" && (
        <MeshButton
          to="/realisations"
          position={[-2.5, 0.75, 0]}
          rotation={[0, 1, 0]}
          label="realisations"
        />
      )}

      {(view === "dev" || view === "realisations") && (
        <>
          <MeshButton
            to="https://pro.michelin.fr/"
            external
            position={[-3, 0.7, -0.5]}
            rotation={[0, 1, 0]}
            distanceFactor={8}
          >
            <div className="absolute -top-8 left-4 right-0 bottom-0 z-10 flex items-center justify-center text-white text-xs lg:text-sm underline font-bold underline-offset-2 opacity-80 hover:opacity-100">
              Michelin.com
            </div>
          </MeshButton>
          <MeshButton
            to="https://www.shopix.fr/"
            external
            position={[-2.8, 0.2, -0.5]}
            rotation={[0, 1, 0]}
            distanceFactor={7}
          >
            <div className="absolute -top-8 left-4 right-0 bottom-0 z-10 flex items-center justify-center text-white text-xs lg:text-sm underline font-bold underline-offset-2 opacity-80 hover:opacity-100">
              shopix.fr
            </div>
          </MeshButton>
          <MeshButton
            to="https://www.lamallepostale.com/fr/"
            external
            position={[-1.7, 0, -0.5]}
            rotation={[0, 1, 0]}
            distanceFactor={7}
          >
            <div className="absolute -top-8 left-4 right-0 bottom-0 z-10 flex items-center justify-center text-white text-xs lg:text-sm underline font-bold underline-offset-2 opacity-80 hover:opacity-100">
              Lamallepostale.com
            </div>
          </MeshButton>
          <MeshButton
            to="https://www.blanclarence.com/"
            external
            position={[-1.4, 0.3, 1.5]}
            rotation={[0, 1, 0]}
            distanceFactor={6}
          >
            <div className="absolute -top-8 left-4 right-0 bottom-0 z-10 flex items-center justify-center text-white text-xs lg:text-sm underline font-bold underline-offset-2 opacity-80 hover:opacity-100">
              Blanclarence.com
            </div>
          </MeshButton>
        </>
      )}
    </Suspense>
  );
}
