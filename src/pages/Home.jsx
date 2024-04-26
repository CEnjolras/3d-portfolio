import { Canvas } from "@react-three/fiber";
import { useState } from "react";

import Header from "../component/Header";
import Scene from "../component/Scene";
import Message from "../component/Message";

const msg = {
  home: (<>Hello !</>),
  skills: (<>skills</>),
  blog: (<>blog</>),
  contact: (<>contact</>)
}
export default function Home({ view = "home" }) {
  const [clicked, setClicked] = useState(false);

  return (
    <section className="w-full h-screen relative bg-black">
      <nav className="absolute top-0 left-0 right-0 z-20">
        <Header />
      </nav>
      <Message>{msg[view]}</Message>
      <Canvas
        className="w-full h-screen bg-transparent relative z-10"
        camera={{ near: 0.1, far: 1000 }}
      >
        <Scene view={view} clicked={clicked} />
      </Canvas>
    </section>
  );
}
