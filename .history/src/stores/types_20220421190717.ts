export interface Post {
  id: string;
  type?: string;
  title: string;
  login: string;
  password?: string;
  resource: string;
  comment?: string;
}

export interface PostState {
  _posts: Post[] | [];
  _dialog: boolean;
}
