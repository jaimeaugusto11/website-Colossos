import { Button, Carousel } from "flowbite-react";
import image10 from "@/images/image10.jpg";
import image2 from "@/images/image2.jpg";
import image3 from "@/images/image3.jpg";
import image4 from "@/images/image4.jpg";
import image5 from "@/images/image5.jpg";
import image6 from "@/images/image6.jpg";
import image7 from "@/images/image7.jpg";
import image8 from "@/images/image8.jpg";
import image9 from "@/images/image9.jpg";
import image11 from "@/images/image11.jpg";

import image13 from "@/images/image13.jpg";
import image14 from "@/images/image14.jpg";
import Image from "next/image";

export function Slider() {
  const slides = [
    {
      image: image10,
      text: "Bem-vindo ao HolySync!",
      subtheme: "Introdução ao sistema",
    },
    {
      image: image2,
      text: "Automatize com facilidade",
      subtheme: "Automatização simples",
    },
    {
      image: image3,
      text: "Conecte seus dados",
      subtheme: "Integração de dados",
    },
    {
      image: image4,
      text: "Conecte seus dados",
      subtheme: "Conecte e sincronize rapidamente",
    },
    {
      image: image5,
      text: "Conecte seus dados",
      subtheme: "Múltiplas fontes de dados",
    },
    {
      image: image6,
      text: "Conecte seus dados",
      subtheme: "Facilidade de integração",
    },
    {
      image: image7,
      text: "Conecte seus dados",
      subtheme: "Integração eficiente",
    },
    {
      image: image8,
      text: "Conecte seus dados",
      subtheme: "Sincronização em tempo real",
    },
    {
      image: image9,
      text: "Conecte seus dados",
      subtheme: "Monitoramento contínuo",
    },
    {
      image: image10,
      text: "Conecte seus dados",
      subtheme: "Monitoramento contínuo",
    },
    {
      image: image11,
      text: "Conecte seus dados",
      subtheme: "Monitoramento contínuo",
    },

    {
      image: image13,
      text: "Conecte seus dados",
      subtheme: "Monitoramento contínuo",
    },
    {
      image: image14,
      text: "Conecte seus dados",
      subtheme: "Monitoramento contínuo",
    },
  ];

  return (
    <div className="relative h-screen sm:h-screen xl:h-screen 2xl:h-screen overflow-hidden ">
      <Carousel 
        className="w-full h-full flowbite-carouse rounded-none"
        style={{ overflowX: "hidden" }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full h-full">
            <Image
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover rounded-none"
            />
            {/* Texto no centro inferior com borda branca */}
            <div className="absolute p-8 sm:p-16 flex flex-col sm:flex-row justify-between bottom-16 left-1/2 -translate-x-1/2 bg-transparent bg-opacity-50 text-white border border-white px-4 py-2 rounded-2xl text-center text-sm sm:text-base font-medium shadow-lg h-48 w-[90%] sm:w-[1100px] backdrop-blur-sm">
              <div className="flex flex-col text-left">
                <h5 className="font-normal text-sm sm:text-base">Destaque</h5>
                <h5 className="font-bold text-4xl sm:text-5xl">{slide.text}</h5>
                <h5 className="font-normal text-2xl sm:text-3xl">
                  {slide.subtheme}
                </h5>
              </div>
              <div className="flex items-end lg:mt-8 sm:mt-0">
                <Button color="light" className="p-4">
                  Saiba mais
                </Button>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
