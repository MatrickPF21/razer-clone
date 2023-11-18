import { NextResponse, type NextRequest } from "next/server";

import { db } from "@/server/db";
import { parseCreateImageSchema } from "@/schemas/images";

async function createImage(req: NextRequest) {
  try {
    const body = await req.json();

    const parse = parseCreateImageSchema(body);

    if (!parse.success) {
      return NextResponse.json(
        {
          messagE: "Invalid schema",
        },
        {
          status: 400,
        },
      );
    }

    const { productId, ...data } = parse.data;

    const newImage = await db.image.create({
      data: {
        ...data,
        product: {
          connect: {
            id: productId,
          },
        },
      },
    });

    return NextResponse.json(
      {
        message: "Image created",
        data: newImage,
      },
      { status: 200 },
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

export { createImage as POST };
