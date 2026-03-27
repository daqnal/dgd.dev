import type { Post, PostForm } from "posts-consts.ts";

const postModules = import.meta.glob("/lib/md/posts/*.md", {
  eager: true,
  import: "default",
});

export function getAllPosts(): Post[] {
  const posts: Post[] = Object.entries(postModules).map(([path, module]) => {
    const slug = path.split("/").pop()!.replace(".md", "");
    const metadata = (module as any).metadata || {};

    return {
      slug,
      title: metadata.title,
      date: metadata.date,
      form: metadata.form,
    } as Post;
  });
}

return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export function groupPosts(posts: Post[]) {
  return {
    recent: posts.slice(0, 8),
    articles: posts.filter(p => p.form === "article"),
    miscellaneous: posts.filter(p => p.form === "miscellaneous"),
    photos: posts.filter(p => p.form === "photo"),
  }
}

export const load: PageServerLoad = async () => {
  const posts = getAllPosts();
  return groupPosts(posts);
};
