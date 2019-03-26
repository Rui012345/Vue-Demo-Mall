<template lang="html">
  <div class="xinpin-form">
    <div class="xinpin-form-content">
      <div class="content-title">
        <img src="../../assets/xinpin/zuopintitle.jpg" alt="作品集">
      </div>
      <div class="content-items">
            <div :href="item.buysrc" v-for="item in XinPinProducts" class="item-product">
              <div class="item-pic">
                <img :src="item.imgsrc" :alt="item.name">
              </div>

              <div class="item-details">

                <div class="item-title">
                  <a class="item-name">{{ item.name }}</a>
                </div>

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
          name:"李希侃同款 黑眼睛 棉袜短袜",
          imgsrc:require("../../assets/xinpin/xinpinitem1.jpg"),
          buysrc:'https://item.taobao.com/item.htm?spm=a211er.10486418.884011.1.50071be1r6PWjW&id=549143565970&scm=1007.12144.81309.78914_0_0&pvid=82de9664-9b92-4898-812d-dcb078be6428&utparam=%7B%22x_hestia_source%22%3A%2278914%22%2C%22x_object_type%22%3A%22item%22%2C%22x_mt%22%3A8%2C%22x_src%22%3A%2278914%22%2C%22x_pos%22%3A1%2C%22x_pvid%22%3A%2282de9664-9b92-4898-812d-dcb078be6428%22%2C%22x_object_id%22%3A549143565970%7D',
          cprice:89,
          sprice:299,
          salenum:999,
          ratenum:34445
        },
        {
          name:"李希侃同款 黑眼睛 棉袜短袜",
          imgsrc:require("../../assets/xinpin/xinpinitem2.jpg"),
          buysrc:'https://item.taobao.com/item.htm?spm=a211er.10486418.884011.1.50071be1r6PWjW&id=549143565970&scm=1007.12144.81309.78914_0_0&pvid=82de9664-9b92-4898-812d-dcb078be6428&utparam=%7B%22x_hestia_source%22%3A%2278914%22%2C%22x_object_type%22%3A%22item%22%2C%22x_mt%22%3A8%2C%22x_src%22%3A%2278914%22%2C%22x_pos%22%3A1%2C%22x_pvid%22%3A%2282de9664-9b92-4898-812d-dcb078be6428%22%2C%22x_object_id%22%3A549143565970%7D',
          cprice:89,
          sprice:299,
          salenum:999,
          ratenum:45355

        },
        {
          name:"李希侃同款 黑眼睛 棉袜短袜",
          imgsrc:require("../../assets/xinpin/xinpinitem3.jpg"),
          buysrc:'https://item.taobao.com/item.htm?spm=a211er.10486418.884011.1.50071be1r6PWjW&id=549143565970&scm=1007.12144.81309.78914_0_0&pvid=82de9664-9b92-4898-812d-dcb078be6428&utparam=%7B%22x_hestia_source%22%3A%2278914%22%2C%22x_object_type%22%3A%22item%22%2C%22x_mt%22%3A8%2C%22x_src%22%3A%2278914%22%2C%22x_pos%22%3A1%2C%22x_pvid%22%3A%2282de9664-9b92-4898-812d-dcb078be6428%22%2C%22x_object_id%22%3A549143565970%7D',
          cprice:89,
          sprice:299,
          salenum:999,
          ratenum:45355
        },
        {
          name:"李希侃同款 黑眼睛 棉袜短袜",
          imgsrc:require("../../assets/xinpin/xinpinitem4.jpg"),
          buysrc:'',
          cprice:89,
          sprice:299,
          salenum:999,
          ratenum:45355
        },
        {
          name:"李希侃同款 黑眼睛 棉袜短袜",
          imgsrc:require("../../assets/xinpin/xinpinitem1.jpg"),
          buysrc:'',
          cprice:89,
          sprice:299,
          salenum:999,
          ratenum:8888
        },
        {
          name:"李希侃同款 黑眼睛 棉袜短袜",
          imgsrc:require("../../assets/xinpin/xinpinitem1.jpg"),
          buysrc:'https://item.taobao.com/item.htm?spm=a211er.10486418.884011.1.50071be1r6PWjW&id=549143565970&scm=1007.12144.81309.78914_0_0&pvid=82de9664-9b92-4898-812d-dcb078be6428&utparam=%7B%22x_hestia_source%22%3A%2278914%22%2C%22x_object_type%22%3A%22item%22%2C%22x_mt%22%3A8%2C%22x_src%22%3A%2278914%22%2C%22x_pos%22%3A1%2C%22x_pvid%22%3A%2282de9664-9b92-4898-812d-dcb078be6428%22%2C%22x_object_id%22%3A549143565970%7D',
          cprice:89,
          sprice:299,
          salenum:999,
          ratenum:59406
        },
        {
          name:"李希侃同款 黑眼睛 棉袜短袜",
          imgsrc:require("../../assets/xinpin/xinpinitem2.jpg"),
          buysrc:'https://item.taobao.com/item.htm?spm=a211er.10486418.884011.1.50071be1r6PWjW&id=549143565970&scm=1007.12144.81309.78914_0_0&pvid=82de9664-9b92-4898-812d-dcb078be6428&utparam=%7B%22x_hestia_source%22%3A%2278914%22%2C%22x_object_type%22%3A%22item%22%2C%22x_mt%22%3A8%2C%22x_src%22%3A%2278914%22%2C%22x_pos%22%3A1%2C%22x_pvid%22%3A%2282de9664-9b92-4898-812d-dcb078be6428%22%2C%22x_object_id%22%3A549143565970%7D',
          cprice:89,
          sprice:299,
          salenum:999,
          ratenum:45

        },
        {
          name:"李希侃同款 黑眼睛 棉袜短袜",
          imgsrc:require("../../assets/xinpin/xinpinitem3.jpg"),
          buysrc:'https://item.taobao.com/item.htm?spm=a211er.10486418.884011.1.50071be1r6PWjW&id=549143565970&scm=1007.12144.81309.78914_0_0&pvid=82de9664-9b92-4898-812d-dcb078be6428&utparam=%7B%22x_hestia_source%22%3A%2278914%22%2C%22x_object_type%22%3A%22item%22%2C%22x_mt%22%3A8%2C%22x_src%22%3A%2278914%22%2C%22x_pos%22%3A1%2C%22x_pvid%22%3A%2282de9664-9b92-4898-812d-dcb078be6428%22%2C%22x_object_id%22%3A549143565970%7D',
          cprice:89,
          sprice:299,
          salenum:999,
          ratenum:455
        },
        {
          name:"李希侃同款 黑眼睛 棉袜短袜",
          imgsrc:require("../../assets/xinpin/xinpinitem4.jpg"),
          buysrc:'',
          cprice:89,
          sprice:299,
          salenum:999,
          ratenum:455
        },
        {
          name:"李希侃同款 黑眼睛 棉袜短袜",
          imgsrc:require("../../assets/xinpin/xinpinitem1.jpg"),
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
  height: 20px;
  margin-bottom: 10px;
  font-size: 12px;
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
  padding-left: 40px;
  overflow: hidden;
}
/* .item-details span{
  display: inline-block;
  color:#666;
  font-size: 12px;
  margin-bottom: 10px;
} */
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

/*item-details*/

.item-rates{
  margin-top: 50px;
  clear: both;
  height:30px;
  text-align: left;
  padding-left: 40px;

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
