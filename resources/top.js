import httpServer from '../common/httpInterceptor'

// 用户登录
export function rankDetail(idx) {
  return httpServer({
    url: '/top/list?idx='+idx,
    method: 'get',
  });
}