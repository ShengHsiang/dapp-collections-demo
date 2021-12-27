import request from '@/utils/request'

export function defaultRequest () {
  return request({
    url: '/',
    method: 'get'
  })
}
