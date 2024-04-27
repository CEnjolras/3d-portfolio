import { useFrame } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "../component/Loader";
import { CameraControls, Environment } from "@react-three/drei";
import Lab from "../models/Lab/Lab";
import * as THREE from "three";
import MeshButton from "./MeshButton";
import MeshMessage from "./MeshMessage";
import { useNavigate } from "react-router-dom";

export default function Scene({ view, clicked }) {
  const navigate = useNavigate();
  const lookAtPos = new THREE.Vector3();
  const vecPos = new THREE.Vector3();
  const vecLook = new THREE.Vector3();

  useFrame((state) => {
    //console.log("position:", state.camera.position)
    //console.log("position:", state.camera.rotation)
    if(view !== "dev") state.camera.lookAt(lookAtPos)

    
    if (view === "home") {
      if(window.innerWidth < 768) {
        state.camera.position.lerp(vecPos.set(2, 5, 8), 0.075);
      }else{
        state.camera.position.lerp(vecPos.set(2, 4.5, 3), 0.075);
      }
      lookAtPos.lerp(vecLook.set(0,0,0), 0.075)

      state.camera.updateProjectionMatrix();
    }

    if (view === "skills") {
      state.camera.position.lerp(vecPos.set(1, 2.5, 5), 0.075);
      lookAtPos.lerp(vecLook.set(0,0,0), 0.075)

      state.camera.updateProjectionMatrix();
    }

    if (view === "realisations") {
      state.camera.position.lerp(vecPos.set(-5, 2, 5), 0.075);
      state.camera.updateProjectionMatrix();
    }

    if (view === "contact") {
      state.camera.position.lerp(vecPos.set(1, 1.5, 3), 0.075);
      lookAtPos.lerp(vecLook.set(0,0.75,0), 0.075)

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
        scale={window.innerWidth < 768 ? [1, 1, 1] : [1 ,1 ,1]} 
        rotation={[0, 0, 0]}
        clicked={clicked}
      />

      <MeshButton to="/skills" position={[-0.4, 0.8, 1.7]} rotation={[0, 1, 0]} />
      <MeshButton to="/contact" position={[.05, .35, -.3]} rotation={[0, 1, 0]} />
      {view !=="contact" &&
        <MeshButton to="/realisations" position={[-2.5, .75, 0]} rotation={[0, 1, 0]} />
      }
    </Suspense>
  );
}
