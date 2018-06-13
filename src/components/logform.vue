<template>
  <div class="login-form">
    <div class="g-form">
      <div class="g-form-line">
        <span class="g-form-label">用户名：</span>
        <div class="g-form-input">
          <input type="text"
          v-model="usernameModel" placeholder="请输入用户名">
        </div>
      </div>
      <div class="g-form-line">
        <span class="g-form-label">密码：</span>
        <div class="g-form-input">
          <input type="password"
          v-model="passwordModel" placeholder="请输入密码" @keyup.enter="logIn">
        </div>
      </div>
      <div class="g-form-line">
        <div class="g-form-btn">
          <a class="button" @click='logIn'>登录</a>
        </div>
      </div>
      <p style='color:red'>{{ logError }}</p>
    </div>
  </div>
</template>

<script>
export default {

  data(){
    return {
      usernameModel:'',
      passwordModel:'',
      logError:''
    }
  },
  methods:{
    logIn(){
      if(!/^\w{7,12}$/g.test(this.passwordModel)){
        this.logError = '用户名或密码错误，请重新输入';
        return false
      }else{
        this.$emit('log-in',this.usernameModel);
      }
    }
  }
}
</script>

<style>

</style>
