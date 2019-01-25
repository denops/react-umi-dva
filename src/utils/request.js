import axios from 'axios'
import {notification} from 'antd'
import nprogress from 'nprogress'

export let getGoods = async()=>{
    return await axios.get('/api/goods')
}

export let login = async(obj) => {
    return await axios.post('/api/login',obj)
}

const codeMessage = {
    202: '一个请求已经进入后台排队（异步任务）。',
    401: '用户没有权限（令牌、用户名、密码错误）。',
    404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
    500: '服务器发生错误，请检查服务器。'
  };
  
  
  export function setAxios(){
    // axios.interceptors.request.use(
    //   config=>{
    //     if(store.state.token){
    //       config.headers.token = store.state.token
    //     }
    //     return config
    //   }
    // )
  
    // 获取数据的时候 如果code是-1 我们就认为登录过期了 需要重新登录
    // 每一次http有返回，都先出发这个拦截器
    axios.interceptors.request.use(
        request=>{
            nprogress.start()
            return request
        }
    )
    axios.interceptors.response.use(
      response=>{
        nprogress.done()
        if(response.status==200){
          const data = response.data
          if(data.code!==0){
            notification.error({
              message: `请求错误 ${response.config.url}`,
              description: data.msg,
            });
          }
          return data
        }else if(codeMessage[response.status]){
          notification.error({
            message: `请求错误 ${response.status}: ${response.config.url}`,
            description: codeMessage[response.status],
          });
        }
        return response
      }
    )
  }