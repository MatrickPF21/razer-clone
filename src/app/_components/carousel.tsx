"use client";
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "./ui/button";

type CarouselProps = {
  itemWidth?: number;
};

export default function Carousel({
  children,
  itemWidth = 295,
}: React.PropsWithChildren<CarouselProps>) {
  const listRef = React.useRef<HTMLUListElement | null>(null);

  const onClick = (add: boolean) => {
    if (!listRef.current) return;

    listRef.current.scrollBy({
      left: (add ? itemWidth : -itemWidth) * 3,
      behavior: "smooth",
      top: 0,
    });
  };

  return (
    <div className='relative w-full'>
      <Button
        className='absolute left-2 top-1/2 z-10 hidden h-20 w-20 -translate-y-1/2 text-primary hover:bg-transparent hover:text-primary sm:block'
        onClick={() => onClick(false)}
        variant='ghost'
        size='icon'
      >
        <ChevronLeft className='h-20 w-20' />
      </Button>
      <div className='max-w-[100vw] sm:px-10'>
        <ul
          className='no-scroll-bar grid max-w-[unset] snap-x snap-mandatory grid-rows-[max-content] items-center gap-8 overflow-x-scroll'
          style={{ gridTemplateColumns: "repeat(10, 1fr)" }}
          ref={listRef}
        >
          {children}

          {/* spacer */}
          <li className='relative min-h-[480px] translate-x-8 snap-center text-transparent sm:hidden'>
            a
          </li>
        </ul>
      </div>
      <Button
        className='absolute right-2 top-1/2 z-10 hidden h-20 w-20 -translate-y-1/2 text-primary hover:bg-transparent hover:text-primary sm:block'
        onClick={() => onClick(true)}
        variant='ghost'
        size='icon'
      >
        <ChevronRight className='h-20 w-20' />
      </Button>
    </div>
  );
}
