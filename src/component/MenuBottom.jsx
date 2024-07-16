import { useState } from "react";
import { NavLink } from "react-router-dom";
import avatar from "../assets/man.webp";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Skills", href: "/skills" },
  { name: "Realisations", href: "/realisations" },
  { name: "Contact", href: "/contact" },
];

export default function MenuBottom() {
  return (
    <div
      className={`absolute px-20 w-[45rem] max-w-[85%] bottom-8 left-0 right-0 m-auto z-20 text-white pointer-events-auto rounded-lg bg-black bg-opacity-80 shadow-lg ring-1 ring-black ring-opacity-5`}
    >
      <div className="p-4">
        <div className="flex gap-x-4 lg:gap-x-32 justify-around">
          {navigation.map((item) => (
            <NavLink key={item.name} to={item.href} className="font-medium">
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}
