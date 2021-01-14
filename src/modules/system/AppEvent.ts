/**
 * Create By Meng
 * Desc: 
 */

interface Event {
  key: string;
  listen(data?: unknown): void;
}

export default class BlocEvent {
  private static events: Array<Event>;

  static init() {
    this.events = [];
  }

  // 添加
  add(key: string, listen: (data?: any) => void) {
    BlocEvent.events.push({ key, listen });
  }

  send(key: string, data: any) {
    new Promise((resolve) => {
      BlocEvent.events.forEach((e: Event) => {
        if (e.key === key) {
          e.listen(data);
        }
      });
      resolve(0);
    });
  }

  remove(listen: (data?: any) => void) {
    BlocEvent.events = BlocEvent.events.filter((e: Event) => e.listen !== listen);
  }

  removeKey(key: string) {
    BlocEvent.events = BlocEvent.events.filter((e: Event) => e.key !== key);
  }

  clear() {
    BlocEvent.init();
  }
}