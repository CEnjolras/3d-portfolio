import { Canvas } from "@react-three/fiber";
import Scene from "../component/Scene";
import Menu from "../component/Menu";
import Message from "../component/Message";
import Strong from "../component/Strong";
import Tag from "../component/Tag";

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
      <li className="mb-12">
        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
          <header
            className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
            aria-label="2024 to Present"
          >
            2019 — Present
          </header>
          <div className="z-10 sm:col-span-6">
            <h3 className="font-medium leading-snug text-slate-200">
              <div>
                <a
                  className="inline-flex items-baseline font-bold leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                  href="https://www.klaviyo.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Senior Frontend Engineer, Accessibility at Klaviyo (opens in a new tab)"
                >
                  <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                  <span>Développeur Freelance</span>
                </a>
              </div>
            </h3>
            <p className="mt-2 text-sm leading-normal">
              Freelance depuis 2019, mon expérience s'est principalement
              concentrée sur le développement d'applications web.
            </p>
            <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
              <li className="mr-1.5 mt-2">
                <Tag>Javascript</Tag>
              </li>
              <li className="mr-1.5 mt-2">
                <Tag>TypeScript</Tag>
              </li>
              <li className="mr-1.5 mt-2">
                <Tag>React</Tag>
              </li>
              <li className="mr-1.5 mt-2">
                <Tag>Storybook</Tag>
              </li>
            </ul>
          </div>
        </div>
      </li>
    ),
    width: "w-[1024px]",
  },
};

export default function Home({ view = "home" }) {
  return (
    <section className="w-full h-screen relative bg-black">
      <nav className="absolute top-0 left-0 right-0 z-20">
        <Menu />
      </nav>

      <Message width={messages[view].width}>{messages[view].jsx}</Message>

      <Canvas
        className="w-full h-screen bg-transparent relative z-10"
        camera={{ near: 0.1, far: 1000 }}
      >
        <Scene view={view} />
      </Canvas>
    </section>
  );
}
