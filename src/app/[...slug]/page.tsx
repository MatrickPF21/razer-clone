import { Menu } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { notFound } from "next/navigation";

import { db } from "@/server/db";
import MainWrapper from "../_components/main-wrapper";
import Notification from "../_components/notification";
import GallerySection from "../_components/sections/gallery-section";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../_components/ui/navigation-menu";

const ProductSpecsSection = dynamic(
  () => import("../_components/sections/product-specs-section"),
  { ssr: false },
);

type Context = {
  params: {
    slug: string[] | string;
  };
};

export default async function BuyProductPage({ params }: Context) {
  const { slug } = params;

  if (typeof slug === "string") {
    notFound();
  }

  const completeSlug = "/" + slug.join("/");

  const product = await db.product.findFirst({
    where: {
      url: {
        contains: completeSlug,
      },
    },
    include: {
      images: {
        where: {
          imageType: {
            equals: "GALLERY",
          },
        },
      },
      price: true,
      badge: true,
    },
  });

  if (!product) {
    notFound();
  }

  console.log({ completeSlug });
  console.log({ product });

  return (
    <>
      <NavigationMenu className='mt-12 h-12 w-full max-w-none bg-[#101010] md:fixed md:top-[60px] md:mt-0 [&>div]:w-full'>
        <NavigationMenuList className='mx-auto flex items-center justify-between px-[1.125rem] md:max-w-[1200px] md:px-0'>
          <li>
            <h1 className='py-[.5rem] font-RazerF5 text-[.7rem] uppercase tracking-[.5px] text-white md:text-[15px]'>
              {product.name}
            </h1>
          </li>
          <NavigationMenuItem className='md:hidden'>
            <NavigationMenuTrigger
              className='border border-[#333] bg-transparent px-[10px] py-[8px] hover:bg-transparent focus:bg-transparent'
              noArrow
            >
              <Menu className='h-7 w-7 text-white' />
            </NavigationMenuTrigger>
            <NavigationMenuContent className='bg-[#101010]'>
              <ul className='px-[1.125rem] py-2 text-[14px] leading-[13px] text-[#999]'>
                <li className='py-[10px]'>
                  <Link href={"#"}>Tech specs</Link>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem className='hidden md:block'>
            <NavigationMenuLink
              href='#specs'
              className='text-[14px] leading-[13px] text-[#999] hover:text-primary'
            >
              Tech specs
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <MainWrapper className='pt-0 md:pt-[calc(60px+3rem)]'>
        <Notification />
        <GallerySection
          name={product.name}
          price={{
            amount: product.price!.amount,
            currency: product.price!.currency,
            discount: product.price!.discount,
          }}
          specs={product.specs}
          thumbnails={product.images
            .filter(i => i.format === "thumbnail")
            .map(image => ({
              altText: image.altText,
              galleryIndex: image.galleryIndex,
              url: image.url,
            }))}
          zoomImages={product.images
            .filter(i => i.format === "zoomMobile")
            .map(image => ({
              altText: image.altText,
              galleryIndex: image.galleryIndex,
              url: image.url,
            }))}
          badge={
            product.badge
              ? {
                  color: product.badge.color,
                  text: product.badge.displayText,
                }
              : undefined
          }
          summary={product.summary}
        />
        <ProductSpecsSection />
      </MainWrapper>
    </>
  );
}
