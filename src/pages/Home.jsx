import { Canvas } from "@react-three/fiber";
import Scene from "../component/Scene";
import Menu from "../component/Menu";
import Message from "../component/Message";
import Strong from "../component/Strong";
import CvLine from "../component/CvLine";
import MenuBottom from "../component/MenuBottom.jsx";

const messages = {
  dev: {
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
  home: {
    jsx: (
      <>
        <p>
          <strong>Hey !</strong>
        </p>
        <p>
          Bienvenue dans mon antre. N&apos;hésite pas à fouiller en cliquant
          directement sur les éléments pour en apprendre plus sur moi ! Tu peux
          également utiliser le menu ci-dessous. Bonne visite !
        </p>
      </>
    ),
  },
  skills: {
    jsx: (
      <p>
        Bienvenue dans ma bibliothèque, le cœur de mes connaissances. Ici, tu
        trouveras une collection précieuse de livres rares et recherché tel que
        &quot;React pour les nuls&quot;, &quot; Lonely TypeScript&quot; ou "Node
        et Châtiments".
      </p>
    ),
  },
  contact: {
    jsx: (
      <p>
        Besoin d'une potion pour votre site web, d'un parchemin de code ou d'un
        sortilège Front-End ? N'hésitez pas à me contacter par{" "}
        <a href="mailto:contact@clementenjolras.fr">
          <Strong underline>E-mail</Strong>
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
        Voici quelques uns de mes anciens travaux, je les stock ici en
        attendant... N'hésitez pas à jeter un coup d'oeil !
      </p>
    ),
  },
};

export default function Home({ view = "home" }) {
  return (
    <section className="w-full h-screen relative bg-black">
      {messages[view] && (
        <Message width={messages[view].width}>{messages[view].jsx}</Message>
      )}
      <MenuBottom />
      <Canvas
        className="w-full h-screen bg-transparent relative z-10"
        camera={{ near: 0.1, far: 1000 }}
      >
        <Scene view={view} />
      </Canvas>
    </section>
  );
}
