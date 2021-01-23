/**
 * Create By Meng
 * Desc: window系列监听
 */

export { default as AppEvent } from './AppEvent';

export function srcollListener(divId: string, onScroll: (top: number, height: number, offsetHeight: number) => void, interval = 100): void {
  let lastY = 0;
  const body = document.getElementById(divId);
  if (body) {
    body.addEventListener("scroll", () => {
      const topSize = body.scrollTop;
      if (topSize - lastY > interval) {
        onScroll(topSize, body.scrollHeight, body.offsetHeight);
        lastY = topSize;
      }
      // console.log(topSize);
      // console.log('offsetTop-------->',body.offsetTop);
      // console.log('offsetHeight-------->',body.offsetHeight);
      // console.log('scrollHeight-------->',body.scrollHeight);
    });
  }
}