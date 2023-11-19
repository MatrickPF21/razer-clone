"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

import { Button } from "../ui/button";

const img =
  "https://assets3.razerzone.com/cpxkjYu8bY5zA3lRmMitzT2urIU=/767x511/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fheb%2Fh05%2F9434919862302%2F220823-basilisk-v3-pro-1500x1000-1.jpg";

export default function GallerySection() {
  return (
    <section className='relative'>
      <article className='relative'>
        <Image
          src={img}
          alt='img'
          width={500}
          height={500}
          className='h-auto w-full'
        />
        <div className='absolute left-4 top-1/2 -translate-y-1/2'>
          <Button variant={"ghost"} size={"icon"}>
            <ChevronLeft className='h-10 w-10 text-primary' />
          </Button>
        </div>
        <div className='absolute right-4 top-1/2 -translate-y-1/2'>
          <Button variant={"ghost"} size={"icon"}>
            <ChevronRight className='h-10 w-10 text-primary' />
          </Button>
        </div>
      </article>
      <article className='mt-10 max-w-[1200px] px-[1.125rem]'>
        <h2 className='font-RazerF5 text-[1.3125rem] leading-[1.1em] text-primary'>
          Razer Basilisk V3 Pro - Black
        </h2>
        <h3 className='my-2 font-roboto text-[.875rem] font-medium leading-[1.2] text-white'>
          Customizable Wireless Gaming Mouse with Razer HyperScroll Tilt Wheel
        </h3>
        <div className='mt-2 font-RazerF5 text-[1.3125rem] leading-[31px]'>
          US$159.99
        </div>
      </article>
      <article className='mt-9 px-[1.125rem] font-roboto text-[.875rem] leading-[1.4]'>
        <ul className='ml-4 list-disc text-[#999]'>
          <li>Razer™ HyperScroll Tilt Wheel</li>
          <li>13-Zone Chroma Lighting with Full Underglow</li>
          <li>Iconic Ergonomic Form with 10+1 Programmable Buttons</li>
        </ul>
      </article>
      <article className='my-4 px-[1.125rem]'>
        <Button className='w-full font-RazerF5 font-bold'>ADD TO CART</Button>
      </article>
    </section>
  );
}
