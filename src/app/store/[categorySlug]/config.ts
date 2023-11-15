import type { Prisma } from "@prisma/client";
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
  filter: Prisma.ProductWhereInput[];
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
      filter: [
        {
          promoliner: {
            contains: "RTX™ 40",
          },
        },
      ],
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
      filter: [
        {
          promoliner: {
            contains: "RTX™ 30",
          },
        },
      ],
    },
  ],
});

pageMap.set("gaming-desktops-and-components", {
  pageDescription: {
    title: "GAMER ROOM",
    description:
      "Immersive lights and top-shelf PC parts to build your perfect gaming space and rig",
  },
  sections: [
    {
      type: "carousel",
      title: "RAZER AETHER LIGHTS",
      description: "RGB lamps, light bulbs, light strips, and more",
      filter: [
        {
          name: {
            contains: "Razer Aether",
          },
        },
      ],
    },
    {
      type: "carousel",
      title: "GAMING MONITORS",
      description:
        "Top-of-the-line, high-refresh rate QHD monitors for the smoothest, sharpest gaming experience",
      filter: [
        {
          summary: {
            contains: "The Ultimate Gaming Monitor",
          },
        },
      ],
    },
    {
      type: "carousel",
      title: "DESKTOP CASES & CONTROLLERS",
      description:
        "Mini-ITX and mid-tower ATX gaming chassis, PWM fan and ARGB controllers",
      filter: [
        {
          OR: [
            "Mini-ITX",
            "mid-tower ATX",
            "PC Fan Controller",
            "Compatible to work with any ARGB device",
          ].map(f => ({
            summary: {
              contains: f,
            },
          })),
        },
      ],
    },
    {
      type: "carousel",
      title: "COOLING",
      description:
        "High-performance PC case fans and AIO liquid coolers with Razer Chroma™ RGB",
      filter: [
        {
          OR: ["Razer Hanbo Chroma", "Razer Kunai Chroma"].map(f => ({
            name: {
              contains: f,
            },
          })),
        },
      ],
    },
    {
      type: "carousel",
      title: "POWER SUPPLY & CABLES",
      description:
        "Platinum PSU with Razer Chroma™ RGB, high-speed cables for PC and Mac",
      filter: [
        {
          OR: ["Razer Katana Chroma", "Razer Thunderbolt 4 Cable"].map(f => ({
            name: {
              contains: f,
            },
          })),
        },
      ],
    },
  ],
});

pageMap.set("gaming-mice", {
  pageDescription: {
    title: "GAMING MICE",
    description:
      "High-performance wired and wireless mice made for every gamer's hand",
  },
  sections: [
    {
      type: "carousel",
      title: "THE RAZER VIPER RANGE",
      description:
        "A range of ultra-lightweight, high-performance gaming mice bred for esports",
      filter: [
        {
          name: {
            contains: "Razer Viper",
          },
        },
      ],
    },
    {
      type: "carousel",
      title: "THE RAZER COBRA RANGE",
      description:
        "Compact, lightweight gaming mice made for all-round control, precision, and immersion",
      filter: [
        {
          name: {
            contains: "Razer Cobra",
          },
        },
      ],
    },
    {
      type: "carousel",
      title: "THE RAZER BASILISK RANGE",
      description:
        "Feature-rich, highly customizable gaming mice designed to fit any playstyle",
      filter: [
        {
          name: {
            contains: "Razer Basilisk V3",
          },
        },
      ],
    },
    {
      type: "carousel",
      title: "THE RAZER NAGA RANGE",
      description:
        "MMO and MOBA-centric gaming mice with a unique 12-button thumb grid for maximum control",
      filter: [
        {
          name: {
            contains: "Razer Naga",
          },
        },
      ],
    },
    {
      type: "carousel",
      title: "THE RAZER DEATHADDER RANGE",
      description:
        "Competitive gaming mice with an award-winning legacy of iconic ergonomics",
      filter: [
        {
          name: {
            contains: "Razer DeathAdder V",
          },
        },
      ],
    },
    {
      type: "carousel",
      title: "OTHERS",
      description:
        "Beyond our flagship selection, lies a range of gear designed to meet the needs of every gamer",
      filter: [
        {
          OR: ["Razer Pro Click", "Razer Orochi V2"].map(f => ({
            name: {
              contains: f,
            },
          })),
        },
      ],
    },
  ],
});
