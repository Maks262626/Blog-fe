import { Article } from './Article';
import { User } from './User';

export interface Comment {
  _id: string;
  text: string;
  likes: number;
  likedBy: string[];
  author: User;
  article: Article;
  parentId?: string;
}
