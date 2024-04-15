export class TrafficLight {
  private waiting: boolean = false;

  constructor() {
    this.waiting = false;
  }

  attempt(fn: Function) {
    console.log(this.waiting);
    if (!this.waiting) {
      this.waiting = true;
      fn();
      this.waiting = false;
    }
  }
}
