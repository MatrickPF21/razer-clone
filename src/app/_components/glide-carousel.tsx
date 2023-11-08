"use client";

import Glide from "@glidejs/glide";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
import "../../../public/assets/css/glide.css";

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
        <ul className='glide__slides'>{children}</ul>
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
