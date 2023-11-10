import { z } from "zod";

const createProductSchema = z.object({
  id: z.string(),
  name: z.string(),
  isRgb: z.boolean(),
  specs: z.string(),
  image: z.string(),
  url: z.string(),
  badgeId: z.string().optional().nullable(),
  summary: z.string().optional().nullable(),
  promoliner: z.string().optional().nullable(),
  price: z.object({
    amount: z.number(),
    currency: z.string(),
    discount: z.number().optional().nullable(),
  }),
  categoryIds: z.array(z.string()),
});

export type Product = z.infer<typeof createProductSchema>;

export const parseCreateProductSchema = createProductSchema.safeParse;

export const parseUpdateProductSchema = createProductSchema.omit({
  price: true,
}).safeParse;
