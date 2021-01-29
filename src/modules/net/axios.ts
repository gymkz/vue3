/**
 * Create By Meng
 * Desc: 👉❗️🈳❗️👈
 */

/* eslint-disable */
import axios, { AxiosRequestConfig } from 'axios';

// 基础配置
const instance = axios.create({
  baseURL: 'http://47.116.70.58:8004',
  // baseURL: '/apps', // 开发调试专用
  timeout: 20000, // 毫秒
  headers: { 'Content-Type': 'application/json; charset=utf-8' }
});

export type Result = {
  status?: number;
  success: boolean;
  message: string;
  data: unknown;
}
// 请求实体  url: method: headers?: timeout?: baseURL?: 
export function request(options: AxiosRequestConfig): Promise<any> {
  return new Promise((resolve) => {
    console.log('<====== Request Params ======>');
    console.log(options);
    
    instance.request(options).then((response) => {
      console.log('<====== Response Body ======>');
      console.log(response);
      const { data, status, statusText } = response;
      const message = data ? (data.message ? data.message : data) : statusText;
      if (status === 200 && data.success) {
        resolve({
          data: data.result,
          status: true,
          message
        });
      } else {
        const errInfo = parseError(data ? data.code : status)
        resolve(errInfo);
      }
    }).catch((err) => {
      console.log('<====== Request Error ======>');
      console.log(err);
      resolve({
        status: false,
        message: '请求失败！',
      });
    }).finally(() => {
      // q请求完成之后操作
    });
  });
}

function parseError(code: number) {
  let message = 'OK';
  switch (code) {
    case 404:
      message = '接口不存在';
      break;
    case 403:
      message = '请求方式错误';
      break;
    case 500:
      message = '接口请求失败';
      break;
    default:
      message = '未知异常';
      break;
  }
  return {
    status: false,
    message,
  };
}

