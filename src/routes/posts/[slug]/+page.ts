export async function load({ params }) {
    const post = await import(`/src/lib/md/posts/${params.slug}.md`);
    const { title, date, form, tags } = post.metadata;
    const content = post.default;

    return {
        content,
        title,
        date,
        form,
        tags
    };
}