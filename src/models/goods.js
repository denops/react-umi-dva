import {getGoods} from '../utils/request'
import Axios from 'axios';
export default{
  namespace:'goods',
  state:{
    all:[],
    courses:{},
    tags:[]
  },
  effects:{
    // getList
    *getList(payload, {call,put}){
      // 等getGoods数据回来
      const goods = yield call(getGoods)
      
      
      yield put({type:'init', payload:goods.data})
      // call执行一个异步函数
      // put 其实就是dispatch
    }
  },
  // 同步
  reducers:{
    init(state, action){
      const {tags,data} = action.payload
      let allCourese = []
      tags.forEach(tag => {
        allCourese = [...allCourese,...data[tag]]
      });
      return {
        ...state,
        tags,
        all:allCourese,
        courses:data
      }
    },
    add(state,action){
      // 2. 触发这个reducer 返回新的state
      // console.log(action)
      console.log('add',action)
      // 就是reducer 一定要返回新的state
      return [...state, action.payload]
    },
    remove(state, action){
      console.log('remove',action)
      return state
    }
  }
}