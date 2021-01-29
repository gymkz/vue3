/**
 * Create By Meng
 * Desc: 导航
 */

/* eslint-disable */
import { Router, useRoute } from "vue-router";

export default class Navigate {
  private static ins: Navigate;
  private router: Router;

  private constructor(router: Router) {
    this.router = router;
    this.dispatch();
  }

  // 初始化
  public static init(router: Router): void {
    if (!Navigate.ins) {
      Navigate.ins = new Navigate(router);
    }
  }

  public static get(): Navigate {
    return Navigate.ins;
  }

  public dispatch() {
    this.router.beforeEach((to, from, next) => {
      console.log(to, from, next);
    });
  }

  public push(path: string, params?: any): void {
    this.router.push({ path, params: params || {} });
    // this.router.push(path);
  }

  public replace(path: string): void {
    this.router.replace(path);
  }

  public back(): void {
    this.router.back();
  }

  public pop(delta = 1): void {
    this.router.go(delta);
  }

  public params(): any {
    useRoute().params;
  }
}