import { z } from "zod";

const createProductSchema = z.object({
  id: z.string(),
  name: z.string(),
  isRgb: z.boolean(),
  specs: z.string(),
  image: z.string(),
  url: z.string(),
  badgeId: z.string().optional(),
  summary: z.string().optional(),
  promoliner: z.string().optional(),
  price: z.object({
    amount: z.number(),
    currency: z.string(),
    discount: z.number().optional(),
  }),
  categoryIds: z.array(z.string()),
});

export type Product = z.infer<typeof createProductSchema>;

export const parseCreateProductSchema = createProductSchema.safeParse;
