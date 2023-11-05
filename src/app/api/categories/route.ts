import { NextResponse, type NextRequest } from "next/server";

import { parseCreateCategorySchema } from "@/schemas/categories";
import { db } from "@/server/db";

async function createCategory(req: NextRequest) {
  try {
    const body = await req.json();

    const parse = parseCreateCategorySchema(body);

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

    const newCategory = await db.category.create({
      data: {
        ...parse.data,
      },
    });

    return NextResponse.json(
      {
        data: newCategory,
        message: "Category created successfully",
      },
      {
        status: 201,
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

export { createCategory as POST };
