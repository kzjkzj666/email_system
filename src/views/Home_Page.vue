<script setup>
import {
  Management,
  Promotion,
  UserFilled,
  User,
  Crop,
  EditPen,
  SwitchButton,
  CaretBottom, Expand
} from '@element-plus/icons-vue'

</script>
<template>
  <div class="background">
  <!-- element-plus中的容器 -->
  <el-container class="layout-container">
    <!-- 左侧菜单 -->
    <el-aside width="200px">
      <div class="el-aside__logo"></div>
      <!-- element-plus的菜单标签 -->
      <el-menu active-text-color="#ffd04b" background-color="#232323"  text-color="#fff"
               router>
        <el-menu-item >
          <el-icon>
            <Promotion />
          </el-icon>
          <span>发送邮件</span>
        </el-menu-item>
        <el-menu-item >
          <el-icon>
            <Expand />
          </el-icon>
          <span>收件箱</span>
        </el-menu-item>
        <el-menu-item >
          <el-icon>
            <Management />
          </el-icon>
          <span>草稿箱</span>
        </el-menu-item>
        <el-sub-menu >
          <template #title>
            <el-icon>
              <UserFilled />
            </el-icon>
            <span>个人中心</span>
          </template>
          <el-menu-item index="/user/information">
            <el-icon>
              <User />
            </el-icon>
            <span>基本资料</span>
          </el-menu-item>
          <el-menu-item index="/user/send">
            <el-icon>
              <Crop />
            </el-icon>
            <span>已发送</span>
          </el-menu-item>
          <el-menu-item index="/user/icon">
            <el-icon>
              <EditPen />
            </el-icon>
            <span>更换头像</span>
          </el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-aside>
    <!-- 右侧主区域 -->
    <el-container>
      <!-- 头部区域 -->
      <el-header>
        <div>用户名：</div>
        <!-- 下拉菜单 -->
        <!-- command: 条目被点击后会触发,在事件函数上可以声明一个参数,接收条目对应的指令 -->
        <el-dropdown placement="bottom-end" >
                    <span class="el-dropdown__box">
                        <el-avatar :src="avatar" />
                        <el-icon>
                            <CaretBottom />
                        </el-icon>
                    </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="info" :icon="User">基本资料</el-dropdown-item>
              <el-dropdown-item command="avatar" :icon="Crop">已发送</el-dropdown-item>
              <el-dropdown-item command="resetPassword" :icon="EditPen">更改头像</el-dropdown-item>
              <el-dropdown-item command="logout" :icon="SwitchButton">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </el-header>
      <!-- 中间区域 -->
      <el-main>
        <!-- <div style="width: 1290px; height: 570px;border: 1px solid red;">
            内容展示区
        </div> -->
        <router-view></router-view>
      </el-main>
      <!-- 底部区域 -->
    </el-container>
  </el-container>
  </div>
</template>

<style lang="scss" scoped>
.background{
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  //background-image: radial-gradient(
  //        red,
  //        cyan,
  //        purple
  //);
  background-image: linear-gradient(
  90deg,
  cyan,
  purple
  );
  background-size: 400%;
  animation: myanimation 10s infinite;

  .layout-container {
    height: 100vh;
    position: absolute;
    left: 0;  /* 将元素放置到页面的最左边 */
    top: 0;  /* 将元素放置到页面的最上边 */
    .el-aside {
      background-color: #232323;
      .el-menu {
        border-right: none;
      }

      &__logo {
        height: 120px;
        background: url('@/assets/logo.svg') no-repeat center / 120px auto;
      }
    }

    .el-header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .el-dropdown__box {
        display: flex;
        align-items: center;

        .el-icon {
          color: #999;
          margin-left: 10px;
        }

        &:active,
        &:focus {
          outline: none;
        }
      }
    }

    .el-footer {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      color: #666;
    }
  }
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
</style>