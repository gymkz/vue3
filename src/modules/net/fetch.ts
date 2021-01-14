/**
 * Create By Meng
 * Desc: 
 */

const _url = ''; // 服务器地址

interface RequestBody {
  url?: string;
  method?: string;
  baseURL?: string;
  headers?: any;
  body?: any;
}

export interface Result {
  status?: number;
  success: boolean;
  message: string;
  result: unknown;
}

// 请求
export function request(options: RequestBody) {
  // 请求参数整理
  options.method = options.method ? options.method : 'GET';
  if (options.method === 'POST') {
    options.body = JSON.stringify(options.body);
  }

  if (!options.headers) {
    options.headers = {
      'Content-Type': 'application/json',
    }
  }
  // return new Promise((resolve, reject) => {
  return new Promise((resolve) => {
    console.log('请求：');
    console.log(options);
    // 请求实体
    fetch(`${_url}${options.url}`, options)
      // .then((response) => response.json())
      .then((res) => {
        console.log('响应：');
        console.log(res);
        resolve({ result: '成功' });
      })
      .catch((err) => {
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
