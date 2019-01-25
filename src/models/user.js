import {login} from '../utils/request'
import router from 'umi/router'

export default {
    namespace:'user',
    state:{
        token:'',
        role:''
    },
    effects:{
        *login({payload},{call,put}){
            //请求接口得到返回数据
            const ret = yield call(login,payload)
            if (ret.code == 0) {
                localStorage.setItem('ktoken',ret.data.token)
                yield put({type:'init',payload:ret.data})
                router.push('/')
            }
        }
    },
    reducers:{
        init(state,action){
            return {
                ...state,
                token:action.payload.token,
                rule:action.payload.rule
            }
        },
        clear(state,action){
            return{
                token:'',
                role:''
            }
        }
    }
}