import { useFrame } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "../component/Loader";
import { CameraControls, Environment } from "@react-three/drei";
import Lab from "../models/Lab/Lab";
import { useRef } from "react";
import * as THREE from "three";
import MeshButton from "./MeshButton";
import Message from "./Message";
import Contact from "./Contact";

const msg = {
  home: (<>Hello !</>),
  skills: (<>skills</>),
  blog: (<>blog</>),
  contact: (<>contact</>)
}

export default function Scene({ view, clicked }) {
  const lookAtPos = new THREE.Vector3();
  const vecPos = new THREE.Vector3();
  const vecLook = new THREE.Vector3();

  useFrame((state) => {
    //console.log("position:", state.camera.position)
    console.log("position:", state.camera.rotation)
    if(view !== "dev") state.camera.lookAt(lookAtPos)

    
    if (view === "home") {
      state.camera.position.lerp(vecPos.set(2, 2, -5), 0.075);
      lookAtPos.lerp(vecLook.set(0,0,0), 0.075)

      state.camera.updateProjectionMatrix();
    }

    if (view === "skills") {
      state.camera.position.lerp(vecPos.set(2, 2, 5), 0.075);
      lookAtPos.lerp(vecLook.set(0,0,0), 0.075)

      state.camera.updateProjectionMatrix();
    }

    if (view === "blog") {
      state.camera.position.lerp(vecPos.set(-5, 2, 5), 0.075);
      state.camera.updateProjectionMatrix();
    }

    if (view === "contact") {
      state.camera.position.lerp(vecPos.set(0, 1.25, 1.35), 0.075);
      lookAtPos.lerp(vecLook.set(0,0.75,0), 0.075)

      state.camera.updateProjectionMatrix();
    }

    return null;
  });

  return (
    <Suspense fallback={<Loader />}>
      <axesHelper args={[5]} />
      {view === "dev" && <CameraControls />}
      <Environment preset="night" background backgroundBlurriness={0.4} />

      {view === "skills" && (
        <Message position={[-0.4, 0.8, 1.7]} rotation={[0, 1, 0]}>
          <article class="text-white font-medium">
          <p className="pb-4">ça c'est ma bibliothèque ! C'est la source de mes connaissances !</p>
          <p> 
            Spécialiste <strong>Front-End</strong>, je maitrise la plupart avec des technologies web moderne tel que <strong>React, NextJS, Typescript</strong> etc ...
          </p>
          </article>
        </Message>
      )}

      {view === "blog" && (
        <Message position={[0, 0, 0]} rotation={[0, 1, 0]}>
          <article class="text-white font-medium">
            Hello !
          </article>
        </Message>
      )}

      {view === "contact" && (
        <Message position={[0, 1.25, 0]} rotation={[0, 1, 0]}>
          <article class="text-white font-medium space-y-2">
            <p>
              Vous pouvez me contacter par{" "}
              <a href="mailto:contact@clementenjolras.fr" className="text-indigo-400 font-bold underline underline-offset-2">e-mail</a>
              , via <a target="_blank" href="https://www.linkedin.com/in/cl%C3%A9ment-enjolras-30958ab4/" className="text-indigo-400 font-bold underline underline-offset-2">LinkedIn</a> 
              , ou directement sur <a target="_blank" href="https://www.malt.fr/profile/clemente" className="text-indigo-400 font-bold underline underline-offset-2">Malt</a>.
            </p> 
          </article>
        </Message>
      )}
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
