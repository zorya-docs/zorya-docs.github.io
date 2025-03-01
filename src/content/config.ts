import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const metadataDefinition = () =>
  z
    .object({
      title: z.string().optional(),
      ignoreTitleTemplate: z.boolean().optional(),

      canonical: z.string().url().optional(),

      robots: z
        .object({
          index: z.boolean().optional(),
          follow: z.boolean().optional(),
        })
        .optional(),

      description: z.string().optional(),

      openGraph: z
        .object({
          url: z.string().optional(),
          siteName: z.string().optional(),
          images: z
            .array(
              z.object({
                url: z.string(),
                width: z.number().optional(),
                height: z.number().optional(),
              })
            )
            .optional(),
          locale: z.string().optional(),
          type: z.string().optional(),
        })
        .optional(),

      twitter: z
        .object({
          handle: z.string().optional(),
          site: z.string().optional(),
          cardType: z.string().optional(),
        })
        .optional(),
    })
    .optional();

const postCollection = defineCollection({
  loader: glob({ pattern: ['*.md', '*.mdx'], base: 'src/data/post' }),
  schema: z.object({
    publishDate: z.date().optional(),
    updateDate: z.date().optional(),
    draft: z.boolean().optional(),

    title: z.string(),
    excerpt: z.string().optional(),
    image: z.string().optional(),

    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    author: z.string().optional(),

    metadata: metadataDefinition(),
  }),
});

const minutesCollection = defineCollection({
  loader: glob({ pattern: ['*.md', '*.mdx'], base: 'src/data/minutes' }),
  schema: z.object({
    date: z.date().optional(),
    title: z.string().optional(),
    id: z.number().optional(),
  }),
});

const minutesAdvisorsCollection = defineCollection({
  loader: glob({ pattern: ['*.md', '*.mdx'], base: 'src/data/minutes/advisors_minutes' }),
  schema: z.object({
    date: z.date().optional(),
    title: z.string().optional(),
    id: z.number().optional(),
  }),
});

const minutesGroupCollection = defineCollection({
  loader: glob({ pattern: ['*.md', '*.mdx'], base: 'src/data/minutes/group_minutes' }),
  schema: z.object({
    date: z.date().optional(),
    title: z.string().optional(),
    id: z.number().optional(),
  }),
});

const milestonesCollection = defineCollection({
  loader: glob({ pattern: ['*.md', '*.mdx'], base: 'src/data/milestones' }),
  schema: z.object({
    title: z.string().optional(),
    iframe_url: z.string().optional(),
    topics: z.array(z.string()).optional(),
  }),
});


export const collections = {
  post: postCollection,
  minutes: minutesCollection,
  advisors_minutes: minutesAdvisorsCollection,
  group_minutes: minutesGroupCollection,
  milestones: milestonesCollection,
};
