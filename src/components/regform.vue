<template>
  <div class="login-form">
    <div class="g-form">
      <div class="g-form-line">
        <span class="g-form-label">用户名：</span>
        <div class="g-form-input">
          <input type="text"
          v-model="usernameModel" placeholder="请输入用户名">
          <span v-if='usernameError.errorText==""'>用户名长度为4-10之间</span>
          <span v-else style='color:red'>{{usernameError.errorText}}</span>
        </div>
      </div>
      <div class="g-form-line">
        <span class="g-form-label">密码：</span>
        <div class="g-form-input">
          <input type="password"
          v-model="passwordModel" placeholder="请输入密码">
          <span v-if='passwordError.errorText==""'>密码长度6-12位，由数字、小写字母和大写字母组成，至少包含2种字符</span>
          <span v-else style='color:red'>{{passwordError.errorText}}</span>
        </div>
      </div>
      <div class="g-form-line">
        <span class="g-form-label">确认密码：</span>
        <div class="g-form-input">
          <input type="password"
          v-model="confirmPasswordModel" placeholder="请再次输入密码">
          <span style='color:red'>{{confirmPasswordError.errorText}}</span>
        </div>
      </div>
      <div class="g-form-line">
        <span class="g-form-label">手机号：</span>
        <div class="g-form-input">
          <input type="text"
          v-model="phonenumberModel" placeholder="请输入手机号">
          <span style='color:red'>{{phonenumberError.errorText}}</span>
        </div>
      </div>
      <div class="g-form-line">
        <div class="g-form-btn">
          <a class="button" @click='regIn'>注册</a>
        </div>
      </div>
      <p style='color:red'>{{ regError }}</p>
    </div>
  </div>
</template>

<script>
export default {

  data(){
    return {
      usernameModel:'',
      passwordModel:'',
      phonenumberModel:'',
      confirmPasswordModel:'',
      regError:''
    }
  },
  computed:{
    usernameError(){
      let errorText,status;
      if (/^[0-9a-zA-Z\u4E00-\u9FA5]{4,10}$/g.test(this.usernameModel)){
        errorText='可以使用',
        status=true
      }else if(this.usernameModel.length<4){
        errorText='名字太短',
        status=false
      }else if(this.usernameModel.length>10){
        errorText='名字太长',
        status=false
      }
      if(!this.usernameFlag){
        errorText='',
        this.usernameFlag=true
      }
      return {
        errorText,status
      }
    },
    passwordError(){
      let errorText,status;
      //验证密码正则
      let reg=/(?!^[0-9]{6,12}$)(?!^[a-z]{6,12}$)(?!^[A-Z]{6,12}$)^[0-9a-zA-Z]{6,12}$/g

      if(this.passwordModel.length<6){
        errorText='密码太短',
        status=false
      }else if(this.passwordModel.length>12){
        errorText='密码太长',
        status=false
      }else if(!reg.test(this.passwordModel)){
        errorText='必须包含两种以上字符',
        status=false
      }else{
        errorText='可以使用',
        status=true
      }
      if(!this.passwordFlag){
        errorText='',
        this.passwordFlag=true
      }
      return {
        errorText,status
      }
    },
    confirmPasswordError(){
      let errorText,status;
      if(this.confirmPasswordModel===this.passwordModel){
        errorText='密码正确',
        status=true
      }else{
        errorText='密码与上面不符',
        status=false
      }
      if(this.confirmPasswordModel.trim()===''){
        errorText='',
        status=false
      }
      return {
        errorText,status
      }

    },
    phonenumberError(){
      let errorText,status;
      let reg=/^1[0-9]{10}$/g;
      if(!reg.test(this.phonenumberModel)){
        errorText='错误的手机号码',
        status=false
      }else{
        errorText='',
        status=true
      }
      if(!this.phonenumberFlag){
        errorText='',
        this.phonenumberFlag=true
      }
      return{
        errorText,status
      }
    }
  },
  methods:{
    regIn(){
      if(this.usernameError.status&this.passwordError.status&this.confirmPasswordError.status&this.phonenumberError.status){
        this.$emit('reg-in',this.usernameModel);
        this.regError=''
      }
      else{
        console.log(1)
        this.regError='有错误的注册项'
      }
    }
  }
}
</script>

<style>

</style>
