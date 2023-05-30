// export type Note = Post;

export type Post = {
  id: string;
  type: string;
  title: string;
  like?: boolean;
  dateCreate: Date;
  dateUpdate: Date;
};

export interface Login extends Post {
  login: string;
  password: string;
  resource: string;
  comment?: string;
}

export interface SidebarMenuItem {
  title: string;
  icon: string;
  link: string;
}
