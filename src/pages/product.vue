<!-- 首页 -->
<template>
  <div class="product-wrap">
    <div class="product-content">
      <div class="product-buy">
        <div class="product-buy-pic">

          <div class="product-pic">
            <img :src="bigImg"  alt="商品图片">
          </div>
          <ul class="product-thumb">
            <li v-for="imgitem in productDetails.imgsrc" @mouseover="getIndex(imgitem.url)">
              <div class="">
                <a href="#">
                  <img :src="imgitem.url" alt="">
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div class="product-buy-options">
          <div class="buy-options-title">
            <span>{{ productDetails.title }}</span>
          </div>
          <div class="buy-options-prices buy-options-margin">
            <div class="sprice-area">
              <span class="options-title">原价：</span>
              <span class="symbol">￥</span>
              <span class="s-price">{{productDetails.sprice}}</span>
            </div>
            <div class="cprice-area">
              <span class="options-title">现价：</span>
              <span class="symbol symbol-c">￥</span>
              <span class="c-price">{{productDetails.cprice}}</span>
            </div>
          </div>
          <div class="buy-options-location buy-options-margin">
            <span class="options-title">配送：</span>
            <select class="" name="">
              <option value="陕西">陕西</option>
              <option value="山东">山东</option>
              <option value="江苏">江苏</option>
              <option value="上海">上海</option>
              <option value="陕西">陕西</option>
              <option value="山东">山东</option>
              <option value="江苏">江苏</option>
              <option value="上海">上海</option>
            </select>
          </div>
          <div class="buy-options-size buy-options-margin">
            <span class="options-title">尺寸：</span>
            <ul>
              <li v-for="sizeitem in productDetails.size" >{{sizeitem}}</li>
            </ul>
          </div>
          <div class="buy-options-size buy-options-margin">
            <span class="options-title">颜色：</span>
            <ul>
              <li v-for="coloritem in productDetails.color">{{coloritem}}</li>
            </ul>
          </div>
          <div class="buy-options-number buy-options-margin">
          </div>
          <div class="buy-options-btn buy-options-margin">
            <a href="#">立即购买</a>
          </div>
          <div class="buy-options-btn buy-options-margin btn-left">
            <a href="#">加入购物车</a>
          </div>
        </div>

      </div>
      <div class="product-details">
        <ul>
          <router-link active-class="selected" v-for="(item,index) in productdetailcontent" :key="index" :to="{ path: item.path }" tag='li' @click.native="showIndicator(index)">
            {{item.title}}
            <div :class="current==index ?'selectedindicator':''"></div>
          </router-link>
        </ul>
      </div>
      <div class="details-contents">
        <keep-alive>
          <router-view :productDetails="productDetails"></router-view>
        </keep-alive>
      </div>

      <div class="price-description">
        <h3> 价格说明</h3>
        <span>划线价格</span>
        <p>指商品的专柜价、吊牌价、正品零售价、厂商指导价或该商品的曾经展示过的销售价等，<strong>并非原价</strong>，仅供参考。</p>
        <span>未划线价格</span>
        <p>指商品的<strong>实时标价</strong>，不因表述的差异改变性质。具体成交价格根据商品参加活动，或会员使用优惠券、积分等发生变化，最终以订单结算页价格为准。</p>
        <p>商家详情页（含主图）以图片或文字形式标注的一口价、促销价、优惠价等价格可能是在使用优惠券、满减或特定优惠活动和时段等情形下的价格，具体请以结算页面的标价、优惠条件或活动规则为准。</p>
        <p>此说明仅当出现价格比较时有效，具体请参见《淘宝价格发布规范》。若商家单独对划线价格进行说明的，以商家的表述为准。</p>
      </div>

    </div>

  </div>
</template>

<script>
export default {

  data(){
    return{
      current:0,
      productDetails:{
          title:"VEECO ZHAO 18SS-VR84 设计师原创品牌碎花无袖吊带不对称连衣裙",
          path:"pinpai",
          sprice:3200,
          cprice:1920,
          size:["S","M","L","XL"],
          color:["红色","黄色","蓝色","米色"],
          imgsrc:[
          {
            index:1,
             url:require('../assets/product1.jpg')
           } ,
          { index:2,
            url:require('../assets/product.jpg')
          } ,
          { index:3,
            url:require('../assets/product4.jpg')
          } ,
          { index:4,
            url:require('../assets/product.jpg')
          }
        ],
        detailimg:[
          {
            index:1,
             url:require('../assets/product.jpg')
           } ,
          { index:2,
            url:require('../assets/product1.jpg')
          } ,
          { index:3,
            url:require('../assets/product2.jpg')
          } ,
          { index:4,
            url:require('../assets/product3.jpg')
          },
          { index:5,
            url:require('../assets/product4.jpg')
          },
          { index:6,
            url:require('../assets/product5.jpg')
          }

        ],

        details:[
          {
            name:"组合形式",
            intro:"单件"
          },
          {
            name:"裙长",
            intro:"中长裙"
          },
          {
            name:"款式",
            intro:"吊带"
          },
          {
            name:"袖长",
            intro:"无袖"
          },
          {
            name:"图案",
            intro:"碎花"
          },
          {
            name:"材质",
            intro:"锦纶"
          },
          {
            name:"适用年龄",
            intro:"25-29岁"
          },
          {
            name:"品牌",
            intro:"VEECO ZHAO"
          }
        ]

        },
        bigImg:require('../assets/product1.jpg'),//大图默认显示第一张
        imgMap:{
          "/detail/pinpai":require('../assets/pinpai.jpg'),
          "/detail/zuopin":require('../assets/zuopin.jpg'),
          "/detail/xinpin":require('../assets/xinpin.jpg'),
        },
        productdetailcontent:[
          {
            title:"商品详情",
            path:"productdetails"
          },
          {
            title:"累计评价",
            path:"evaluations"
          },
          {
            title:"专项服务",
            path:'services'
          }],
    }
  },
  computed:{
      productIcon(){
        console.log(this.$route.path)
        return this.imgMap[this.$route.path]
      }
    },
  methods:{
      getIndex(imgurl){
        this.bigImg = imgurl;
        console.log(imgurl);
      },
      showIndicator(index){
        console.log("this.current");
        this.current = index;
        console.log(this.current);
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

.product-wrap{
  padding-top: 30px;
  background-color: #fff;

  /* 下面两行是为了消除父级背景色的影响添加的 */
  margin-bottom:-110px;
  /* 外下边距为了消除app-content的margin-bottom（100）+本页面p的margin （10）*/
  padding-bottom:100px;
}
.product-content{
  width:50%;
  margin:0px auto;
}
.product-buy{
  height: 500px;
  border:1px solid #E8E8E8;
  padding-bottom: 20px;
}
.product-buy-pic{
  /* display: inline-block;
  vertical-align: middle; */
  float: left;
  margin:30px 0px 0px 20px;
}
.product-pic{
  margin-bottom: 10px;
  padding-left: 10px;
}
.product-pic img{
  max-width: 400px;
  max-height:400px;

}

.product-buy-options{
  width: 50%;
  float: right;
  padding-top: 30px;
  margin-right: 30px;
}
.buy-options-margin{
  margin-top: 30px;
  font-size: 14px;
  text-indent: 20px;
}
.buy-options-margin li{
    text-indent: 0px;
}

.options-title{
  color: #555;
}
.buy-options-title{
  font-size: 20px;
  width:450px;
  overflow: hidden;
  white-space:nowrap;
  text-overflow: ellipsis;
  color: #3c3c3c;
  font-weight: 700;
  min-height: 24px;
  line-height: 24px;
}
.buy-options-prices{
  background-color: #FFF2E8;
  padding:10px 0px 10px 0px;

}
.cprice-area .c-price,.symbol-c{
  color:#ff5000;
  font-weight: 700;
  font-size: 30px;
}

.sprice-area .s-price{
  color:#999;
  text-decoration: line-through;
}
.buy-options-size ul{
  white-space:nowrap;
  display: inline-block;
}
.buy-options-size ul li{
  display: inline-block;
  text-align: center;
  width:80px;
  height: 26px;
  line-height: 26px;
  margin-right: 10px;
  border:1px solid #aaa;
}
.buy-options-size ul li:hover{
  border:1px solid #f50000;
  cursor: pointer;
}
.buy-options-btn{
  height: 40px;
  line-height: 40px;
  width:180px;
  text-align: center;
  margin-left: 50px;
  background-color: #f55000;
  border-radius: 3px;
  display:inline-block;
  margin-top:10px;
  text-indent: 0px;
}
.buy-options-btn a{
    text-decoration: none;
    color: #fff;
}
.btn-left{
    margin-left: 10px;

}
.product-buy-pic .product-thumb{
  margin-left: 10px;
}
.product-buy-pic .product-thumb li {
  display: inline;
  float: left;
  margin-right: 9px;
  width: 50px;
  height: 50px;
}
.product-buy-pic .product-thumb li img {
    max-width: 50px;
    max-height: 50px;
}
.product-buy-pic .product-thumb li:hover{
  border:1px solid #f50000;
  cursor: pointer;
}

.product-details{
  background-color: #f6f6f6;
  margin-top:50px;
  height:40px;
  line-height:40px;
  border-left:1px solid #e5e5e5;
  border-top:1px solid #e5e5e5;
  border-right:1px solid #e5e5e5;
  font-size: 14px;
}

/* router-link的active-class类selected */
.selected{
  background-color: #fff;
}
.product-details > li{
  text-align: center;
}
.product-details ul li{
  display: inline;
  float: left;
  height:40px;
  width: 100px;
  text-align: center;
  line-height: 40px;
  position: relative;
  border-right: 2px solid #e5e5e5;
  cursor: pointer;
}
.product-details ul li a{
  color: #222;
}
.product-details ul li a:hover{
  text-decoration: none;
}
.selectedindicator{
  position: absolute;
  top:-1px;
  height: 2px;
  background-color: #f55000;
  overflow: hidden;
  width: 100% !important;
}
.product-details-content{
  margin-top: 50px;
}
.details-contents{
  margin-bottom:100px;
  border:1px solid #E8E8E8;
  border-top:none;
}
.price-description{
  clear: both;
  margin-top:10px;
}
.price-description h3{
  border-bottom: 1px solid #eee;
  margin-bottom: 20px;
}
.price-description span{
  font-size: 12px;
  color: #f55000;
}
.price-description p{
  font-size: 12px;
  color: #333;
  margin:10px auto;
}

</style>
