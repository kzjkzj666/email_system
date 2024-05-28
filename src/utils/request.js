import axios from 'axios'
//import router from '../router'
const baseURL='/api'
const instance= axios.create({baseURL})
//添加响应拦截器
instance.interceptors.response.use(
    result=>{
        if(result.data.code===1) {
            return result.data
        }
        else if(result.data.code===0){
            ElMessage.error('密码错误')
            return Promise.reject('密码错误')
        }
        ElMessage.error(result.data.msg?result.data.msg:'服务异常')
        return Promise.reject(result.data.msg)
    },
    error=>{
        //alert("服务异常")
        ElMessage.error('服务异常')
        return Promise.reject(error)
    }
)

import {useTokenStore} from '@/stores/token.js'
import {ElMessage} from "element-plus";
//添加请求拦截器
instance.interceptors.request.use(
    (config)=>{
        //请求前的回调
        //添加token
        const tokenStore = useTokenStore();
        //判断有没有token
        if(tokenStore.token){
            config.headers.Authorization = tokenStore.token
        }
        return config;
    },
    (err)=>{
        //请求错误的回调
        Promise.reject(err)
    }
)

export default instance;