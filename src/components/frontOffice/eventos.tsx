import React from "react";
import { Cads } from "./cards";
import E1 from "@/images/E1.jpg";
import E2 from "@/images/E2.jpg";
import E4 from "@/images/E4.jpg";
import { ArrowUpRight } from "lucide-react";

export default function Eventos() {
  return (
    <div className=" lg:mr-24 sm:p-10 sm:justify-center md:p-16 lg:p-40  w-full flex flex-col gap-8 ">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-orange-400  break-words max-w-[700px]">
        Fique por dentro dos próximos eventos
      </h1>
      <div className="flex flex-row justify-end">
        <div className="flex flex-row mr-36 ">
          <span className="text-lg font-semibold ">Ver todos</span>
          <ArrowUpRight className="h-5 w-5 text-orange-400" />
        </div>
      </div>
      <div className="flex sm:items-center  flex-col sm:flex-col md:flex-row gap-6 justify-center">
        <Cads
          img={E1}
          title="Conferência Geral"
          description="Acontecerá em breve, com momentos de muita unção e comunhão."
        />
        <Cads
          img={E2}
          title="Encontro de Jovens"
          description="Um final de semana de transformação e amizades eternas."
        />
        <Cads
          img={E4}
          title="Culto da Família"
          description="Celebre com sua família um tempo de restauração e fé."
        />
      </div>
    </div>
  );
}
