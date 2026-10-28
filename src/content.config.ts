import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
    // Tags: a list. Posts without tags still work.
    tags: z.array(z.string()).default([]),
    // Category: one optional value per post.
    category: z.string().optional(),
    // Pinning: pinned posts float to the top of the home page.
    // pinOrder is optional; lower numbers come first (1, 2, 3...).
    pinned: z.boolean().default(false),
    pinOrder: z.number().optional(),
  }),
});

export const collections = { posts };
