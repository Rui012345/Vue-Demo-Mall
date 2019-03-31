<template lang="html">
  <div class="xinpin-form">
    <div class="xinpin-form-content">
      <div class="content-title">
        <img src="../../assets/xinpin/zuopintitle.jpg" alt="作品集">
      </div>
      <div class="content-items">
            <div  v-for="item in XinPinProducts" class="item-product">
              <div class="item-pic">
                <router-link tag='a' :to="{ path: '/'+item.buysrc}">
                  <img :src="item.imgsrc" :alt="item.name">
                </router-link>
              </div>
              <div class="item-details">
                  <router-link active-class="itemtitle" tag='a' :to="{ path: '/'+item.buysrc}" >{{ item.name }}</router-link>
                <div class="item-attributes">
                  <div class="cprice-area">
                    <span class="symbol">￥</span>
                    <span class="c-price">{{item.cprice}}</span>
                  </div>
                  <div class="sprice-area">
                    <span class="symbol">￥</span>
                    <span class="s-price">{{item.sprice}}</span>
                  </div>
                  <div class="sale-area">
                    已售
                    <span class="sale-num">{{ item.salenum }}</span>
                    件
                  </div>
                </div>
              </div>

              <div class="item-rates">
                <a href="#">
                  评论(<span>{{ item.ratenum }}</span>)
                </a>
              </div>

            </div>
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
  height:360px;
}
.content-items .item-product{
 text-decoration: none;
 overflow: hidden;
 padding-bottom: 20px;
}
.item-pic img{
  border:1px solid #ddd;
}

/*item-details*/
.item-details {
  height: 50px;
  width: 240px;
  margin-bottom: 10px;
  font-size: 12px;
  color: #333;
}
.item-details a{
  color: #333;
  font-size: 14px;
  display: block;
  width: 220px;
  text-indent: 20px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: left;
}
.item-details .item-name{
  display: block;
  height: 32px;
  width: 160px;
  line-height: 32px;
  font-size: 14px;
  color:#ff5000;
  padding-left: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

}
.item-details .item-attributes{
  height:40px;
  line-height: 40px;
  padding-left: 20px;
  overflow: hidden;
}
.cprice-area,.sprice-area,.sale-area{
  float: left;
  margin-right: 18px;
  font-family: verdana,arial;
}
.cprice-area .c-price{
  color:#ff5000;
  font-weight: 700;
}
.sprice-area .s-price{
  color:#999;
  text-decoration: line-through;
}
.sale-area{
  white-space: nowrap;
}
.item-rates{
  margin-top: 10px;
  clear: both;
  height:30px;
  text-align: left;
  padding-left: 20px;

}
.item-rates a{
  font-size: 12px;
  color: #333;
}

/* .item-product:hover span{
  text-decoration: none;
  color:#ff5000;
} */


</style>
