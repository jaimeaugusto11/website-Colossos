import { Button } from "flowbite-react";
import { Video } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Agora() {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center bg-orange-50 p-16">
      {/* Seção da esquerda */}
      <div className="flex flex-col sm:flex-row gap-4 font-bold sm:ml-36 sm:mb-0 mb-4 items-center sm:items-start">
        <h3>Amanhã</h3>
        <span className="sm:block hidden">|</span>
        <h3>Colossos</h3>
        <span className="sm:block hidden">|</span>
        <h3>09h30</h3>
        <span className="sm:block hidden">|</span>
        <Link href={"#"}>
          <div className="flex flex-row space-x-2 items-center">
            <h3>Assistir Online</h3> <Video />
          </div>
        </Link>
      </div>

      {/* Seção da direita */}
      <div className="sm:mr-36 ml-0 sm:mt-0 mt-4">
        <Button className="bg-orange-500 font-bold w-full sm:w-auto">
          Quero Jesus
        </Button>
      </div>
    </div>
  );
}
