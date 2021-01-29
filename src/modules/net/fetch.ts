/**
 * Create By Meng
 * Desc: 
 */

/* eslint-disable */

const _url = '/down/'; // 服务器地址

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
export function upload(photos: Array<string>) {

  const data = new FormData();
  data.append('name', 'file');
  // formData 只接受文件、Blob 或字符串，不能直接传递数组，所以必须循环嵌入
  for (let i = 0; i < photos.length; i++) {
    data.append('photo', photos[i]);
  }

  return new Promise((resolve) => [
    fetch('', { method: 'POST', body: data })
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
export function download(path: string) {
  return new Promise((resolve) => [
    fetch(`${_url}${path}`, { method: 'GET' })
      .then((data) => data.blob())
      .then((res) => {
        console.log('下载成功');
        const fileName = window.URL.createObjectURL(res);
        console.log(fileName);
        resolve({
          status: true,
          data: fileName
        });
      })
      .catch((err) => {
        console.log(err);
        resolve({
          status: false,
          message: ''
        });
      })
      .finally(() => {

      })
  ]);
}
