import { useFrame } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "../component/Loader";
import { OrbitControls, Environment } from "@react-three/drei";
import Lab from "../models/Lab/Lab";
import { useRef } from "react";
import * as THREE from "three";
import MeshButton from "./MeshButton";
import Message from "./Message";

const msg = {
  home: (<>Hello !</>),
  skills: (<>skills</>),
  blog: (<>blog</>),
  contact: (<>contact</>)
}

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
      {view === "dev" && <axesHelper args={[5]} />}
      <OrbitControls />
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
