export interface Post {
  id: string;
  type?: string;
  title: string;
  login: string;
  password?: string;
  resource: string;
  comment?: string;
  like?: boolean;
}

export interface PostState {
  _posts: Post[] | [];
  _postCurrent: Post | null;
  _dialog: boolean;
  _formType: string;
}
