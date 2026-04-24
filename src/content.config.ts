import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const legalCollection = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/legal',
  }),
  schema: z.object({}).optional(),
});

const blogCollection = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/blog',
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Equipe Vektor Aero'),
    category: z.enum(['journey-comply', 'aisbr', 'kontrolsub', 'aviacao']),
    tags: z.array(z.string()),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }).optional(),
    relatedProduct: z.enum(['journey-comply', 'aisbr', 'kontrolsub']).optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  legal: legalCollection,
  blog: blogCollection,
};
