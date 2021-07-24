import { request } from "./request";

export function getHomeLeft() {
  return request({
    url:'/menus',
    method: 'get',
  })
}

export function getUserData(query, pagenum, pagesize) {
  return request({
    url: '/users',
    method: 'get',
    params: {
      query,
      pagenum,
      pagesize
    }
  })
}

//修改用户状态
export function changeState(uId, type) {
  return request({
    url: 'users/:uId/state/:type' + uId + type,
    method: 'put',
    params: {
      uId,
      type
    }
  })
}