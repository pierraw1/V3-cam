import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projets = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projets" }),
  schema: z.object({
    title: z.string(),
    category: z.enum(['Audiovisuel', 'Communication', 'Graphisme']),
    date: z.string(),
    anecdote: z.string().optional(),
    context: z.string(),
    missions: z.array(z.string()),
    softSkills: z.array(z.string()),
    hardSkills: z.array(z.string()),
    links: z.array(
      z.object({
        label: z.string(),
        type: z.enum(['pdf', 'drive', 'lien', 'video']),
        url: z.string(),
      })
    ),
    tools: z.array(
      z.object({
        name: z.string(),
        logoUrl: z.string().optional(),
      })
    ),
    thumbnail: z.string(),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/pages" }),
});

export const collections = {
  projets,
  pages,
};
