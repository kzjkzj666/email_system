<template>
<div id="background">
  <div id="logo">Email System</div>

  <div class="login-container">
    <div class="slide">
      <div :class="active === 1 ? 'form' : 'form hidden'">
        <div class="title">欢迎<b>回来</b></div>
        <div class="subtitle">登录您的账号</div>
        <div class="input">
          <el-input v-model="loginData.username" placeholder="请输入用户名" />
        </div>
        <div class="input">
          <el-input
              v-model="loginData.password"
              type="password"
              placeholder="请输入密码"
              show-password
          />
        </div>
        <div class="button">
          <el-button color="#626aef" :dark="isDark" v-on:click="login">登录</el-button>
        </div>
      </div>

      <div :class="active === 2 ? 'form' : 'form hidden'">
        <div class="title">开始</div>
        <div class="subtitle">创建您的账号</div>
        <div class="input">
          <el-input v-model="registerData.username" placeholder="请输入用户名" />
        </div>
        <div class="input">
          <el-input
              v-model="registerData.password"
              type="password"
              placeholder="请输入密码"
              show-password
          />
        </div>
        <div class="button">
          <el-button color="#626aef" :dark="isDark" v-on:click="register">注册</el-button>
        </div>
      </div>

      <div :class="active===1 ?'card':'card active'">
        <div class="card_title">{{ active === 1 ? '新用户？' : '已有账户' }}</div>
        <div class="btn">
          <el-button type="success" @click="active=(active===1)?2:1">
            {{ active === 1 ? '去注册' : '去登录' }}
            </el-button>
        </div>
      </div>
    </div>

  </div>
</div>
</template>

<style scoped>
#background{
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  //background-image: linear-gradient(
  //90deg,
  //cyan,
  //purple
  //);
  background-image: radial-gradient(
      blue,
      cyan,
      purple
  );
  background-size: 400%;
  animation: myanimation 10s infinite;
}
@keyframes myanimation{
  0%{
    background-position: 0% 50%;
  }
  50%{
    background-position: 100% 50%;
  }
  100%{
    background-position: 0% 50%;
  }
}

#logo{
  color:aliceblue;
  font-size: 25px;
  font-weight: 800;
  text-transform: uppercase;
  position: absolute;
  top:10%;
  left: 10%;
}

</style>

<style lang = "scss">
.login-container {
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .slide
  {
    position:relative;
    display: flex;
    justify-content: center;
    align-items: center;
    .form {
      width: 400px;
      height: 500px;
      background-color: rgb(255, 255, 2555,0.4);
      border-radius: 10px;
      border:1px solid rgba(255, 255, 255, 0.15);
      padding:40px 60px;
      box-shadow: rgba(0, 0, 0, 0.24) 50px 50px 100px,-20px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      margin: 0 10px;
      z-index: 3;
      transition: 0.5s ease-in-out;
      
      &.hidden {
        height: 395px;
        box-shadow: none;
        z-index: 1;
      }
      .title {
        font-size: 18px;
        letter-spacing: 1px;
        color: aliceblue;
        font-weight: 800;
      }

      .subtitle {
        font-size: 14px;
        letter-spacing: 1px;
        color: rgb(246,240,255);
        font-weight: 300;
        margin-bottom: 35px;
      }

      .input {
        width: 100%;
        margin-bottom: 35px;

        .el-input {
          width: 100%;
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: aliceblue;
          font-size: 14px;
          font-weight: 300;
          &:focus {
            border-color: #626aef;
            outline: 1.5px solid #626aef;
            &::placeholder {
              opacity: 0;
            }
          }
        }
      }
    }
    .card{
      position: absolute;
      right:0;
      top:50%;
      transform: translate(0,-50%);
      width:430px;
      height:400px;
      background: url("../assets/card_background.jpeg");
      background-size: cover;
      border:1px solid black;
      border-radius: 0 10px 10px 0;
      padding: 40px;
      transition: 0.5s ease-in-out;
      z-index: 2;
      &.active{
        right:calc(100% - 440px);
        border-radius: 10px 0 0 10px;
      }

      .card_title{
        color:aliceblue;
        font-size: 18px;
        position: absolute;
        bottom: 11%;
      }

      .btn{
        .el-button{
          margin-left: 10px;
          position: absolute;
          right: 10%;
          bottom: 10%;
        }
      }
    }
  }

}
</style>

<script setup>
import { ref } from 'vue'
const active = ref(1);
const registerData = ref({
  username: '',
  password: ''
});

const loginData = ref({
  username: '',
  password: ''
});

import {userRegisterService} from '@/api/user.js'
const register = async () => {
  let result = await userRegisterService(registerData.value)
  alert(result.msg?result.msg:'注册成功');
  ElMessage.success(result.msg?result.msg:'注册成功')
}

import {userLoginService} from '@/api/user.js'
import {ElMessage} from "element-plus";
import {useRouter} from 'vue-router'
import{useUserStore} from "@/stores/user.js";
const router = useRouter();
const login = async () => {
  const userStore = useUserStore();
  let result = await userLoginService(loginData.value)
  ElMessage.success(result.msg?result.msg:'登录成功')
  await userStore.getUserInfo({username:loginData.value.username,password:loginData.value.password });
  router.push({path:'/home'})
}


</script>