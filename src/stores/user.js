import {defineStore} from "pinia";
import {ref} from "vue";
import{userLoginService} from "@/api/user.js";
export const useUserStore = defineStore('user', () => {
    // 1. 定义管理用户数据的state
    const userInfo = ref({})
    // 2. 定义获取接口数据的action函数
    const getUserInfo = async ({ account, password }) => {
        const res = await userLoginService({ account, password })
        userInfo.value = res.result
    }
    // 3. 以对象的格式把state和action return
    return {
        userInfo,
        getUserInfo
    }
}, {
    // 4. 定义该store的配置项
    persist: true,
})


