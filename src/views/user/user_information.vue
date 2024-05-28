<script setup>
</script>

<template>
  <el-card class="page-container">
    <template #header>
      <div class="header">
        <span>基本资料</span>
      </div>
    </template>
    <el-row>
      <el-col :span="12">
        <el-form :rules="rules" label-width="100px" size="large">
          <el-form-item class="username" label="登录名称">
            <el-input disabled></el-input>
          </el-form-item>
          <el-form-item class="password" label="用户密码" prop="email">
            <el-input ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">提交修改</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </el-card>

</template>

<style scoped>
  .page-container {
    width: 1250px;
    height: 450px;
    margin: 20px auto;
    left:50%;
    background-color: rgb(255, 255, 2555,0.4);
    .header{
      font-size: 20px;
      font-weight: bold;
      margin-left: 20px;
    }
    .el-form {
      width: 1200px;
      height: 380px;
      padding: 20px; /* 内边距 */
      margin-bottom: 20px; /* 外边距 */

      .el-form-item {
        margin-top: 20px;
        margin-bottom: 20px;
      }

      .username {
        margin-left: 50px;
        .el-input {
          width: 450px;
        }
      }

      .password {
        margin-left: 50px;
        .el-input {
          width: 450px;
        }
      }
      .el-button{
        margin-left: 400px;
      }

    }
  }


</style>