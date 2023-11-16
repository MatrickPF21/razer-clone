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

pageMap.set("gaming-keyboards", {
  pageDescription: {
    title: "GAMING KEYBOARDS",
    description: "Full-sized, Tenkeyless, and 60% keyboards",
  },
  sections: [
    {
      type: "carousel",
      title: "THE RAZER BLACKWIDOW RANGE",
      description: "Mechanical gaming keyboards powered by Razer Chroma™ RGB",
      filter: [
        {
          name: {
            contains: "Razer BlackWidow",
          },
        },
      ],
    },
    {
      type: "carousel",
      title: "THE RAZER HUNTSMAN RANGE",
      description:
        "Esports optical keyboards for unrivalled speed and responsiveness",
      filter: [
        {
          name: {
            contains: "Razer Huntsman",
          },
        },
      ],
    },
    {
      type: "carousel",
      title: "THE RAZER DEATHSTALKER RANGE",
      description: "Ergonomic low-profile optical keyboards for work and play",
      filter: [
        {
          name: {
            contains: "Razer DeathStalker",
          },
        },
      ],
    },
    {
      type: "carousel",
      title: "OTHERS",
      description:
        "Beyond our flagship selection, lies a range of gear designed to meet the needs of every gamer",
      filter: ["Razer BlackWidow", "Razer Huntsman", "Razer DeathStalker"].map(
        f => ({
          name: {
            not: {
              contains: f,
            },
          },
        }),
      ),
    },
  ],
});

pageMap.set("gaming-audio", {
  pageDescription: {
    title: "GAMING AUDIO",
    description:
      "Explore Razer headsets, wireless headphones, earphones for gaming & broadcasting",
  },
  sections: [
    {
      type: "carousel",
      title: "THE RAZER BLACKSHARK RANGE",
      description:
        "Acclaimed esports headsets designed for all-out performance and comfort",
      filter: [
        {
          name: {
            contains: "Razer BlackShark V2",
          },
        },
      ],
    },
    {
      type: "carousel",
      title: "THE RAZER BARRACUDA RANGE",
      description:
        "Versatile wireless hybrid headsets for home gaming and street living",
      filter: [
        {
          name: {
            contains: "Razer Barracuda",
          },
        },
      ],
    },
    {
      type: "carousel",
      title: "RAZER SPEAKERS",
      description:
        "Soundbars and full range speakers to amplify your entertainment",
      filter: [
        {
          categories: {
            some: {
              category: {
                slug: "gaming-speakers",
              },
            },
          },
        },
      ],
    },
    {
      type: "carousel",
      title: "THE RAZER KRAKEN RANGE",
      description:
        "Immersive haptic headsets powered by Razer Chroma™ RGB and Razer HyperSense",
      filter: [
        {
          name: {
            contains: "Razer Kraken",
          },
        },
      ],
    },
  ],
});

pageMap.set("content-creation", {
  pageDescription: {
    title: "CONTENT CREATION",
    description:
      "Create without limits with our professional webcams, microphones, and more",
  },
  sections: [
    {
      type: "carousel",
      title: "HEADSETS",
      description: "Stand out on any stream in both look and sound",
      filter: [
        {
          categories: {
            some: {
              category: {
                slug: "gaming-headsets",
              },
            },
          },
        },
      ],
    },
    {
      type: "carousel",
      title: "OTHER STREAMING ACCESSORIES",
      description:
        "From capture cards to ARGB controllers, to analog audio mixers and lights",
      filter: [
        {
          categories: {
            some: {
              categoryId: "streaming-accessories",
            },
          },
        },
      ],
    },
    {
      type: "carousel",
      title: "IN-EAR MONITOR",
      description:
        "Ergonomic wireless IEM for all-day streaming and content creation",
      filter: [
        {
          name: {
            contains: "Razer Moray",
          },
        },
      ],
    },
    {
      type: "carousel",
      title: "WEBCAMS",
      description: "Always look your best on stream with the Razer Kiyo range",
      filter: [
        {
          categories: {
            some: {
              category: {
                slug: "streaming-cameras",
              },
            },
          },
        },
      ],
    },
    {
      type: "carousel",
      title: "MICROPHONES",
      description:
        "Cut through the noise and bring your voice to life with the Razer Seiren range",
      filter: [
        {
          categories: {
            some: {
              categoryId: {
                equals: "streaming-microphones",
              },
            },
          },
        },
      ],
    },
  ],
});

pageMap.set("gaming-chairs", {
  pageDescription: {
    title: "GAMING CHAIRS",
    description:
      "Award-winning ergonomics and comfort for countless hours of gaming",
  },
  sections: [
    {
      type: "carousel",
      title: "THE RAZER FUJIN RANGE",
      description: "Gaming chairs with ultra-durable breathable mesh",
      filter: [
        {
          name: {
            contains: "Razer Fujin",
          },
        },
      ],
    },
    {
      type: "carousel",
      title: "ACCESSORIES",
      description: "Head and lumbar cushions, rugs and mats, chair studs",
      filter: [
        {
          categories: {
            some: {
              categoryId: "chairs-accessories",
            },
          },
        },
      ],
    },
    {
      type: "carousel",
      title: "COLLABS",
      description:
        "Officially licensed designs featuring the hottest brands and games",
      filter: [
        {
          OR: [
            "Razer Enki Pro -",
            "Genshin Impact",
            "Hello Kitty",
            "Razer x *A Bathing Ape",
          ].map(f => ({
            name: {
              contains: f,
            },
          })),
        },
        {
          categories: {
            some: {
              categoryId: {
                contains: "chair",
              },
            },
          },
        },
      ],
    },
    {
      type: "carousel",
      title: "THE RAZER ENKI RANGE",
      description: "Gaming chairs optimized for all-day gaming comfort",
      filter: [
        {
          name: {
            contains: "Razer Enki",
          },
        },
      ],
    },
    {
      type: "slider",
      slides: [
        {
          title: "LICENSED EDITIONS",
          description:
            "Display your passion with fresh designs created in collaboration with the hottest brands.",
          image:
            "/store/gaming-chairs/gaming-furniture-fitfinder-revamp-desktop-licensedenki.jpg",
          mobileImage:
            "/store/gaming-chairs/768x500-gamingfurniture-fitfinder-revamp-mobile-licensedenki.jpg",
          contentLeft: true,
        },
        {
          title: "RAZER ISKUR XL",
          description:
            "Go big on support with a design that’s 15% larger than our standard model.",
          image:
            "/store/gaming-chairs/gamingfurniture-fitfinder-revamp-desktop-iskurxl.jpg",
          mobileImage:
            "/store/gaming-chairs/768x500-gamingfurniture-fitfinder-revamp-mobile-iskurxl.jpg",
          contentLeft: true,
        },
      ],
    },
    {
      type: "carousel",
      title: "THE RAZER ISKUR RANGE",
      description:
        "Ergonomic gaming chairs designed to support perfect gaming form",
      filter: [
        {
          name: {
            contains: "Razer Iskur",
          },
        },
      ],
    },
  ],
});

pageMap.set("console-gaming", {
  pageDescription: {
    title: "CONSOLE",
    description:
      "Gaming audio, controllers, and accessories for Xbox and PlayStation",
  },
  sections: [
    {
      type: "carousel",
      title: "ALL-BUTTON ARCADE CONTROLLERS",
      description:
        "Perfect your execution with a quad movement button layout and lightning-fast optical switches",
      filter: [
        {
          name: {
            contains: "Razer Kitsune",
          },
        },
      ],
    },
    {
      type: "carousel",
      title: "EARBUDS",
      description:
        "Enjoy seamless wireless audio with the Razer HammerHead HyperSpeed for Console",
      filter: [
        {
          name: {
            contains: "Razer HammerHead",
          },
        },
      ],
    },
    {
      type: "carousel",
      title: "PLAYSTATION AND XBOX SKINS",
      description:
        "Add personal flair to your setup with a range of high-quality custom console skins",
      filter: [
        {
          name: {
            contains: "Razer Skins for",
          },
        },
      ],
    },
    {
      type: "carousel",
      title: "HEADSETS",
      description:
        "Experience complete audio immersion with the Razer Kaira range for Xbox and PlayStation",
      filter: [
        {
          name: {
            contains: "Razer Kaira",
          },
        },
      ],
    },
    {
      type: "carousel",
      title: "CONTROLLERS",
      description:
        "Unlock enhanced control and customization with the Razer Wolverine V2 range",
      filter: [
        {
          name: {
            contains: "Razer Wolverine V2",
          },
        },
      ],
    },
    {
      type: "carousel",
      title: "COLLABS",
      description:
        "Officially licensed wireless controllers and quick charging stands for Xbox",
      filter: [
        {
          OR: ["Limited Edition", "Sonic the Hedgehog"].map(f => ({
            name: {
              contains: f,
            },
          })),
        },
      ],
    },
    {
      type: "carousel",
      title: "QUICK CHARGING STANDS & BUNDLES",
      description: "Accessories and sets to round out your setup",
      filter: [
        {
          OR: [
            {
              AND: [
                {
                  name: { contains: "Quick Charging Stand for Xbox -" },
                },
                {
                  name: { not: { contains: "Limited Edition" } },
                },
              ],
            },
            {
              name: {
                contains: "Razer Essential Duo Bundle for Xbox",
              },
            },
          ],
        },
      ],
    },
    {
      type: "carousel",
      title: "MADE FOR META GEAR",
      description:
        "Enhance your VR immersion with gear & accessories authorized for Meta Quest 2",
      filter: [{ name: { contains: "Meta Quest 2" } }],
    },
  ],
});
