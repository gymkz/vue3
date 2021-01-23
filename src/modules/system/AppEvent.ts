/**
 * Create By Meng
 * Desc: 事件分发EventBus
 */

 /* eslint-disable */
interface Event {
  key: string;
  listen(data?: unknown): void;
}

export default class AppEvent {
  private static ins: AppEvent;
  private events: Array<Event>;

  private constructor() {
    this.events = [];
  }

  public static init(): void {
    if (!AppEvent.ins) {
      AppEvent.ins = new AppEvent();
    }
  }

  public static get(): AppEvent {
    return AppEvent.ins;
  }

  // 添加
  public add(key: string, listen: (data?: any) => void): void {
    this.events.push({ key, listen });
  }

  // 发送
  public send(key: string, data: any): void {
    new Promise((resolve) => {
      this.events.forEach((e: Event) => {
        if (e.key === key) {
          e.listen(data);
        }
      });
      resolve(0);
    });
  }

  // 根据listen移除
  public remove(listen: (data?: any)=>void): void {
    this.events = this.events.filter((e: Event) => e.listen !== listen);
  }

  // 根据key移除
  public removeKey(key: string): void {
    this.events = this.events.filter((e: Event) => e.key !== key);
  }

  // 清空
  public clear(): void {
    this.events = [];
  }
}