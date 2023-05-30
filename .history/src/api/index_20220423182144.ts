import { LS_NAME } from 'src/constants';

export class ls {
  static getPosts() {
    return localStorage.getItem(LS_NAME);
  }

  static setPosts(posts: string) {
    return localStorage.setItem(LS_NAME, posts);
  }
}
