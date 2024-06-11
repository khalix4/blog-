import { Author } from "../author/Author";

export type BlogPost = {
  author?: Author | null;
  content: string | null;
  createdAt: Date;
  id: string;
  publishedAt: Date | null;
  title: string | null;
  updatedAt: Date;
};
