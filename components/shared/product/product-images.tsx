"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

export default function ProductImages({ images }: { images: string[] }) {
  const [current, setCurrent] = useState(0);

  return (
    <div>
      <Image src={images[current]} width={1000} height={1000} alt="image" className="rounded-md px-6" />
      <div className="flex justify-center items-center gap-2">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            width={100}
            height={100}
            alt="image"
            onClick={() => setCurrent(index)}
            className={cn("border cursor-pointer hover:border-slate-500 my-4 rounded-md", current === index && "border-slate-500")}
          />
        ))}
      </div>
    </div>
  );
}
