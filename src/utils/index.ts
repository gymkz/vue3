/**
 * Create By Meng
 * Desc: 工具类封装
 */

let lastTime = 0;
export function filterClick(): boolean {
  if(Date.now() - lastTime > 300) {
    lastTime = Date.now();
    return true;
  }
  return false;
}

export function formatDate(): void {
  // 
}