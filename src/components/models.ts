export interface Settings {
  dark: boolean;
}

export interface Note {
  type: 'note';
  id: string;
  title: string;
  note: string;
  like: boolean;
  trash: boolean;
  dateCreate: number;
  dateUpdate: number;
}

export interface Account {
  type: 'login';
  id: string;
  title: string;
  login: string;
  password: string;
  resource: string;
  comment: string;
  like: boolean;
  trash: boolean;
  dateCreate: number;
  dateUpdate: number;
}

export type Post = Note | Account;

export interface SortPostsParameters {
  type?: string;
  title: string;
  dateCreate: number;
  dateUpdate: number;
}
