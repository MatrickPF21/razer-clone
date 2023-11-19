"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

import { Button } from "../ui/button";
import { ProductCardBadge } from "../product-card";

const img =
  "https://assets3.razerzone.com/cpxkjYu8bY5zA3lRmMitzT2urIU=/767x511/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fheb%2Fh05%2F9434919862302%2F220823-basilisk-v3-pro-1500x1000-1.jpg";

export default function GallerySection() {
  return (
    <section
      className='relative gap-x-[2.5rem] md:grid md:grid-flow-row-dense'
      style={{
        gridTemplateColumns:
          "[start-col-1] calc(100% - 25rem) [start-col-2] 22.5rem [end-col-2]",
        gridTemplateRows:
          "[row0] auto [row1] auto [row2] auto [row3] auto [row4] auto [row5] auto [row6]",
      }}
    >
      <article className='relative col-start-[start-col-1] row-start-[row0] row-end-[row6]'>
        <Image
          src={img}
          alt='img'
          width={1500}
          height={1000}
          className='h-auto w-full object-cover'
          unoptimized
        />
        <div className='absolute left-4 top-1/2 -translate-y-1/2 md:hidden'>
          <Button variant={"ghost"} size={"icon"}>
            <ChevronLeft className='h-10 w-10 text-primary' />
          </Button>
        </div>
        <div className='absolute right-4 top-1/2 -translate-y-1/2 md:hidden'>
          <Button variant={"ghost"} size={"icon"}>
            <ChevronRight className='h-10 w-10 text-primary' />
          </Button>
        </div>
        <ul className='absolute left-12 top-10 hidden flex-col gap-[.625rem] md:flex'>
          <li className='h-20 w-20'>
            <button className='h-full w-full border border-[#999] hover:border-primary'>
              <Image
                src={img}
                alt='img'
                fill
                sizes='100vw'
                className='!relative object-cover'
              />
            </button>
          </li>
        </ul>
      </article>
      <article className='mt-10 max-w-[1200px] px-[1.125rem] md:pl-0'>
        <div className='relative md:min-h-[15px]'>
          <ProductCardBadge
            classname='-top-14 left-[unset] text-[.875rem] max-w-[12.5rem] md:-top-6 font-bold'
            color='ORANGE'
            text='GIFT WITH PURCHASE'
          />
        </div>
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
      <article className='mt-9 px-[1.125rem] font-roboto text-[.875rem] leading-[1.4] md:pl-0'>
        <ul className='ml-4 list-disc text-[#999]'>
          <li>Razer™ HyperScroll Tilt Wheel</li>
          <li>13-Zone Chroma Lighting with Full Underglow</li>
          <li>Iconic Ergonomic Form with 10+1 Programmable Buttons</li>
        </ul>
      </article>
      <article className='my-4 px-[1.125rem] md:pl-0'>
        <Button className='w-full font-RazerF5 font-bold'>ADD TO CART</Button>
      </article>
    </section>
  );
}
