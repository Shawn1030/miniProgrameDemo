import request from './network'
const BASE_URL='http://152.136.185.210:8000/api/n3'
export function reqMultiData(){
  return request({
    url:BASE_URL+'/home/multidata'
  })
}

export function reqGoodsData(type,page){
  return request({
    url:BASE_URL+'/home/data',
    data:{
      type,
      page
    },
  })
}