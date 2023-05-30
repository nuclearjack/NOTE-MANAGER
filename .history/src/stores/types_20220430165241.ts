import { Post, Login, SortPostsParameters } from 'src/components/models';

export type Posts = Post[] | Login[] | [];

export interface PostState {
  _posts: Posts;
  _postCurrent: Post | null;
  _dialog: boolean;
  _dialogAccountAdd: boolean;
  _formType: string;
  _sortValue: keyof SortPostsParameters;
  _sortReverse: boolean;
}

export interface PostGetters {
  posts: Posts;
  postCurrent: Post | null;
  dialog: boolean;
  dialogAccountAdd: boolean;
  formType: string;
  sortValue: keyof SortPostsParameters;
  sortReverse: boolean;
}

export interface SettingState {
  _drawerLeft: boolean;
  _drawerBottom: boolean;
  _dialogPostsSort: boolean;
  _dialogConfirm: boolean;
}
