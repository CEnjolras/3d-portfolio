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
      state.camera.position.lerp(vecPos.set(2, 0.5, 3.5), 0.075);
      lookAtPos.lerp(vecLook.set(-3.2, -0.2, 0), 0.075);

      state.camera.updateProjectionMatrix();
    }

    if (view === "realisations") {
      state.camera.position.lerp(vecPos.set(-3.2, 1.5, 3.4), 0.075);
      lookAtPos.lerp(vecLook.set(-1, -0.5, 0), 0.075);
      state.camera.updateProjectionMatrix();
    }

    if (view === "contact") {
      state.camera.position.lerp(vecPos.set(0, 1.2, 1), 0.075);
      lookAtPos.lerp(vecLook.set(0, -2.7, -5), 0.075);

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

      {view !== "skills" && view !== "realisations" && (
        <MeshButton
          to="/skills"
          position={[-0.4, 0.8, 1.7]}
          rotation={[0, 1, 0]}
          label="skills"
        />
      )}

      {view !== "contact" && (
        <MeshButton
          to="/contact"
          position={[0.05, 0.35, -0.3]}
          rotation={[0, 1, 0]}
          label="contact"
        />
      )}
      {view !== "realisations" && view !== "home" && view !== "skills" && (
        <MeshButton
          to="/realisations"
          position={[-2.5, 0.2, -0.5]}
          rotation={[0, 1, 0]}
          label="realisations"
        />
      )}

      {view === "realisations" && (
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
            position={[-1.45, 0.25, 1.55]}
            rotation={[0, 1, 0]}
            distanceFactor={5}
          >
            <div className="absolute -top-8 left-4 right-0 bottom-0 z-10 flex items-center justify-center text-white text-xs lg:text-sm underline font-bold underline-offset-2 opacity-80 hover:opacity-100">
              Blanclarence.com
            </div>
          </MeshButton>
          <MeshButton
            to="https://www.fitnessboutique.fr/"
            external
            position={[-0.65, -0.8, 2.8]}
            rotation={[0, 1, 0]}
            distanceFactor={6}
          >
            <div className="absolute -top-8 left-4 right-0 bottom-0 z-10 flex items-center justify-center text-white text-xs lg:text-sm underline font-bold underline-offset-2 opacity-80 hover:opacity-100">
              FitnessBoutique.fr
            </div>
          </MeshButton>
        </>
      )}

      {(view === "skills" || view === "dev") && (
        <>
          <MeshButton
            position={[-0.6, 0, 2]}
            rotation={[0, 1, 0]}
            label="React"
            distanceFactor={7}
          />
          <MeshButton
            position={[-0.5, 0.2, 1.85]}
            rotation={[0, 1, 0]}
            label="NodeJS"
            distanceFactor={7}
          />
          <MeshButton
            position={[-0.3, 0.2, 1.6]}
            rotation={[0, 1, 0]}
            label="PrestaShop"
            distanceFactor={7}
          />
          <MeshButton
            position={[-0.4, -0.35, 1.55]}
            rotation={[0, 1, 0]}
            label="NextJS"
            distanceFactor={7}
          />
          <MeshButton
            position={[-0.4, 0.8, 1.65]}
            rotation={[0, 1, 0]}
            label="TypeScript"
            distanceFactor={7}
          />
        </>
      )}

      {(view === "contact" || view === "dev") && (
        <>
          <MeshButton
            position={[-0.15, 0.2, -0.4]}
            rotation={[0, 1, 0]}
            external
            to={"mailto:contact@clementenjolras.fr"}
            label="contact@clementenjolras.fr"
            distanceFactor={5}
          />
          <MeshButton
            position={[0.2, 0.3, -0.4]}
            rotation={[0, 1, 0]}
            external
            to={"https://www.linkedin.com/in/cl%C3%A9ment-enjolras-30958ab4/"}
            label="LinkedIn"
            distanceFactor={5}
          />
          <MeshButton
            position={[0.8, 0.1, -0.4]}
            rotation={[0, 1, 0]}
            external
            to={"https://www.malt.fr/profile/clemente"}
            label="Malt"
            distanceFactor={5}
          />
        </>
      )}
    </Suspense>
  );
}
