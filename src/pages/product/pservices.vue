<!-- 首页 -->
<template>
  <div class="details">
    <h4>~~~~~~~~~~~~~~~~~~卖家承诺以下服务~~~~~~~~~~~~~~~~~~~~</h4>
    <div class="services">
      <ul>
        <li>
          <img src="../../assets/service1.png" alt="订单险">
          <div class="services-text">
            <span>订单险</span>
            <p>卖家已为该商品投保订单险；您购买该商品每笔交易的售后将由保险公司全程担保赔付</p>
          </div>
        </li>
        <li>
          <img src="../../assets/service2.png" alt="消费者保障服务">
          <div class="services-text">
            <span>消费者保障服务</span>
            <p>该卖家已缴纳 1000.0 元保证金。</p>
            <p>在确认收货 15 天内，如有商品质量问题、描述不符或未收到货等，您有权申请退款或退货，来回邮费由卖家承担。</p>
          </div>
        </li>
      </ul>
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
  padding: 40px 0px 40px 20px;
  background-color: #fff;
  text-align: center;
}
.details  h4{
  color: #888;
  margin-bottom: 30px;
}

.services ul li{
  display: block;
  margin-bottom: 30px;
  font-size: 14px;
}
.services img{
  float: left;
}
.services-text{
  display: block;
  margin-left: 60px;
  text-align: left;
}
.services-text span{
  font-size: 18px;
}
.services-text p{
  margin-top: 10px;
  color: #686868;
}



</style>
