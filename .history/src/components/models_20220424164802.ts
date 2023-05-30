// export type Note = Post;

export type Post = {
  id: string;
  type: string;
  title: string;
  like?: boolean;
  comment?: string;
  dateCreate: number;
  dateUpdate: number;
};

export interface Login extends Post {
  login: string;
  password: string;
  resource: string;
}

export interface Card extends Post {
  name: string;
  cardNumber: number;
  cardYear: number;
}

export interface SidebarMenuItem {
  title: string;
  icon: string;
  link: string;
}

export interface SortPostsParameters {
  // type: string;
  // title: string;
  dateCreate: number;
  dateUpdate: number;
}
