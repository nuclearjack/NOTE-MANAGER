export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export interface iAppPostMenuItem {
  type: string,
  icon: string,
  color: string
}

export interface iBottomMenuItem {
  name: string,
  path: string,
  title: string,
  icon: string,
  color: string
}

export interface iSidebarMenuItem {
  title: string,
  icon: string,
  link: string
}

export interface PostStateInterface {
  title: string,
  resource: string,
  icon: string,
}

export interface iPost {
  title: string;
  resource: string;
  icon: string;
}
