export type Post = {
  id: string;
  type: string;
  title: string;
  like: boolean;
};

export type Note = Post;

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

export interface PostStateInterface {
  id: string;
  type: string;
  title: string;
  login: string;
  password?: string;
  resource: string;
  comment?: string;
  icon?: string;
  like?: boolean;
}

// export interface iPost {
//   title: string;
//   resource: string;
// }
