<!-- 布局 -->
<template>
  <div>
    <div class="app-header">
      <div class="app-header-innner">
        <img src="../assets/logo.png">
        <div class="head-nav">
          <ul class="nav-list">
            <li>登录</li>
            <li class="nav-pile">|</li>
            <li>注册</li>
            <li class="nav-pile">|</li>
            <li>关于</li>
          </ul>
      </div>
      </div>

    </div>
    <div class="app-content">
      <keep-alive></keep-alive>
      <router-view></router-view>
    </div>
    <div class="app-footer">
      <p>Vue Demo</p>
      <p>@ 2019 ruig01@163.com</p>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      msg:"hello"
    }
  }

}
</script>
<style scoped>
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
blockquote, body, button, dd, dl, dt, fieldset, form, h1, h2, h3, h4, h5, h6, hr, input, legend, li, ol, p, pre, td, textarea, th, ul {
    margin: 0;
    padding: 0;
}
body, button, input, select, textarea {
    font: 14px/1.5 tahoma,arial,"Hiragino Sans GB",宋体,sans-serif;
}

.app-header{
  background: #313131;
  color: #b2b2b2;
  height: 90px;
  line-height: 90px;
  width: 100%;
}
.app-header-innner{
  width: 90%;
  margin: 0 auto;
}
.app-header-innner img{
  width: 60px;
  float: left;
  margin-top: 15px;
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
  list-style: none;
}
.nav-pile{
  padding:0 10px;
}
.app-content{
  margin-top:0px;
  height: 1000px;
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
