"use client";
import { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Link from "next/link";
import { Dropdows } from "../ui/dropdow";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 5); // Detecta quando o scroll acontece
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      fluid
      
      className={`fixed top-0 z-50 w-full mx-auto p-4 items-center transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg " : "bg-transparent"
      }`}
    >
      <NavbarBrand as={Link} href="/" className="lg:ml-36">
        <img
          src={scrolled ? "/clogo1.png" : "/clogo2.png"} // Muda a logo conforme o scroll
          className="mr-3 h-20 w-auto sm:h-9"
          alt="Logo"
          style={{ width: 200, height: 50 }}
        />
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse className="mr-36">
        <NavbarLink
          href="#"
          className={`font-extrabold text-lg transition-colors duration-300 ${
            scrolled ? "text-gray-900" : "text-amber-50"
          }`}
        >
          <Dropdows nome="Igreja" primeiro="Sobre Nós" segundo="Onde Estamos" />
        </NavbarLink>
        <NavbarLink
          as={Link}
          href="#"
          className={`font-extrabold text-lg transition-colors duration-300 ${
            scrolled ? "text-gray-900" : "text-amber-50"
          }`}
        >
          Agenda
        </NavbarLink>
        <NavbarLink
          href="#"
          className={`font-extrabold text-lg transition-colors duration-300 ${
            scrolled ? "text-gray-900" : "text-amber-50"
          }`}
        >
          Contribução
        </NavbarLink>
        <NavbarLink
          href="#"
          className={`font-extrabold text-lg transition-colors duration-300 ${
            scrolled ? "text-gray-900" : "text-amber-50"
          }`}
        >
          Conteúdo
        </NavbarLink>
        <NavbarLink
          href="#"
          className={`font-extrabold text-lg transition-colors duration-300 ${
            scrolled ? "text-gray-900" : "text-amber-50"
          }`}
        >
          Contactos
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
