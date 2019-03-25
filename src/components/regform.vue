<!-- dialog的log子组件 -->
<!-- props:isshow -->
<template>
  <div class="reg-form">
    <div class="g-form">
      <div class="g-form-line">
        <span class="g-form-label">用户名：</span>
        <div class="g-form-input">
          <input type="text" v-model="usernameModel" placeholder="请输入用户名">
        </div>
        <span class="error">{{userError.errorText}}</span>
      </div>

      <div class="g-form-line">
        <span class="g-form-label">邮箱：</span>
        <div class="g-form-input">
          <input type="text"  v-model="emailModel" placeholder="请输入邮箱">
        </div>
        <span class="error">{{ emailError.errorText }}</span>
      </div>
      <div class="g-form-line">
        <span class="g-form-label">密码：</span>
        <div class="g-form-input">
          <input type="text"    v-model="passwordModel" placeholder="最少6位,包含字母数字">
        </div>
        <span class="error">{{pwdError.errorText}}</span>
      </div>
      <div class="g-form-line">
        <span class="g-form-label">重输密码：</span>
        <div class="g-form-input">
          <input type="text"    v-model="againpasswordModel" placeholder="请再次输入上面的密码">
        </div>
        <span class="error">{{pwdagainError.errorText}}</span>
      </div>
      <div class="g-form-btn">
        <a class="button" @click="onReg">注册</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    isshow:{
      type:Boolean,
      default:false
    }
  },
  computed:{

    userError(){
      let status,errorText
      //用户名正则，4到16位（字母，数字，下划线，减号）
      let uPattern = /^[a-zA-Z0-9_-]{4,16}$/;
      if(!uPattern.test(this.usernameModel)){
        status = false
        errorText = "请输入正确的用户名"
      }else{
        status = true
        errorText = " "
      }
        //    flagTest 检测是否为第一次进入,解决开始就验证报错
      if(!this.userTest){
        errorText = ''
        this.userTest = true
      }
      return{
        status,
        errorText
      }
    },
    emailError(){
      let status,errorText
      let emailPattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      if(!emailPattern.test(this.emailModel)){
        status = false
        errorText = "请输入正确的邮箱"
      }else{
        status = true
        errorText = " "
      }
      //   flagTest 检测是否为第一次进入,解决开始就验证报错(不在页面渲染，不需要data中声明)
      //初始未定义为undefined
      if(!this.emailTest){
        errorText = ''
        this.emailTest = true
      }
      return{
        status,
        errorText
      }

    },
    pwdError(){
      let status,errorText
       //密码强度正则，最少6位。
      let pwdPattern = /^\w{6,12}$/;
      if(!pwdPattern.test(this.passwordModel)){
        status = false
        errorText = "密码不是6-12位"
      }else{
        status = true
        errorText = " "
      }
      //    flagTest 检测是否为第一次进入,解决开始就验证报错(不在页面渲染，不需要data中声明)
      //初始未定义为undefined
      if(!this.pwdTest){
        errorText = ''
        this.pwdTest = true
      }
      return{
        status,
        errorText
      }
    },
    pwdagainError(){
      let status,errorText
      if(this.againpasswordModel == this.passwordModel){
        status = true
        errorText = ''
      }else{
        status = false
        errorText = "请保持与上面的密码一致 "
      }
      //    flagTest 检测是否为第一次进入,解决开始就验证报错(不在页面渲染，不需要data中声明)
      //初始未定义为undefined
      if(!this.pwdagainTest){
        errorText = ''
        this.pwdagainTest = true
      }
      return{
        status,
        errorText
      }
    }
  },
  data(){
    return {
      usernameModel:'',
      passwordModel:'',
      againpasswordModel:'',
      emailModel:'',
      errorText:''
    }
  },
  methods:{
    onReg(){
      if(!this.userError.status || !this.pwdagainError.status|| !this.pwdError.status|| !this.emailError.status){
        this.errorText = "部分选项未通过,请重新输入！"
      }else {
        this.errorText ="注册成功.......";
        this.$http.get('api/login')
        .then(
          (res)=>{
            this.$emit('has-reg',res.body)
          },(error)=>{
            console.log(error)

          }
        )

      }
    }
  }
}
</script>

<style scoped>

/* 淘宝CSS初始化 */
body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, ol, li, pre, form, fieldset, legend, button,
  input, textarea, th, td { margin:0; padding:0;}
  body, button, input, select, textarea { font:12px/1.5tahoma, arial, \5b8b\4f53; }
  h1, h2, h3, h4, h5, h6{ font-size:100%; }
  address, cite, dfn, em, var { font-style:normal; }
  code, kbd, pre, samp { font-family:couriernew, courier, monospace; }
  small{ font-size:12px; }
  ul, ol { list-style:none; }
  a { text-decoration:none; }
  a:hover { text-decoration:underline; }
  sup { vertical-align:text-top; }
  sub{ vertical-align:text-bottom; }
  legend { color:#000; }
  fieldset, img { border:0; }
  button, input, select, textarea { font-size:100%; }
  table { border-collapse:collapse; border-spacing:0; }

  .reg-form{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .g-form-line{
    width: 300px;
    white-space: nowrap;
    margin:20px 0px;
  }
  .g-form-label{
    height: 100%;
    width: 100px;
    display: inline-block;
  　 text-align: justify;
    -webkit-text-align:justify;
    -moz-text-align:justify;
    /* vertical-align:top; */
  }
.g-form-input{
  display:inline;
}
input[type="text"]{
  padding: 6px 10px;
}
.error{
  display: inline-block;
  margin-left: 10px;
  color: #ff5000;
}
.button{
    display: block;
    height: 40px;
    width: 326px;
    background-color:#ff5000;
    letter-spacing: 8px;
    line-height: 40px;
    color: #fff;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
  }
  a:hover{
    font-weight: bold;
    background-color: #333;
    text-decoration: none;
  }
</style>
