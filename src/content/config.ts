import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    year: z.number(),
    url: z.string().url().optional(),
    repo: z.string().url().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(99),
  }),
});

const writing = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const photoCollections = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    coverImage: z.string(),
    order: z.number().default(99),
    photos: z.array(
      z.object({
        src: z.string(),
        alt: z.string(),
        aspectRatio: z.enum(['portrait', 'landscape', 'square']).default('landscape'),
        caption: z.string().optional(),
      })
    ),
  }),
});

export const collections = {
  projects,
  writing,
  collections: photoCollections,
};
