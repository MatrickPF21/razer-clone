import { ImageFormat, ImageType } from "@prisma/client";
import { z } from "zod";

const createImageSchema = z.object({
  altText: z.string(),
  galleryIndex: z.number(),
  url: z.string().url(),
  imageType: z.nativeEnum(ImageType),
  format: z.nativeEnum(ImageFormat),
  productId: z.string(),
});

export const parseCreateImageSchema = createImageSchema.safeParse;
