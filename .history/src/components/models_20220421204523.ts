export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

// export interface iAppPostMenuItem {
//   type: string;
//   icon: string;
//   color: string;
// }

// export interface iBottomMenuItem {
//   name: string;
//   path: string;
//   title: string;
//   icon: string;
//   color: string;
// }

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
  // icon: string;
}
