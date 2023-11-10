import { NextResponse, type NextRequest } from "next/server";

import { parseUpdateProductSchema } from "@/schemas/products";
import { db } from "@/server/db";

async function updateProduct(req: NextRequest) {
  try {
    const body = await req.json();

    const parse = parseUpdateProductSchema(body);

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

    const { badgeId, ...product } = parse.data;

    const productExists = await db.product.findUnique({
      where: {
        id: product.id,
      },
    });

    if (!productExists) {
      return NextResponse.json(
        {
          message: "Product not found",
        },
        {
          status: 404,
        },
      );
    }

    const updatedProduct = await db.product.update({
      where: {
        id: product.id,
      },
      data: {
        ...product,
        ...(badgeId
          ? {
              badge: {
                connect: {
                  id: badgeId,
                },
              },
            }
          : {}),
      },
    });

    return NextResponse.json(
      {
        message: "Product updated",
        data: updatedProduct,
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

export { updateProduct as PUT };
