import axios from 'axios'
//import router from '../router'
const baseURL='/api'
const instance= axios.create({baseURL})

instance.interceptors.response.use(
    result=>{
        if(result.data.code===1) {
            return result.data
        }
        else if(result.data.code===0){
            alert('密码错误')
            return Promise.reject('密码错误')
        }
        alert(result.data.msg?result.data.msg:'服务异常');
        return Promise.reject(result.data.msg)
    },
    error=>{
        alert("服务异常")
        return Promise.reject(error)
    }
)
export default instance;