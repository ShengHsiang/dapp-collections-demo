import request from '@/utils/request'

export function getAssetsList (requestParams) {
  return request({
    url: '/assets',
    method: 'get',
    params: requestParams
  })
}

export function getAssetsDetail ({ tokenId = null, contractAddress = null }) {
  return request({
    url: `/asset/${contractAddress}/${tokenId}`,
    method: 'get'
  })
}
