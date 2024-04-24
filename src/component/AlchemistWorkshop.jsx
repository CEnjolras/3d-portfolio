import { useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

export default function AlchemistWorkshop() {
  const fbx = useLoader(FBXLoader, "3d/source/alchemist_workshop-merged.fbx");

  return <primitive object={fbx} scale={0.005} />;
}
