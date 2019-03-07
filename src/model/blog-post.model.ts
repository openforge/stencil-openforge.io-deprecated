import { BlogAuthor } from './blog-author.model';
import { BlogCategory } from './blog-category.model';
import { BlogTag } from './blog-tag.model';

export interface BlogPost {
  url: string;
  created: Date;
  published: Date;
  author: BlogAuthor;
  categories: BlogCategory[];
  tags: BlogTag[];
  featured_image: string;
  slug: string;
  title: string;
  body: string;
  summary: string;
  seo_title: string;
  meta_description: string;
  status: string;
}
