<template lang="html">
  <div class="xinpin-form">
    <div class="xinpin-form-content">
      <div class="content-title">
        <img src="../../assets/xinpin/xinpintitle.jpg" alt="新品">
      </div>
      <div class="content-items">
            <a :href="item.buysrc" v-for="item in XinPinProducts" class="item-product">
              <img :src="item.imgsrc" :alt="item.name">
              <span>{{ item.name }}</span>
              <span>已售{{ item.num }}件</span>
              <span>￥{{ item.price }}</span>
              <img src="../../assets/xinpin/buybtn.jpg" alt="立即购买">
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
          name:"李希侃同款 黑眼睛 棉袜短袜",
          imgsrc:require("../../assets/xinpin/xinpinitem1.jpg"),
          buysrc:'https://item.taobao.com/item.htm?spm=a211er.10486418.884011.1.50071be1r6PWjW&id=549143565970&scm=1007.12144.81309.78914_0_0&pvid=82de9664-9b92-4898-812d-dcb078be6428&utparam=%7B%22x_hestia_source%22%3A%2278914%22%2C%22x_object_type%22%3A%22item%22%2C%22x_mt%22%3A8%2C%22x_src%22%3A%2278914%22%2C%22x_pos%22%3A1%2C%22x_pvid%22%3A%2282de9664-9b92-4898-812d-dcb078be6428%22%2C%22x_object_id%22%3A549143565970%7D',
          num:90,
          price:299,
        },
        {
          name:"李希侃同款 黑眼睛 棉袜短袜",
          imgsrc:require("../../assets/xinpin/xinpinitem2.jpg"),
          buysrc:'https://item.taobao.com/item.htm?spm=a211er.10486418.884011.1.50071be1r6PWjW&id=549143565970&scm=1007.12144.81309.78914_0_0&pvid=82de9664-9b92-4898-812d-dcb078be6428&utparam=%7B%22x_hestia_source%22%3A%2278914%22%2C%22x_object_type%22%3A%22item%22%2C%22x_mt%22%3A8%2C%22x_src%22%3A%2278914%22%2C%22x_pos%22%3A1%2C%22x_pvid%22%3A%2282de9664-9b92-4898-812d-dcb078be6428%22%2C%22x_object_id%22%3A549143565970%7D',
          num:900,
          price:299,

        },
        {
          name:"李希侃同款 黑眼睛 棉袜短袜",
          imgsrc:require("../../assets/xinpin/xinpinitem3.jpg"),
          buysrc:'https://item.taobao.com/item.htm?spm=a211er.10486418.884011.1.50071be1r6PWjW&id=549143565970&scm=1007.12144.81309.78914_0_0&pvid=82de9664-9b92-4898-812d-dcb078be6428&utparam=%7B%22x_hestia_source%22%3A%2278914%22%2C%22x_object_type%22%3A%22item%22%2C%22x_mt%22%3A8%2C%22x_src%22%3A%2278914%22%2C%22x_pos%22%3A1%2C%22x_pvid%22%3A%2282de9664-9b92-4898-812d-dcb078be6428%22%2C%22x_object_id%22%3A549143565970%7D',
          num:9000,
          price:299,
        },
        {
          name:"李希侃同款 黑眼睛 棉袜短袜",
          imgsrc:require("../../assets/xinpin/xinpinitem4.jpg"),
          buysrc:'',
          num:450,
          price:299,
        },
        {
          name:"李希侃同款 黑眼睛 棉袜短袜",
          imgsrc:require("../../assets/xinpin/xinpinitem1.jpg"),
          buysrc:'',
          num:880,
          price:899,
        },
        {
          name:"李希侃同款 黑眼睛 棉袜短袜",
          imgsrc:require("../../assets/xinpin/xinpinitem1.jpg"),
          buysrc:'https://item.taobao.com/item.htm?spm=a211er.10486418.884011.1.50071be1r6PWjW&id=549143565970&scm=1007.12144.81309.78914_0_0&pvid=82de9664-9b92-4898-812d-dcb078be6428&utparam=%7B%22x_hestia_source%22%3A%2278914%22%2C%22x_object_type%22%3A%22item%22%2C%22x_mt%22%3A8%2C%22x_src%22%3A%2278914%22%2C%22x_pos%22%3A1%2C%22x_pvid%22%3A%2282de9664-9b92-4898-812d-dcb078be6428%22%2C%22x_object_id%22%3A549143565970%7D',
          num:9000,
          price:299,
        },
        {
          name:"李希侃同款 黑眼睛 棉袜短袜",
          imgsrc:require("../../assets/xinpin/xinpinitem2.jpg"),
          buysrc:'https://item.taobao.com/item.htm?spm=a211er.10486418.884011.1.50071be1r6PWjW&id=549143565970&scm=1007.12144.81309.78914_0_0&pvid=82de9664-9b92-4898-812d-dcb078be6428&utparam=%7B%22x_hestia_source%22%3A%2278914%22%2C%22x_object_type%22%3A%22item%22%2C%22x_mt%22%3A8%2C%22x_src%22%3A%2278914%22%2C%22x_pos%22%3A1%2C%22x_pvid%22%3A%2282de9664-9b92-4898-812d-dcb078be6428%22%2C%22x_object_id%22%3A549143565970%7D',
          num:9000,
          price:299,

        },
        {
          name:"李希侃同款 黑眼睛 棉袜短袜",
          imgsrc:require("../../assets/xinpin/xinpinitem3.jpg"),
          buysrc:'https://item.taobao.com/item.htm?spm=a211er.10486418.884011.1.50071be1r6PWjW&id=549143565970&scm=1007.12144.81309.78914_0_0&pvid=82de9664-9b92-4898-812d-dcb078be6428&utparam=%7B%22x_hestia_source%22%3A%2278914%22%2C%22x_object_type%22%3A%22item%22%2C%22x_mt%22%3A8%2C%22x_src%22%3A%2278914%22%2C%22x_pos%22%3A1%2C%22x_pvid%22%3A%2282de9664-9b92-4898-812d-dcb078be6428%22%2C%22x_object_id%22%3A549143565970%7D',
          num:9000,
          price:299,
        },
        {
          name:"李希侃同款 黑眼睛 棉袜短袜",
          imgsrc:require("../../assets/xinpin/xinpinitem4.jpg"),
          buysrc:'',
          num:9000,
          price:299,
        },
        {
          name:"李希侃同款 黑眼睛 棉袜短袜",
          imgsrc:require("../../assets/xinpin/xinpinitem1.jpg"),
          buysrc:'',
          num:9000,
          price:299,
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


</style>
