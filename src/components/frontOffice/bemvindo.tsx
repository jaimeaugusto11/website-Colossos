import Image from "next/image";
import React from "react";
import welcome from "@/images/welcome.jpg";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
export default function Bemvindo() {
  return (
    <div className="p-28 sm:p-20 flex flex-col sm:flex-row justify-between w-full gap-8">
      <Image
        src={welcome}
        alt=""
        className=" w-2/5  lg:h-auto sm:w-2/5 rounded-bl-[70px] rounded-tr-[200px]"
      />

      <div className="w-full sm:w-3/5">
        <div className="mt-48 sm:mt-48 mb-16 ">
          <h3 className="text-lg sm:text-3xl font-medium">
            Bem-vindo à sua casa
          </h3>
          <h3 className="text-7xl sm:text-3xl font-bold mb-5">
            Você é importante para essa família
          </h3>
          <h3 className="text-lg sm:text-xl font-light">
            Aqui no Colossos você viverá o melhor tempo da sua vida na presença
            de Deus.
          </h3>
        </div>
        <Link href={"#"} className="flex flex-row">
          <span className=" text-orange-400 font-bold">Conheça nossa história </span>
          <ArrowUpRight className="h-5 w-5 text-orange-400" />
        </Link>
      </div>
    </div>
  );
}
