import {
  Note,
  Account,
  Settings,
  SortPostsParameters,
} from 'src/components/models';

export type Posts = Array<Note | Account>;

export interface SettingState {
  _drawerLeft: boolean;
  _dialogPostsSortType: boolean;
}

export interface GlobalState {
  _settings: Settings;
  _drawerLeft: boolean;
  _dialogPostsSortType: boolean;
}

export interface PostState {
  _posts: Posts;
  _postCurrent: Note | Account | null;
  _dialog: boolean;
  _sortValue: keyof SortPostsParameters;
  _sortReverse: boolean;
  _loading: boolean;
}

// export interface PostGetters {
//   settings: Settings;
//   posts: Posts;
//   activePosts: Posts;
//   postCurrent: Post | null;
//   dialog: boolean;
//   dialogAccountAdd: boolean;
//   formType: string;
//   sortValue: keyof SortPostsParameters;
//   sortReverse: boolean;
//   loading: boolean;
// }
