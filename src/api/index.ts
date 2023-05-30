import { LS_NAME } from 'src/constants';

export class ls {
  static getData() {
    const data = localStorage.getItem(LS_NAME);
    return data ? JSON.parse(data) : [];
  }

  static setData(data: string) {
    return localStorage.setItem(LS_NAME, data);
  }
}
