"use client";

import { Card } from "flowbite-react";
import Image from "next/image";

export function Cads({ img, title, description }: { img: any; title: string; description: string }) {
  return (
    <Card
      className="max-w-md h-[450px] flex flex-col justify-between"
      renderImage={() => (
        <div className="w-full h-[1500px] relative overflow-hidden rounded-t-lg">
          <Image
            src={img}
            alt="image"
            fill
            className="object-cover"
          />
        </div>
      )}
    >
      <div>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
      </div>
    </Card>
  );
}
