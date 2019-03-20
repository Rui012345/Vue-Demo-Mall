<!-- 布局 -->
<template>
  <div class="slide-show">
    <div class="slide-img" v-for="item in slides">
      <a href="" >
        <img :src="item.src" alt="item.title">
      </a>
      <h3>{{ item.title }}</h3>
    </div>

    <ul class="slide-page">
      <li>&lt;</li>
      <li>
        <a href="">1</a>
        <a href="">2</a>
        <a href="">3</a>
      </li>
      <li>&gt;</li>
    </ul>
  </div>
</template>
<script>
export default {
  // props:子组件接受的什么属性
  props:{
    slides:{
      type:Array,
      default:[]//初始值为空
    }
  },
  data(){
    return{
      msg:"SlideShow"
    }
  },
  mounted(){
    console.log(this.slides)
  }
}
</script>
<style scoped>

.slide-show{
  height: 414px;
  width: 1200px;
  position: relative;
  font: 12px/1.5 tahoma,arial,"Hiragino Sans GB",宋体,sans-serif;

}
.slide-show h3{
  width: 100%;
  position: absolute;
  color: #fff;
  background-color: #000;
  opacity: 0.7;
  bottom: 0px;
  padding: 10px 0px;
  text-indent: 20px;
  font-weight: 500;
}
.slide-img img{
  width: 1200px;
  position: absolute;
  top: 0;
}
.slide-page{
  right: 15px;
  bottom: 0px;
  position: absolute;

}
.slide-page li{
  list-style: none;
  float: left;
  display: inline-block;
  padding: 0 10px;
  cursor: pointer;
  color: #fff;
  font-size: 14px;
  height: 32px;
}
.slide-page li a{

  display: block;
  float:left;
  margin-right: 19px;
  color: #fff;
  text-decoration: none;
}

.slide-page li  a:nth-of-type(3){
  /* 最后一个a的margin设为0,避免溢出 */
  margin-right: 0px;
}
.slide-page li:hover{
  color: #1fdd88;
}
.slide-page a:hover{
  color: #1fdd88;
}
</style>
