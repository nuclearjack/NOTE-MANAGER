export interface iSidebarMenuItem {
  title: string;
  icon: string;
  link: string;
}

export interface PostStateInterface {
  id: string;
  type?: string;
  title: string;
  login: string;
  password?: string;
  resource: string;
  comment?: string;
  icon?: string;
  like?: boolean;
}

export interface iPost {
  title: string;
  resource: string;
}
