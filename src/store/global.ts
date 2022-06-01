import { makeAutoObservable } from 'mobx';

class Global {
  count = 1;
  constructor() {
    makeAutoObservable(this);
  }

  setCount = () => {
    this.count++;
  };
}
export const localGlobal = new Global();
