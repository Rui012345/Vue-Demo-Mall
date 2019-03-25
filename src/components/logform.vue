<!-- dialog的log子组件 -->
<!-- props:isshow -->
<template>
  <div class="login-form">
    <div class="g-form">

      <div class="g-form-line">
        <span class="g-form-label">用户名：</span>
        <div class="g-form-input">
          <input type="text" v-model="usernameModel" placeholder="由4-16位字母、数字、字符组合">
        </div>
        <span class="error">{{userError.errorText}}</span>
      </div>
      <div class="g-form-line">
        <span class="g-form-label">密码：</span>
        <div class="g-form-input">
          <input type="text"    v-model="passwordModel" placeholder="最少6位,包含字母数字">
        </div>
        <span class="error">{{pwdError.errorText}}</span>
      </div>

      <div class="g-form-btn">
        <a class="button" href="#" @click="onLogin">登录</a>
      </div>
      <span class="error">{{ errorText }}</span>


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

    }
  },
  data(){
    return {
      usernameModel:'',
      passwordModel:'',
      errorText:''
    }
  },
  methods:{

    onLogin(){
      if(!this.userError.status || !this.pwdError.status){
        this.errorText = "部分选项未通过,请重新输入！"
      }else {
        this.errorText ="login........";
        //ajax登录
        this.$http.get('api/login')
        .then((res) => {//正确的回调,res.data为对象（包含username and userId）
          this.$emit('has-log', res.body)
        },(error) => {//错误的回调
          console.log(error)
          })
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

.login-form{
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
  width: 60px;
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
    width: 286px;
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
