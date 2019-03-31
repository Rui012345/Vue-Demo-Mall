<template lang="html">
  <div class="xinpin-form">
    <div class="xinpin-form-content">
      <div class="content-title">
        <img src="../../assets/xinpin/xinpintitle.jpg" alt="新品">
      </div>
      <div class="content-items">
            <a :href="'/'+item.buysrc" v-for="item in XinPinProducts" class="item-product">
              <img :src="item.imgsrc" :alt="item.name">
              <span class="itemname">{{ item.name }}</span>
              <span>已售{{ item.salenum }}件</span>
              <span>￥{{ item.cprice }}</span>
              <img class="btn" src="../../assets/xinpin/buybtn.jpg" alt="立即购买">
            </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      XinPinProducts:[
        {
          name:"设计师原创品牌碎花无袖吊带不对称连衣裙",
          imgsrc:require("../../assets/xinpin/xinpinitem0.jpg"),
          buysrc:'product',
          cprice:89,
          sprice:299,
          salenum:999,
          ratenum:34445
        },
        {
          name:"独立设计可爱卡通圆形mini斜挎包袜",
          imgsrc:require("../../assets/xinpin/xinpinitem4.jpg"),
          buysrc:'product',
          cprice:89,
          sprice:299,
          salenum:999,
          ratenum:45355

        },
        {
          name:"原创气质范儿春秋小丝巾",
          imgsrc:require("../../assets/xinpin/xinpinitem3.jpg"),
          buysrc:'',
          cprice:89,
          sprice:299,
          salenum:999,
          ratenum:45355
        },
        {
          name:"独立设计可爱卡通圆形mini斜挎包袜",
          imgsrc:require("../../assets/xinpin/xinpinitem4.jpg"),
          buysrc:'',
          cprice:89,
          sprice:299,
          salenum:999,
          ratenum:45355
        },
        {
          name:"设计师原创品牌碎花无袖吊带不对称连衣裙",
          imgsrc:require("../../assets/xinpin/xinpinitem0.jpg"),
          buysrc:'',
          cprice:89,
          sprice:299,
          salenum:999,
          ratenum:8888
        },
        {
          name:"设计师原创品牌碎花无袖吊带不对称连衣裙",
          imgsrc:require("../../assets/xinpin/xinpinitem0.jpg"),
          buysrc:'product',
          cprice:89,
          sprice:299,
          salenum:999,
          ratenum:59406
        },
        {
          name:"独立设计可爱卡通圆形mini斜挎包袜",
          imgsrc:require("../../assets/xinpin/xinpinitem4.jpg"),
          buysrc:'',
          cprice:89,
          sprice:299,
          salenum:999,
          ratenum:45

        },
        {
          name:"设计师原创品牌碎花无袖吊带不对称连衣裙",
          imgsrc:require("../../assets/xinpin/xinpinitem0.jpg"),
          buysrc:'',
          cprice:89,
          sprice:299,
          salenum:999,
          ratenum:455
        },
        {
          name:"独立设计可爱卡通圆形mini斜挎包",
          imgsrc:require("../../assets/xinpin/xinpinitem4.jpg"),
          buysrc:'',
          cprice:89,
          sprice:299,
          salenum:999,
          ratenum:455
        },
        {
          name:"设计师原创品牌碎花无袖吊带不对称连衣裙",
          imgsrc:require("../../assets/xinpin/xinpinitem0.jpg"),
          buysrc:'',
          cprice:89,
          sprice:299,
          salenum:999,
          ratenum:888
        }
      ]
    }
  }
}
</script>

<style scoped>
body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, ol, li, pre, form, fieldset, legend, button,
  input, textarea, th, td { margin:0; padding:0; }
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


.xinpin-form-content{
  text-align: center;
  background-color: #fff;
}
.content-title{
  width: 100%;
}
.xinpin-form-content .content-items{
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;/*不换行*/
}
.item-product{
  display: block;
  width: 20%;
}

.content-items .item-product{
 text-decoration: none;
 overflow: hidden;
 padding-bottom: 20px;
}
.content-items .btn{
  max-width: 100px;
  max-height: 40px;
}

span{
  display: block;
  color:#555;
  font-size: 14px;
  margin-bottom: 10px;
}
.item-product:hover span{
  text-decoration: none;
  color:#ff5000;
}
.itemname{
  font-size: 16px;
  display: inline-block;
  width: 220px;
  white-space: nowrap;
  overflow: hidden;;
  text-overflow: ellipsis;
}


</style>
