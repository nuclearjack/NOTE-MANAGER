import { LS_NAME } from 'src/constants';

export class ls {
  static getPosts() {
    const posts = localStorage.getItem(LS_NAME);
    return posts ? JSON.parse(posts) : [];
  }

  static setPosts(posts: string) {
    return localStorage.setItem(LS_NAME, posts);
  }
}
