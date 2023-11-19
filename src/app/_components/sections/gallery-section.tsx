"use client";
import type { Image, Price } from "@prisma/client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import NextImage from "next/image";
import React from "react";

import { formatPrices } from "@/utils";
import { ProductCardBadge, type ProductCardBadgeProps } from "../product-card";
import { Button } from "../ui/button";

export type GallerySectionProps = {
  badge?: ProductCardBadgeProps | null;
  zoomImages: Pick<Image, "altText" | "galleryIndex" | "url">[];
  thumbnails: Pick<Image, "altText" | "galleryIndex" | "url">[];
  name: string;
  summary?: string | null;
  price: Pick<Price, "amount" | "currency" | "discount">;
  specs: string;
};

export default function GallerySection({
  name,
  price,
  specs,
  thumbnails,
  zoomImages,
  badge,
  summary,
}: GallerySectionProps) {
  const [activeIdx, setActiveIdx] = React.useState(0);

  const zoomImage = zoomImages.find(i => i.galleryIndex === activeIdx);
  const parsedSpecs = specs.split("<space>");

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
        {zoomImage && (
          <NextImage
            src={zoomImage.url}
            alt={zoomImage.altText}
            width={1500}
            height={1000}
            className='h-auto w-full object-cover'
          />
        )}
        <div className='absolute left-4 top-1/2 -translate-y-1/2 md:hidden'>
          <Button
            variant={"ghost"}
            size={"icon"}
            onClick={() => setActiveIdx(prev => prev - 1)}
          >
            <ChevronLeft className='h-10 w-10 text-primary' />
          </Button>
        </div>
        <div className='absolute right-4 top-1/2 -translate-y-1/2 md:hidden'>
          <Button
            variant={"ghost"}
            size={"icon"}
            onClick={() => setActiveIdx(prev => prev + 1)}
          >
            <ChevronRight className='h-10 w-10 text-primary' />
          </Button>
        </div>
        <ul className='absolute left-12 top-10 hidden flex-col gap-[.625rem] md:flex'>
          {thumbnails.map(t => (
            <li className='h-20 w-20' key={t.galleryIndex}>
              <button
                className={`h-full w-full border border-[#999] hover:border-primary ${
                  t.galleryIndex === activeIdx ? "!border-primary" : ""
                }`}
                onClick={() => setActiveIdx(t.galleryIndex)}
              >
                <NextImage
                  src={t.url}
                  alt={t.altText}
                  fill
                  sizes='100vw'
                  className='!relative object-cover'
                />
              </button>
            </li>
          ))}
        </ul>
      </article>
      <article className='mt-10 max-w-[1200px] px-[1.125rem] md:pl-0'>
        {!!badge && (
          <div className='relative md:min-h-[15px]'>
            <ProductCardBadge
              classname='-top-14 left-[unset] text-[.875rem] max-w-[12.5rem] md:-top-6 font-bold'
              {...badge}
            />
          </div>
        )}
        <h2 className='font-RazerF5 text-[1.3125rem] leading-[1.1em] text-primary'>
          {name}
        </h2>
        {!!summary && (
          <h3 className='my-2 font-roboto text-[.875rem] font-medium leading-[1.2] text-white'>
            {summary}
          </h3>
        )}
        {price.discount ? (
          <div className='mt-2 flex items-baseline gap-[5px]'>
            <span className='font-RazerF5 text-[1.3125rem] leading-[31px]'>
              {formatPrices(
                price.amount * ((100 - price.discount) / 100),
                price.currency,
              )}
            </span>
            <span className='font-roboto text-[1.125rem] font-light text-[#999] line-through'>
              {formatPrices(price.amount, price.currency)}
            </span>
            <span className='font-roboto text-[1.125rem] font-light text-[#999] line-through'>
              ({price.discount}% off)
            </span>
          </div>
        ) : (
          <div className='mt-2 font-RazerF5 text-[1.3125rem] leading-[31px]'>
            {formatPrices(price.amount, price.currency)}
          </div>
        )}
      </article>
      <article className='mt-9 px-[1.125rem] font-roboto text-[.875rem] leading-[1.4] md:pl-0'>
        <ul className='ml-4 list-disc text-[#999]'>
          {parsedSpecs.map((s, idx) => (
            <li key={idx}>{s}</li>
          ))}
        </ul>
      </article>
      <article className='my-4 px-[1.125rem] md:pl-0'>
        <Button className='w-full font-RazerF5 font-bold'>ADD TO CART</Button>
      </article>
    </section>
  );
}
