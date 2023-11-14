import { z } from "zod";

import { type GlideCarouselCardProps } from "@/app/_components/glide-carousel";

const categorySlugSchema = z.enum([
  "gaming-laptops",
  "gaming-desktops-and-components",
  "gaming-mice",
  "gaming-keyboards",
  "gaming-audio",
  "content-creation",
  "gaming-chairs",
  "console-gaming",
  "mobile",
  "gaming-gear",
]);

export const parseCategorySlugSchema = categorySlugSchema.safeParse;

type Category = z.infer<typeof categorySlugSchema>;

type PageDescription = {
  title: string;
  description: string;
};
type CarouselSection = {
  type: "carousel";
  title: string;
  description: string;
  filterKeywords: string[];
};
type SliderSection = {
  type: "slider";
  slides: GlideCarouselCardProps[];
};

type PageConfig = {
  pageDescription: PageDescription;
  sections: (CarouselSection | SliderSection)[];
};

export const pageMap = new Map<Category, PageConfig>();

pageMap.set("gaming-laptops", {
  pageDescription: {
    title: "GAMING LAPTOPS",
    description:
      "The most portable and powerful laptops for gamers, creators, and professionals",
  },
  sections: [
    {
      type: "carousel",
      title: "GEFORCE RTX™ 40 SERIES LAPTOPS",
      description:
        "Discover our newest Razer Blades featuring the latest NVIDIA graphics cards, Intel, and AMD processors",
      filterKeywords: ["RTX™ 40"],
    },
    {
      type: "slider",
      slides: [
        {
          title: "NEW RAZER BLADE 16 x AUTOMOBILI LAMBORGHINI EDITION",
          description: "PERFORMANCE. ENGINEERING. REIMAGINED.",
          mobileImage:
            "/store/gaming-laptops/razer-blade16-lamborghini-blade-store_mobile_768x500.webp",
          image:
            "/store/gaming-laptops/razer-blade16-lamborghini-blade-store_desktop_1920x400.webp",
        },
        {
          title: "PRODUCE LIKE A PRO",
          description:
            "For a limited time get a one-year license of FL Studio Producer Edition with the purchase of any Razer laptop.",
          mobileImage:
            "/store/gaming-laptops/razer-fl-studio-category-mobile.jpg",
          image: "/store/gaming-laptops/razer-fl-studio-category-desktop.jpg",
        },
      ],
    },
    {
      type: "carousel",
      title: "GEFORCE RTX™ 30 SERIES LAPTOPS",
      description:
        "Explore exclusive Razer.com specials on these portable powerhouses",
      filterKeywords: ["RTX™ 30"],
    },
  ],
});
