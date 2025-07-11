import { TAGS } from "../data/BlogPageData";

export type BlogPages = {
  [key: string]: BlogPost;
};

export type BlogPost = {
  id: string;
  title: string;
  date: string;
  html: string;
  tags: string[];
  displayOrder: number;
  hidden: boolean;
};

export type Tag = (typeof TAGS)[number];
