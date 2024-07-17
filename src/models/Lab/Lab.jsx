/* eslint-disable react/no-unknown-property */
import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { a } from "@react-spring/three";
import labScene from "./lab.glb";
import * as THREE from "three";

export default function Lab(props) {
  const { nodes, materials } = useGLTF(labScene);
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.books_books_m_0.geometry}
        material={materials.books_m}
        position={[-0.001, 0.175, 0.041]}
        rotation={[-Math.PI / 2, 0, 0.672]}
        scale={0.289}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bookshelf_bookshelf_m_0.geometry}
        material={materials.bookshelf_m}
        position={[-0.001, 0.175, 0.041]}
        rotation={[-Math.PI / 2, 0, 0.672]}
        scale={0.289}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.desk_desk_m_0.geometry}
        material={materials.desk_m}
        position={[-0.001, 0.175, 0.041]}
        rotation={[-Math.PI / 2, 0, 0.672]}
        scale={0.289}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.flames_flame_0.geometry}
        material={materials.flame}
        position={[-0.001, 0.175, 0.041]}
        rotation={[-Math.PI / 2, 0, 0.672]}
        scale={0.289}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.floor001_floor_m_0.geometry}
        material={materials.floor_m}
        position={[-0.001, 0.175, 0.041]}
        rotation={[-Math.PI / 2, 0, 0.672]}
        scale={0.289}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.foliage_foliage_m_0.geometry}
        material={materials.foliage_m}
        position={[-0.001, 0.175, 0.041]}
        rotation={[-0.894, 0.02, -2.543]}
        scale={0.345}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.glass_glass_M_0.geometry}
        material={materials.glass_M}
        position={[-0.001, 0.175, 0.041]}
        rotation={[-Math.PI / 2, 0, 0.672]}
        scale={0.289}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.owl001_owl_m_0.geometry}
        material={materials.owl_m}
        position={[-0.001, 0.175, 0.041]}
        rotation={[-1.571, -0.059, 0.156]}
        scale={0.278}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.props_props_m_0.geometry}
        material={materials.props_m}
        position={[-0.001, 0.175, 0.041]}
        rotation={[-Math.PI / 2, 0, 0.672]}
        scale={0.289}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_wall_0.geometry}
        material={materials.wall}
        position={[-0.001, 0.175, 0.041]}
        rotation={[-Math.PI / 2, 0, 0.672]}
        scale={0.289}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.window_window_0.geometry}
        material={materials.window}
        position={[-0.001, 0.175, 0.041]}
        rotation={[-Math.PI / 2, 0, 0.672]}
        scale={0.289}
      />
    </group>
  );
}
