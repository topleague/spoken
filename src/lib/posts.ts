import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'>;

export const slugify = (s: string) =>
  s.toLowerCase().trim().replace(/[^\p{L}\p{N}]+/gu, '-').replace(/^-+|-+$/g, '');

export const formatDate = (d: Date) =>
  d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });

const byDate = (a: Post, b: Post) => b.data.date.valueOf() - a.data.date.valueOf();

/** All published posts, newest first. */
export async function getPosts(): Promise<Post[]> {
  return (await getCollection('posts', ({ data }) => !data.draft)).sort(byDate);
}

/** Pinned posts first (by pinOrder, then date), then everything else newest first. */
export function withPinsFirst(posts: Post[]): Post[] {
  const pinned = posts
    .filter((p) => p.data.pinned)
    .sort((a, b) => (a.data.pinOrder ?? 999) - (b.data.pinOrder ?? 999) || byDate(a, b));
  const rest = posts.filter((p) => !p.data.pinned).sort(byDate);
  return [...pinned, ...rest];
}

export interface Term { name: string; slug: string; count: number; }

function collect(names: (string | undefined)[]): Term[] {
  const map = new Map<string, Term>();
  for (const raw of names) {
    const name = raw?.trim();
    if (!name) continue;
    const slug = slugify(name);
    if (!slug) continue;
    const t = map.get(slug);
    if (t) t.count++;
    else map.set(slug, { name, slug, count: 1 });
  }
  return [...map.values()].sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}

export const getTags = (posts: Post[]) => collect(posts.flatMap((p) => p.data.tags));
export const getCategories = (posts: Post[]) => collect(posts.map((p) => p.data.category));

export const postsWithTag = (posts: Post[], slug: string) =>
  posts.filter((p) => p.data.tags.some((t) => slugify(t) === slug));
export const postsInCategory = (posts: Post[], slug: string) =>
  posts.filter((p) => p.data.category && slugify(p.data.category) === slug);
