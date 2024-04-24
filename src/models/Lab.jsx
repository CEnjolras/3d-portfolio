/* eslint-disable react/no-unknown-property */
import React, { useRef, useLayoutEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { a } from "@react-spring/three";
import labScene from "./lab.glb";

const Lab = (props) => {
  const labRef = useRef();

  const { nodes, materials } = useGLTF(labScene);
  return (
    <a.group {...props} ref={labRef}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.003}>
        <group
          position={[-0.362, -14.239, 60.661]}
          rotation={[0, 0, 0.672]}
          scale={100}
        >
          <mesh
            geometry={nodes.props_props_m_0.geometry}
            material={materials.props_m}
          />
          <mesh
            geometry={nodes.props_props_m_0001.geometry}
            material={materials.props_m}
          />
        </group>
        <mesh
          geometry={nodes.books_books_m_0.geometry}
          material={materials.books_m}
          position={[-0.362, -14.239, 60.661]}
          rotation={[0, 0, 0.672]}
          scale={100}
        />
        <mesh
          geometry={nodes.bookshelf_bookshelf_m_0.geometry}
          material={materials.bookshelf_m}
          position={[-0.362, -14.239, 60.661]}
          rotation={[0, 0, 0.672]}
          scale={100}
        />
        <mesh
          geometry={nodes.desk_desk_m_0.geometry}
          material={materials.desk_m}
          position={[-0.362, -14.239, 60.661]}
          rotation={[0, 0, 0.672]}
          scale={100}
        />
        <mesh
          geometry={nodes.flames_flame_0.geometry}
          material={materials.flame}
          position={[-0.362, -14.239, 60.661]}
          rotation={[0, 0, 0.672]}
          scale={100}
        />
        <mesh
          geometry={nodes.floor001_floor_m_0.geometry}
          material={materials.floor_m}
          position={[-0.362, -14.239, 60.661]}
          rotation={[0, 0, 0.672]}
          scale={100}
        />
        <mesh
          geometry={nodes.foliage_foliage_m_0.geometry}
          material={materials.foliage_m}
          position={[-0.362, -14.239, 60.661]}
          rotation={[0.677, 0.02, -2.543]}
          scale={119.308}
        />
        <mesh
          geometry={nodes.glass_glass_M_0.geometry}
          material={materials.glass_M}
          position={[-0.362, -14.239, 60.661]}
          rotation={[0, 0, 0.672]}
          scale={100}
        />
        <mesh
          geometry={nodes.owl001_owl_m_0.geometry}
          material={materials.owl_m}
          position={[-0.362, -14.239, 60.661]}
          rotation={[0, -0.059, 0.156]}
          scale={96.275}
        />
        <mesh
          geometry={nodes.wall_wall_0.geometry}
          material={materials.wall}
          position={[-0.362, -14.239, 60.661]}
          rotation={[0, 0, 0.672]}
          scale={100}
        />
        <mesh
          geometry={nodes.window_window_0.geometry}
          material={materials.window}
          position={[-0.362, -14.239, 60.661]}
          rotation={[0, 0, 0.672]}
          scale={100}
        />
      </group>
    </a.group>
  );
};

export default Lab;
