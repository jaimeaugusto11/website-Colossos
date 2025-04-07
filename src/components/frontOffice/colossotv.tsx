import { ArrowUpRight } from "lucide-react";
import React from "react";
import VideoFrame from "./videoFrame";

export default function Colossotv() {
  return (
    <div className="px-4 py-10 md:p-20 bg-neutral-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-4">
          <h1 className="text-gray-100 text-2xl md:text-3xl font-bold">Colosso TV</h1>
          <div className="flex flex-row items-center space-x-1 cursor-pointer">
            <span className="text-lg font-semibold text-gray-100">Ver todos</span>
            <ArrowUpRight className="h-6 w-5 text-orange-400" />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 mt-6">
          <div className="w-full lg:max-w-[700px]">
            <VideoFrame
              videoUrl="/video2.mp4"
              customWidthClass="w-full h-62"
              title="A semeadura eficaz | Pr. Rubén Domingos"
              subtitle="QUARTA TEM CULTO DA RESPOSTA! Todo culto temos experimentado o
                extraordinário de Deus e essa semana não será diferente! O momento
                de louvor e adoração será conduzido pelo Ministério Atitude
                (@ministerioatitudeoficial) e teremos uma Palavra"
              date="06 Março 2025"
            />
          </div>

          <div className="w-full flex flex-col gap-4">
            <VideoFrame
              videoUrl="/video1.mp4"
              customWidthClass="w-full h-56"
            />
            <VideoFrame
              videoUrl="/video3.mp4"
              customWidthClass="w-full h-56"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
