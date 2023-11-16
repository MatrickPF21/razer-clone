import React from "react";

import GlideCarousel, {
  GlideCarouselCard,
  type GlideCarouselCardProps,
} from "../_components/glide-carousel";
import { ProductCardSkeleton } from "../_components/product-card";
import CarouselSection from "../_components/sections/carousel-section";
import StorePageDescriptionSection from "../_components/sections/store-page-description-section";
import WhyBuyRazerSection from "../_components/sections/why-buy-razer-section";
import { BestSellers, FreshOffTheLine, RazerExclusives } from "./rcs-suspense";

export default function StorePage() {
  return (
    <>
      <StorePageDescriptionSection
        title='THE LATEST AND GREATEST GAMING GEAR'
        description='Razer mice, keyboards, headsets, laptops&nbsp;&amp;&nbsp;more'
      />
      <CarouselSection
        title='FRESH OFF THE LINE'
        description='Check out our latest releases to secure the most up-to-date upgrades for your setup'
      >
        <React.Suspense
          fallback={Array(9)
            .fill(0)
            .map((_, idx) => (
              <ProductCardSkeleton key={idx} />
            ))}
        >
          <FreshOffTheLine />
        </React.Suspense>
      </CarouselSection>
      <CarouselSection
        title='BEST SELLERS'
        description='Join the hype train with the hottest products in our arsenal'
      >
        <React.Suspense
          fallback={Array(9)
            .fill(0)
            .map((_, idx) => (
              <ProductCardSkeleton key={idx} />
            ))}
        >
          <BestSellers />
        </React.Suspense>
      </CarouselSection>
      <section className='mb-10 mt-4 w-full overflow-hidden px-2'>
        <GlideCarousel items={firstSlider.length}>
          {firstSlider.map((props, idx) => (
            <GlideCarouselCard key={idx} {...props} />
          ))}
        </GlideCarousel>
      </section>
      <CarouselSection
        title='RAZER EXCLUSIVES'
        description='Explore unique products and services only available at our official online store'
      >
        <React.Suspense
          fallback={Array(9)
            .fill(0)
            .map((_, idx) => (
              <ProductCardSkeleton key={idx} />
            ))}
        >
          <RazerExclusives />
        </React.Suspense>
      </CarouselSection>
      <WhyBuyRazerSection />
    </>
  );
}

const firstSlider: GlideCarouselCardProps[] = [
  {
    image: "/store/1.webp",
    mobileImage: "/store/1_mobile.webp",
    title: "RING IN THE WINNING SEASON",
    titleClassName: "sm:text-black",
    description: "DECK THE HALLS WITH EXCLUSIVE OFFERS",
    descriptionClassName: "sm:text-black",
  },
  {
    image: "/store/2.webp",
    mobileImage: "/store/2_mobile.webp",
    title: "THE RAZER IMMERSIVE LINE",
    description: "MAXIMUM IMMERSION: ACTIVATED",
  },
  {
    image: "/store/3.webp",
    mobileImage: "/store/3_mobile.webp",
    title: "GETTING A RAZER GIFT CARD?",
    description: "GET A BONUS ONE ON US",
  },
  {
    image: "/store/4.webp",
    mobileImage: "/store/4_mobile.webp",
    title: "REVEL IN THE CYBER RAMPAGE",
    description: "RAZERSTORE REWARDS EXCLUSIVE",
  },
  {
    image: "/store/5.webp",
    mobileImage: "/store/5_mobile.webp",
    title: "RAZER™ HYPERPOLLING TECHNOLOGY",
    description: "RESPONSE WITHOUT RIVAL",
  },
];
