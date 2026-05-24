import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const postsCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date().optional(),
    desc: z.string().optional(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  posts: postsCollection,
};
