import { notFound } from "next/navigation";
import React from "react";

import { ProductCardSkeleton } from "@/app/_components/product-card";
import CarouselSection from "@/app/_components/sections/carousel-section";
import SliderSection from "@/app/_components/sections/slider-section";
import StorePageDescriptionSection from "@/app/_components/sections/store-page-description-section";
import { pageMap, parseCategorySlugSchema } from "./config";
import { ProductsByCategorySlug } from "./rcs";

type Context = {
  params: {
    categorySlug?: string;
  };
};

const avoidFilteringSlug = [
  "gaming-desktops-and-components",
  "gaming-mice",
  "gaming-audio",
  "content-creation",
  "gaming-chairs",
  "console-gaming",
  "mobile",
  "gaming-gear",
];

export default function StorePageFilteredByCategorySlug({ params }: Context) {
  const parse = parseCategorySlugSchema(params.categorySlug);

  if (!parse.success) {
    console.log("parse error");
    console.log(parse.error);
    return notFound();
  }

  const categorySlug = parse.data;

  const config = pageMap.get(categorySlug);

  if (!config) {
    console.log("config map doesnt work");
    return notFound();
  }

  return (
    <>
      <StorePageDescriptionSection {...config.pageDescription} />
      {config.sections.map((section, idx) => {
        if (section.type === "slider") {
          return <SliderSection items={section.slides} key={idx} />;
        } else if (section.type === "carousel") {
          return (
            <CarouselSection
              key={idx}
              title={section.title}
              description={section.description}
            >
              <React.Suspense
                fallback={Array(9)
                  .fill(0)
                  .map((_, idx) => (
                    <ProductCardSkeleton key={idx} />
                  ))}
              >
                <ProductsByCategorySlug
                  slug={categorySlug}
                  filter={section.filter}
                  filteringSlug={!avoidFilteringSlug.includes(categorySlug)}
                />
              </React.Suspense>
            </CarouselSection>
          );
        } else {
          return null;
        }
      })}
    </>
  );
}
