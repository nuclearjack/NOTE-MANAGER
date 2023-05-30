import { LS_NAME } from 'src/constants';

export class ls {
  static getPosts() {
    localStorage.getItem(LS_NAME);
  }

  static setPosts(posts: string) {
    localStorage.setItem(LS_NAME, posts);
  }
}
