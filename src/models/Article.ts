import { Comment } from './Comment';
import { Tag } from './Tag';
import { User } from './User';

export interface ArticleComments extends Comment {
  replyes?: Comment[];
}
export interface Article {
  _id: string;
  title: string;
  text: string;
  commentsCount: number;
  viewsCount: number;
  likes: number;
  author: User;
  tags: Tag[];
  comments: ArticleComments[];
  imageUrls?: string[];
  likedBy: string[];
}
