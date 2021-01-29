/**
 * Create By Meng
 * Desc: 
 */

import { request, Result } from '../net/axios';
import { Sector } from '../apis/params';

export function queryChina(tag: string): Promise<Result> {

  return request({
    url: 'china/scan',
    method: 'POST',
    data: Sector
  });
}
