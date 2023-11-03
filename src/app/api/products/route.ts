import { NextResponse, type NextRequest } from "next/server";

import { parseCreateProductSchema } from "@/schemas/products";
import { db } from "@/server/db";

async function createProduct(req: NextRequest) {
  try {
    const body = await req.json();

    const parse = parseCreateProductSchema(body);

    if (!parse.success) {
      return NextResponse.json(
        {
          message: "Invalid schema",
        },
        {
          status: 400,
        },
      );
    }

    const { badgeId, categoryIds, price, ...product } = parse.data;

    const newProduct = await db.product.create({
      data: {
        ...product,
        badge: {
          connect: {
            id: badgeId,
          },
        },
        price: {
          create: {
            ...price,
          },
        },
        categories: {
          createMany: {
            data: categoryIds.map(id => ({
              categoryId: id,
            })),
          },
        },
      },
    });

    console.log({ newProduct });

    return NextResponse.json(
      {
        message: "Product created successfully",
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        message: "Internal server error",
      },
      {
        status: 500,
      },
    );
  }
}

export { createProduct as POST };
