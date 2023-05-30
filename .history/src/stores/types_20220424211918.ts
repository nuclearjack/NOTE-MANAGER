import { Post, Login, SortPostsParameters } from 'src/components/models';

export type Posts = Post[] | Login[] | [];

export interface PostState {
  _posts: Posts;
  _postCurrent: Post | null;
  _dialog: boolean;
  _formType: string;
  _sortValue: keyof SortPostsParameters;
  _sortReverse: boolean;
}
