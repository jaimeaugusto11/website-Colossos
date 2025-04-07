import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Contribuicao() {
  return (
    <div className="px-4 md:px-12 py-8">
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Cartão de contribuição */}
        <Link href={"#"} className="hover:text-gray-900 w-full sm:max-w-sm">
          <div className="bg-orange-500 rounded-2xl p-6 flex flex-col justify-between h-64 hover:scale-105 transition-transform">
            <div className="flex justify-end">
              <ArrowUpRight className="h-14 w-14 text-white" />
            </div>
            <span className="text-2xl sm:text-3xl text-white font-light mt-4">
              Faça sua contribuição
            </span>
          </div>
        </Link>

        {/* Texto 1 */}
        <div className="w-full lg:max-w-md">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl">
            Sua <span className="font-extrabold">colaboração</span> é muito
            importante para o avanço do reino.
          </h1>
        </div>

        {/* Texto 2 */}
        <div className="w-full lg:max-w-lg">
          <h1 className="text-xl sm:text-2xl lg:text-3xl">
            A igreja está empenhada em muitas frentes sociais. Honre o Senhor
            com generosidade e seja um agente de transformação! Conheça as
            formas de contribuir:
          </h1>
        </div>
      </div>
    </div>
  );
}
