import { Html } from "@react-three/drei";
export default function Loader() {
  return (
    <Html>
      <div className={"w-[500px]"}>
        <h1 className="text-white mb-4">Chargement...</h1>
        <h2 className="text-white">À Faire :</h2>
        <ul className="mt-4">
          <li className="text-white">- Optimiser le temps de chargement</li>
          <li className="text-white">- Créer un écran de chargement réel</li>
          <li className="text-white">- Version mobile</li>
        </ul>
      </div>
    </Html>
  );
}
