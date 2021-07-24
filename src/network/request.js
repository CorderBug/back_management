import axios from 'axios'

export function request(config) {
  //创建axios实例
  const instance = axios.create({
    baseURL: 'https://lianghj.top:8888/api/private/v1/',
    timeout: 5000
  })
  //请求拦截
  instance.interceptors.request.use(config => {
    //处理数据
    // console.log(config);
    config.headers.Authorization = window.sessionStorage.getItem('token')
    //放行请求
    return config
  }, err => {
    console.log(err);
  })

  //响应拦截
  instance.interceptors.response.use(res => {
    
    return res.data
  }, err => {
    console.log(err);
  }) 

  return instance(config)
}

