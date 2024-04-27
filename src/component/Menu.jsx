import { useState } from "react";
import { NavLink } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Skills", href: "/skills" },
  { name: "Realisations", href: "/realisations" },
  { name: "Contact", href: "/contact" },
];

export default function Menu() {
  return (
      <nav
        className="mx-auto flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5 hidden">
            <span className="sr-only">Your Company</span>
            C.E
          </a>
        </div>
        <div className="flex gap-x-4 lg:gap-x-32">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className="text-sm font-semibold leading-6 text-gray-300"
            >
              {item.name} 
            </NavLink>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        </div>
      </nav>
  );
}
