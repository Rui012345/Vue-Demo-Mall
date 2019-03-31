<!-- 首页 -->
<template>
  <div class="details">
    <div class="details-text">
      <ul>
        <li v-for="item in productDetails.details" :title="item.name">
          {{item.name}} : {{item.intro}}
        </li>
      </ul>

    </div>
    <div class="details-img">
      <img v-for="item in productDetails.detailimg" :src="item.url" alt="宝贝详情图片">
    </div>
  </div>
</template>

<script>
export default {
  props:{
    productDetails:{
      type:Object,
      default:{}
    }
  },

  data(){
    return{
      msg:"hello pdetails",
    }
  }

}
</script>
<style scoped>

/* 淘宝CSS初始化 */
body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, ol, li, pre, form, fieldset, legend, button,
  input, textarea, th, td { margin:0; padding:0;}
  body, button, input, select, textarea { font:12px/1.5 tahoma,arial,'Hiragino Sans GB','\5b8b\4f53',sans-serif;}
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
.details{
  padding-top: 10px;
  background-color: #fff;
}
.details-text{
  font-size: 14px;
  color: #333;
  padding-top:20px;
  text-indent: 20px;
}
.details-text ul li{
  display: inline;
  float: left;
  width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-bottom: 10px;
}
.details-img{
  padding-top: 40px;
  text-align: center;
}
.details-img img{
  max-width: 1000px;
  max-height: 1000px;

}


</style>
