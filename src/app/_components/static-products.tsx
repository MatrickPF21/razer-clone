"use client";
import Image from "next/image";

import NavLink from "./ui/nav-link";
import { NavigationMenu, NavigationMenuItem } from "./ui/navigation-menu";
import { NavigationMenuList } from "@radix-ui/react-navigation-menu";

export type StaticProductProps = {
  link: string;
  image: string;
  alt: string;
  title: string;
};

export default function StaticProducts({
  products,
}: {
  products: StaticProductProps[];
}) {
  return (
    <article>
      <NavigationMenu className='block w-full max-w-none'>
        <NavigationMenuList>
          <ul className='scroll-bar-h-5px flex w-full items-center gap-12 overflow-x-auto px-4 pb-8 font-roboto text-sm sm:justify-between sm:gap-4 sm:overflow-hidden'>
            {products.map((product, idx) => (
              <StaticProduct key={idx} {...product} />
            ))}
          </ul>
        </NavigationMenuList>
      </NavigationMenu>
    </article>
  );
}

function StaticProduct({ alt, image, link, title }: StaticProductProps) {
  return (
    <li className='w-[100px] text-center hover:text-primary'>
      <NavigationMenuItem>
        <NavLink
          href={link}
          className='block w-[100px] data-[active]:font-bold data-[active]:text-primary'
        >
          <Image
            src={image}
            alt={alt}
            width={100}
            height={75}
            className='mx-auto h-[75px] w-auto max-w-[100px]'
          />
          <div className='mt-[10px]'>{title}</div>
        </NavLink>
      </NavigationMenuItem>
    </li>
  );
}
