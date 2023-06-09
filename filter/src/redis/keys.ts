export const postsKey = (postId: string) => `posts#${postId}`;
export const commentsKey = (commentId: string) => `comments#${commentId}`;
export const postsByViewsKey = () => "posts:views";
export const postsByLikesKey = () => "posts:likes";
export const userLikesKey = (userId: string) => `users:likes#${userId}`;
