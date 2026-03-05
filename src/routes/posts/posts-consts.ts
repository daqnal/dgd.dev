export const validTags = [
    "tech",
    "biblical",
    "religion",
    "literature",
    "culture",
    "linux",
    "privacy",
    "science",
    "math",
    "programming",
    "outdoors",
    "philosphy",
    "random"
]

export const POST_FORMS = [
    "article",
    "guide",
    "miscellaneous",
    "commentary",
    "photo"
]
export type PostForm = typeof POST_FORMS[number];

export interface Post {
    slug: string,
    title: string,
    date: string,
    form: PostForm,
}