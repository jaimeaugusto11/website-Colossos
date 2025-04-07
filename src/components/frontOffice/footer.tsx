"use client";

import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

export function Footr() {
  return (
    <Footer container className=" bg-gray-900 text-white">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <FooterBrand
              href="https://flowbite.com"
              src="/clogo1.png"
              alt="Flowbite Logo"
              className="w-56 sm:w-40 md:w-48 text-white"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <FooterTitle title="Igreja" className="text-orange-400" />
              <FooterLinkGroup col className="text-white">
                <FooterLink href="#">Conheça-nos</FooterLink>
                <FooterLink href="#">Contribuição</FooterLink>
                <FooterLink href="#">Agenda</FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Pedidos Úteis" className="text-orange-400" />
              <FooterLinkGroup col className="text-white">
                <FooterLink href="#">Pedidos de Oração</FooterLink>
                <FooterLink href="#">Conteúdos</FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Informações" className="text-orange-400" />
              <FooterLinkGroup col className="text-white">
                <FooterLink href="#">Fale Connosco</FooterLink>
                <FooterLink href="#">Trabalhe Connosco</FooterLink>
                <FooterLink href="#">Onde Estamos</FooterLink>
              </FooterLinkGroup>
            </div>
          </div>
        </div>
        <FooterDivider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FooterCopyright href="#" by="Jaime André" year={2025} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FooterIcon href="#" icon={BsFacebook} />
            <FooterIcon href="#" icon={BsInstagram} />
            <FooterIcon href="#" icon={BsTwitter} />
            <FooterIcon href="#" icon={BsGithub} />
            <FooterIcon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
