/**
 * Create By Meng
 * Desc: 
 */

/* eslint-disable */

const _url = ''; // 服务器地址

// 请求
export function request(path: string, init: RequestInit) {
  // 请求参数整理
  init.method = init.method ? init.method : 'GET';
  if (init.method === 'POST') {
    init.body = JSON.stringify(init.body);
  }

  if (!init.headers) {
    init.headers = {
      'Content-Type': 'application/json',
    }
  }
  // return new Promise((resolve, reject) => {
  return new Promise((resolve) => {
    console.log('请求: ');
    console.log(init);
    // 请求实体
    fetch(path, init)
      .then((response) => response.json())
      .then((res) => {
        console.log('响应: ');
        console.log(res);
        resolve(res);
      })
      .catch((err) => {
        console.log('抱错: ');
        console.log(err);
        resolve({ result: '抱错' });
      })
      .finally(() => {
        // 请求结束动作
      });
  });
}

// 上传
export function upload() {

  const body = new FormData();
  body.set('name', 'file');

  return new Promise((resolve) => [
    fetch('', { method: 'POST' })
      .then((data) => data.json())
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {

      })
  ]);
}

// 下载
export function download() {
  return new Promise((resolve) => [
    fetch('', { method: 'GET' })
      .then((data) => data.json())
      .then((res) => {
        // const blob = new Blob()
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {

      })
  ]);
}
