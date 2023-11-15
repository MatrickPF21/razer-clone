import type { Badge, Price, Prisma, Product } from "@prisma/client";

import type { ProductCardProps } from "@/app/_components/product-card";
import { db } from "@/server/db";
import ProductCard from "@/app/_components/product-card";

type ProductsByCategorySlugParams = {
  slug: string;
  filter: Prisma.ProductWhereInput[];
  filteringSlug?: boolean;
};

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

export async function ProductsByCategorySlug({
  filter,
  slug,
  filteringSlug = true,
}: ProductsByCategorySlugParams) {
  const products = await db.product.findMany({
    where: {
      AND: [
        filteringSlug
          ? {
              categories: {
                some: {
                  category: {
                    slug,
                  },
                },
              },
            }
          : {},
        ...filter,
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
