import { Canvas } from "@react-three/fiber";
import Scene from "../component/Scene";
import Menu from "../component/Menu";
import Message from "../component/Message";
import Strong from "../component/Strong";
import CvLine from "../component/CvLine";

const messages = {
  home: {
    jsx: (
      <>
        <p>
          <strong>Hey !</strong>
        </p>
        <p>Clique sur les éléments ou utilise le menu pour te déplacer.</p>
      </>
    ),
  },
  skills: {
    jsx: (
      <p>
        Spécialiste <Strong>Front-End</Strong>, je maitrise la plupart avec des
        technologies web moderne tel que{" "}
        <Strong>React, NextJS, Typescript</Strong> etc ...
      </p>
    ),
  },
  contact: {
    jsx: (
      <p>
        Vous pouvez me contacter par{" "}
        <a href="mailto:contact@clementenjolras.fr">
          <Strong underline>e-mail</Strong>
        </a>
        , via{" "}
        <a
          target="_blank"
          href="https://www.linkedin.com/in/cl%C3%A9ment-enjolras-30958ab4/"
        >
          <Strong underline>LinkedIn</Strong>
        </a>
        , ou directement sur{" "}
        <a target="_blank" href="https://www.malt.fr/profile/clemente">
          <Strong underline>Malt</Strong>
        </a>
        .
      </p>
    ),
  },
  realisations: {
    jsx: (
     <p>
         Voici quelques uns de mes anciens travaux, je vous invite à les consulter pour en savoir plus sur mes compétences.
     </p>
    ),
  },
};

export default function Home({ view = "home" }) {
  return (
    <section className="w-full h-screen relative bg-black">
      <nav className="absolute top-0 left-0 right-0 z-20">
        <Menu />
      </nav>

        {messages[view] && <Message width={messages[view].width}>{messages[view].jsx}</Message>}

      <Canvas
        className="w-full h-screen bg-transparent relative z-10"
        camera={{ near: 0.1, far: 1000 }}
      >
        <Scene view={view} />
      </Canvas>
    </section>
  );
}
