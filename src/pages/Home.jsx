import { Canvas } from "@react-three/fiber";
import Scene from "../component/Scene";
import Menu from "../component/Menu";
import Message from "../component/Message";


const messages = {
  home: (
    <>
      <p><strong>Hey !</strong></p>
      <p>Clique sur les éléments ou utilise le menu pour te déplacer.</p>
    </>
  ),
  skills: (
    <p> 
      Spécialiste <strong className="text-indigo-300">Front-End</strong>, je maitrise la plupart avec 
      des technologies web moderne tel que <strong className="text-indigo-300">React, NextJS, Typescript</strong> 
      {" "} etc ...
    </p>
  ),
  contact: (
    <p>
      Vous pouvez me contacter par{" "}
      <a href="mailto:contact@clementenjolras.fr" className="text-indigo-400 font-bold underline underline-offset-2">e-mail</a>
      , via <a target="_blank" href="https://www.linkedin.com/in/cl%C3%A9ment-enjolras-30958ab4/" className="text-indigo-400 font-bold underline underline-offset-2">LinkedIn</a> 
      , ou directement sur <a target="_blank" href="https://www.malt.fr/profile/clemente" className="text-indigo-400 font-bold underline underline-offset-2">Malt</a>.
    </p> 
  ),
  realisations: (
    <p>Todo !</p>
  )
}
export default function Home({ view = "home" }) {

  return (
    <section className="w-full h-screen relative bg-black">
      <nav className="absolute top-0 left-0 right-0 z-20">
        <Menu />
      </nav>

      <Message>
        {messages[view]}
      </Message>

      <Canvas
        className="w-full h-screen bg-transparent relative z-10"
        camera={{ near: 0.1, far: 1000 }}
      >
        <Scene view={view} />
      </Canvas>
    </section>
  );
}
