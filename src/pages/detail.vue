<!-- 首页 -->
<template>
  <div class="detail-wrap">
    <div class="detail-left">
      <div class="detail-left-block">
        <h3>今日热卖</h3>
        <img :src="productIcon">
        <ul>
          <router-link active-class='on' v-for="(item,index) in productList"
           :key= "index" :to="{ path : item.path }" tag='li' exact>
              {{item.title }}
          <!-- <s class="arrow"></s> -->
          </router-link>
        </ul>
      </div>
      </div>
    <div   class="detail-right">
      <!-- <div class="slide"> -->
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      productList:[
        {
          title:"新品",
          path:'xinpin'
        },
        {
          title:"品牌库",
          path:"pinpai"
        },
        {
          title:"作品集",
          path:"zuopin"
        }],
        imgMap:{
          "/detail/xinpin":require('../assets/xinpin.jpg'),
          "/detail/pinpai":require('../assets/pinpai.jpg'),
          "/detail/zuopin":require('../assets/zuopin.jpg')
        }
    }
  },
  computed:{
      productIcon(){
        return this.imgMap[this.$route.path]
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

.detail-wrap{
  width:80%;
  margin:0px auto;
  padding-top: 30px;
  display:flex;
}
.detail-left{
  width:20%;
  float:left;
  background-color: #fff;
  opacity: 0.8;
  border:1px solid #ff5000;
}
.detail-left h3{
  color: #fff;
  cursor: pointer;
}
.detail-left-block{
  text-indent :20px;
  text-align: center;
  margin-bottom: 50px;
}
.detail-left-block img{
  cursor: pointer;
}
.detail-left li{
  text-align: left;
  position: relative;
  display: block;
  height: 40px;
  line-height: 40px;
  list-style: none;
  cursor: pointer;
  padding: 0px 0px 3px 0px;
}
.detail-left li a{
  text-decoration: none;
  color: #222;
  display: block;
}
.arrow{
  position: absolute;
  top:50%;
  margin-top: -5px;
  right:8%;
  display: inline-block;
  border-width: 5px;
  border-style: solid;
  border-color:transparent transparent transparent #ff5000;
}
h3{
  background-color:#ff5000;
  padding: 10px 0px;
  letter-spacing:2px;
  margin-bottom: 10px;
}
.detail-left li.active,
.detail-left li:hover,.router-link-exact-active {
  background: #ff5000;
  color: #fff;
}
.detail-right{
  width: 80%;
  margin-left:15px;
}
.slide{
  width: 100%;
  height: 400px;
  background-color:#fff;
}
.detail-board-list{
  width: 100%;
  height: 300px;
  margin-top:10px;
  border:1px solid #333;
}

</style>
