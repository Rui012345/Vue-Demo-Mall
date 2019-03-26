<!-- 布局 -->
<template>
  <div>
    <div class="app-header">
      <div class="app-header-innner">
        <img src="../assets/logo.png">
        <div class="head-nav">
          <ul class="nav-list">
            <li>{{ username }}</li>
            <li v-if="username === ''" @click="logClick">登录</li>
            <li class="nav-pile">|</li>
            <li v-if="username === ''" @click="regClick">注册</li>
            <li v-if="username !== ''" @click="exitClick">退出</li>
            <li class="nav-pile">|</li>
            <li @click="aboutClick">关于</li>
          </ul>
      </div>
      </div>
    </div>

    <div class="app-search">
    </div>
    <div class="app-content">
      <keep-alive></keep-alive>
      <router-view></router-view>
    </div>
    <div class="app-footer">
      <p>Vue Demo</p>
      <p>@ 2019 ruig01@163.com</p>
    </div>
    <my-dialog :isshow="isShowAboutDialog" @onclose="closeDialog('isShowAboutDialog')">
    <p>vue-mall购物商城是专业从事各类商品的电子商务平台，网站以经营中高档品牌商品为主，致力于为消费者提供高质量的商品以及提供专业的经营和管理团队均为从事零售批发多年的专业人才，一方面，良好的专业素养保障了产品的品质；另一方面，广阔的人脉资源保证了可以出厂价拿货，同时这也极大保障了货源的稳定。以诚信经营为理念，以顾客至上为宗旨，在保障为消费者提供高品质产品的同时，灵活的支付系统，高效的物流系统，都为更好的服务提供了强力支持。 在未来，将在电子商务领域为您带来更优的产品，更好的服务！</p>
    </my-dialog>

    <my-dialog :isshow="isShowLogDialog" @onclose="closeDialog('isShowLogDialog')">
    <log-form @has-log = "onSuccessLog"></log-form>
    </my-dialog>

    <my-dialog :isshow="isShowRegDialog" @onclose="closeDialog('isShowRegDialog')">
    <reg-form @has-reg = "onSuccessReg"></reg-form>
    </my-dialog>
  </div>
</template>

<script>
import Dialog from "./dialog"
import LogForm from './logform'
import RegForm from './regform'
export default {
  components:{
    MyDialog:Dialog,
    LogForm,
    RegForm
  },
  data(){
    return{
      isShowAboutDialog:false,
      isShowLogDialog:false,
      isShowRegDialog:false,
      username:''
    }
  },
  methods:{
    // 三个弹窗
    aboutClick(){
      this.isShowAboutDialog = true
    },
    logClick(){
      this.isShowLogDialog = true
    },
    regClick(){
      this.isShowRegDialog = true
    },
    exitClick(){
      this.username= ''
    },


    closeDialog(attr){
      this[attr] = false

    },
    onSuccessLog(logindata){//接受子组件的数据，渲染到页面
      this.username = logindata.username
      this.closeDialog('isShowLogDialog')
    },
    onSuccessReg(regdata){
      this.username = regdata.username
      this.closeDialog('isShowRegDialog')
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

.app-header{
  background: #eee;
  color: #333;
  height: 40px;
  line-height: 40px;
  width: 100%;
}
.app-header-innner{
  width: 90%;
  margin: 0 auto;
}
.app-header-innner img{
  width: 30px;
  float: left;
  margin-top: 5px;
}
.head-nav{
  float: right;
}
.head-nav ul{
  overflow: hidden;
}
.head-nav li{
  float: left;
  cursor: pointer;
}
.head-nav li:hover{
  color: #ff5000;
}
.nav-pile{
  padding:0 10px;
}
.app-search{
  background-color: #fff;
  height:90px;
  background: url(../assets/search.jpg) no-repeat;

}
.app-content{
  margin-top:0px;
  padding-bottom:100px;
  height: auto;
  background: #eee;
}
.app-footer{
  height: 60px;
  background:#313131;
  text-align: center;
  padding-top: 50px;
  color: #fff;
}
</style>
