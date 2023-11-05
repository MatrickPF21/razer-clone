import { z } from "zod";

const createCategorySchema = z.object({
  id: z.string(),
  name: z.string(),
  url: z.string(),
  slug: z.string().optional().nullable(),
});

export const parseCreateCategorySchema = createCategorySchema.safeParse;
