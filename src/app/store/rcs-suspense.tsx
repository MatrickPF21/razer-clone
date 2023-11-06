import type { Badge, Price, Product } from "@prisma/client";

import { db } from "@/server/db";
import ProductCard, {
  type ProductCardProps,
} from "../_components/product-card";

const render = (
  p: Product & { price: Price | null } & { badge: Badge | null },
): ProductCardProps => ({
  altText: p.name,
  hrefLink: p.url,
  image: p.image,
  name: p.name,
  price: {
    amount: p.price!.amount,
    currency: p.price!.currency,
    discount: p.price?.discount || null,
  },
  promoliner: p.promoliner,
  summary: p.summary,
  badge: p.badge
    ? {
        color: p.badge.color,
        text: p.badge.displayText,
      }
    : undefined,
  isRgb: p.isRgb,
});

export async function FreshOffTheLine() {
  const products = await db.product.findMany({
    where: {
      OR: [
        {
          categories: {
            some: {
              category: {
                id: {
                  equals: "system-laptops",
                },
              },
            },
          },
        },
        {
          categories: {
            some: {
              category: {
                id: {
                  contains: "chairs",
                },
              },
            },
          },
        },
      ],
    },
    take: 9,
    orderBy: [
      {
        createdAt: "desc",
      },
    ],
    include: {
      price: true,
      badge: true,
    },
  });

  return products.map(p => <ProductCard {...render(p)} key={p.id} />);
}

export async function BestSellers() {
  const products = await db.product.findMany({
    where: {
      OR: [
        {
          categories: {
            some: {
              category: {
                id: {
                  contains: "mice",
                },
              },
            },
          },
        },
        {
          categories: {
            some: {
              category: {
                id: {
                  contains: "camera",
                },
              },
            },
          },
        },
        {
          categories: {
            some: {
              category: {
                id: {
                  contains: "headsets",
                },
              },
            },
          },
        },
      ],
    },
    take: 9,
    orderBy: [
      {
        createdAt: "desc",
      },
    ],
    include: {
      price: true,
      badge: true,
    },
  });

  return products.map(p => <ProductCard {...render(p)} key={p.id} />);
}

export async function RazerExclusives() {
  const products = await db.product.findMany({
    where: {
      OR: [
        {
          categories: {
            some: {
              category: {
                id: {
                  contains: "controllers",
                },
              },
            },
          },
        },
        {
          categories: {
            some: {
              category: {
                id: {
                  contains: "mobile",
                },
              },
            },
          },
        },
        {
          categories: {
            some: {
              category: {
                id: {
                  contains: "keyboards",
                },
              },
            },
          },
        },
      ],
    },
    take: 9,
    orderBy: [
      {
        createdAt: "asc",
      },
    ],
    include: {
      price: true,
      badge: true,
    },
  });

  return products.map(p => <ProductCard {...render(p)} key={p.id} />);
}
