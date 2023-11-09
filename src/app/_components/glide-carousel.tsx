"use client";

import Glide from "@glidejs/glide";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
import "./glide.css";
import Image from "next/image";
import { cn } from "@/utils";

type GlideCarouselProps = Partial<Glide.Options> & {
  items: number;
};

export default function GlideCarousel({
  children,
  items,
  ...props
}: React.PropsWithChildren<GlideCarouselProps>) {
  const [slider] = React.useState(
    new Glide(".glide", {
      startAt: 0,
      type: "slider",
      perView: 1,
      ...props,
    }),
  );

  React.useEffect(() => {
    console.log("hello");
    slider.mount();
  }, [slider]);

  return (
    <div className='glide relative w-full'>
      <div className='glide__track overflow-hidden' data-glide-el='track'>
        <ul
          className='glide__slides relative grid w-full touch-pan-y list-none auto-cols-auto flex-nowrap overflow-hidden whitespace-nowrap p-0 will-change-transform'
          style={{
            backfaceVisibility: "hidden",
            transformStyle: "preserve-3d",
            gridTemplateColumns: "repeat(100, 1fr)",
            transition: "transform 0ms cubic-bezier(0.165, 0.84, 0.44, 1) 0s",
            transform: "translate3d(-770px, 0px, 0px)",
          }}
        >
          {children}
        </ul>
      </div>
      <div className='glide__arrows' data-glide-el='controls'>
        <button
          className='glide__arrow glide__arrow--left absolute left-[3em] top-1/2 z-[2] hidden -translate-y-1/2 bg-transparent px-[9px] py-[12px] leading-none text-primary focus:outline-none sm:block'
          data-glide-dir='<'
        >
          <ChevronLeft className='h-20 w-20' />
        </button>
        <button
          className='glide__arrow glide__arrow--right absolute right-[3em] top-1/2 z-[2] hidden -translate-y-1/2 bg-transparent px-[9px] py-[12px] leading-none text-primary focus:outline-none sm:block'
          data-glide-dir='>'
        >
          <ChevronRight className='h-20 w-20' />
        </button>
      </div>
      <div
        className='glide__bullets absolute bottom-6 left-1/2 z-[2] inline-flex -translate-x-1/2 list-none sm:left-1/2 sm:w-auto'
        data-glide-el='controls[nav]'
      >
        {Array(items)
          .fill(0)
          .map((_, idx) => (
            <button
              className='mx-[12px] h-[12px] w-[12px] rounded-full border-none bg-[#ccc] p-0 leading-[0] shadow-[0_0_0_1px_#222] transition-all focus:outline-none sm:mx-[18px]'
              data-glide-dir={`=${idx}`}
              key={idx}
            ></button>
          ))}
      </div>
    </div>
  );
}

export function GlideItem({ children }: React.PropsWithChildren) {
  return <li className='glide__slide pb-8 sm:pb-0'>{children}</li>;
}

export type GlideCarouselCardProps = {
  image: string;
  mobileImage: string;
  title: string;
  titleClassName?: string;
  description: string;
  descriptionClassName?: string;
};

export function GlideCarouselCard({
  image,
  mobileImage,
  title,
  titleClassName,
  description,
  descriptionClassName,
}: GlideCarouselCardProps) {
  return (
    <GlideItem>
      <div className='relative mx-auto sm:max-w-[1200px]'>
        <picture
          className='relative hidden min-h-[365px] w-full bg-cover bg-[top_right] sm:block sm:min-h-[250px] sm:bg-[top_center]'
          style={{
            backgroundImage: `url("${"/assets/static-slider" + image}")`,
          }}
        >
          <Image
            src={"/assets/static-slider" + image}
            alt=''
            fill
            sizes='100vw'
            className='hidden object-cover'
          />
        </picture>
        <picture
          className='relative block min-h-[365px] w-full bg-cover bg-[top_right] sm:hidden sm:min-h-[250px] sm:bg-[top_center]'
          style={{
            backgroundImage: `url("${"/assets/static-slider" + mobileImage}")`,
          }}
        >
          <Image
            src={"/assets/static-slider" + mobileImage}
            alt=''
            fill
            sizes='100vw'
            className='hidden object-cover'
          />
        </picture>
        <div className='px-4 py-2 sm:absolute sm:left-[62%] sm:top-0 sm:mx-auto sm:grid sm:h-full sm:max-h-[250] sm:w-full sm:max-w-[1200px] sm:items-center'>
          <div className='sm:justify-self-start'>
            <h2
              className={cn(
                "my-4 font-RazerF5 text-[1.5rem] font-bold leading-[1.875rem]",
                titleClassName,
              )}
            >
              {title}
            </h2>
            <p
              className={cn(
                "font-roboto text-[1.125rem] leading-[1.5rem] text-[#999]",
                descriptionClassName,
              )}
            >
              {description}
            </p>
          </div>
        </div>
      </div>
    </GlideItem>
  );
}
