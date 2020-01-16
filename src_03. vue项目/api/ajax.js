import axios from 'axios'
import qs from 'qs'
import router from '../router'

// 1. 生成 Axios 的伪实例, instance不是真正new Axios，但是拥有axios实例的所有属性和方法
const instance = axios.create({
  baseURL: '/api'
})

// 2. 添加请求拦截器, 理解： 即将要发送请求的时候，将请求拦截下来，对当前的请求批量处理，如： 添加token，修改请求的参数
instance.interceptors.request.use(config => {
  // 1) config包含当前请求的所有请求信心： method, url, data
  
  // 2) 修改post请求的请求参数格式： 默认的参数格式是json对象格式{a: xxx, b: yyy}, 当前服务器能处理的是url-encoding， 如： a=xxx&b=yyy
  config.data = qs.stringify(config.data) // json对象格式 ---> url-encoding形式
  
  // 3) 携带token的方式： 1. cookie 2. 请求参数 3. 请求头[authorization]
  // 判断当前的请求是否需要携带token
  if(config.headers.needToken){
    let token = localStorage.getItem('token_key')
    if(token){
      config.headers.authorization = token
    }else{// 没有token的情况， 没有必要自动登录
      throw Error('请先登录')
    }
  }
 
  return config
})

// 3. 设置响应拦截器
instance.interceptors.response.use(
  response => response.data,
  error => {
    console.log(error.message);
    // 默认会返回一个成功的promise实例，但是没有数据
    if(!error.response){// 请求没有真正发出去，在请求拦截器报的错
      alert(error.message)
      // 跳转至登录页
      // router.currentRoute代表是当前的路由信息对象
      if(router.currentRoute.path !== '/login'){
        router.replace('/login')
      }
    }else {// 发送请求后获取错误信息对象
      if(error.response.status === 401){
        alert('token过期，重新登录')
        // 跳转至登录页
        if(router.currentRoute.path !== '/login'){
          router.replace('/login')
        }
      }else if(error.response.status === 404){
        alert('请求资源未找到')
      }else {
        alert('请求错误')
      }
      
    }
    // 手动返回一个状态为初始化的promise
    return new Promise(() => {})
  }
)



export default instance
