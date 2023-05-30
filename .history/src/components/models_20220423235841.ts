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

export interface SidebarMenuItem {
  title: string;
  icon: string;
  link: string;
}
