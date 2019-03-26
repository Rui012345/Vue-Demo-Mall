<template lang="html">
  <div class="wrap">
    <template v-for="product in Products">
          <div class="pinpai-form">
            <div class="pinpai-form-title">
              <span>{{ product.title }}</span>
            </div>
            <div class="pinpai-form-content">
                <div class="new-item" v-for="item in product.list">
                  <a class="item-intro" href="item.url">
                    <img  :src="item.introsrc" alt="">
                  </a>
                  <a class="item-logo" href="#">
                    <img  :src="item.logosrc">
                  </a>
                  <p class="p-intro">{{ item.introduction }}</p>
                  <p class="p-name">{{ item.name }}</p>
                </div>
            </div>
          </div>
    </template>
  </div>

</template>

<script>
export default {
  data(){
    return{
      Products:{
        woman:{
          title:"今日热卖 / 女装店铺",
          list:[
            {
              introsrc:require('../../assets/pinpai/pinpaiitem1.jpg'),
              logosrc:require('../../assets/pinpai/pinpaiitem1logo.jpg'),
              url:"",
              name:"Les Anonyme",
              introduction:"生活中的艺术"
            },
            {
              introsrc:require('../../assets/pinpai/pinpaiitem2.jpg'),
              logosrc:require('../../assets/pinpai/pinpaiitem2logo.jpg'),
              url:"",
              name:"anarosha",
              introduction:"打造温柔的轻奢美装"
            },
            {
              introsrc:require('../../assets/pinpai/pinpaiitem3.jpg'),
              logosrc:require('../../assets/pinpai/pinpaiitem3logo.jpg'),
              url:"",
              name:"DICIASSETTE",
              introduction:"忠于原创忠于设计"
            },
            {
              introsrc:require('../../assets/pinpai/pinpaiitem4.jpg'),
              logosrc:require('../../assets/pinpai/pinpaiitem4logo.jpg'),
              url:"",
              name:"Lynn Gong",
              introduction:"你的本质就是特质"
            },
            {
              introsrc:require('../../assets/pinpai/pinpaiitem5.jpg'),
              logosrc:require('../../assets/pinpai/pinpaiitem5logo.jpg'),
              url:"",
              name:"Tonyandtones",
              introduction:"定义新女性时代"
            },
            {
              introsrc:require('../../assets/pinpai/pinpaiitem6.jpg'),
              logosrc:require('../../assets/pinpai/pinpaiitem6logo.jpg'),
              url:"",
              name:"MoiLeRoi",
              introduction:"创造而非追随时尚"
            },
            {
              introsrc:require('../../assets/pinpai/pinpaiitem1.jpg'),
              logosrc:require('../../assets/pinpai/pinpaiitem1logo.jpg'),
              url:"",
              name:"Les Anonyme",
              introduction:"生活中的艺术"
            },
            {
              introsrc:require('../../assets/pinpai/pinpaiitem2.jpg'),
              logosrc:require('../../assets/pinpai/pinpaiitem2logo.jpg'),
              url:"",
              name:"anarosha",
              introduction:"打造温柔的轻奢美装"
            },
            {
              introsrc:require('../../assets/pinpai/pinpaiitem3.jpg'),
              logosrc:require('../../assets/pinpai/pinpaiitem3logo.jpg'),
              url:"",
              name:"DICIASSETTE",
              introduction:"忠于原创忠于设计"
            },
            {
              introsrc:require('../../assets/pinpai/pinpaiitem4.jpg'),
              logosrc:require('../../assets/pinpai/pinpaiitem4logo.jpg'),
              url:"",
              name:"Lynn Gong",
              introduction:"你的本质就是特质"
            },
            {
              introsrc:require('../../assets/pinpai/pinpaiitem5.jpg'),
              logosrc:require('../../assets/pinpai/pinpaiitem5logo.jpg'),
              url:"",
              name:"Tonyandtones",
              introduction:"定义新女性时代"
            },
            {
              introsrc:require('../../assets/pinpai/pinpaiitem6.jpg'),
              logosrc:require('../../assets/pinpai/pinpaiitem6logo.jpg'),
              url:"",
              name:"MoiLeRoi",
              introduction:"创造而非追随时尚"
            }

          ]

        },
        man:{
          title:"今日热卖 / 男装店铺",
          list:[
            {
              introsrc:require('../../assets/pinpai/pinpaiman1.jpg'),
              logosrc:require('../../assets/pinpai/pinpaiman1logo.jpg'),
              url:"",
              name:"Unawares",
              introduction:"摩登剪裁，简约时尚"
            },
            {
              introsrc:require('../../assets/pinpai/pinpaiman2.jpg'),
              logosrc:require('../../assets/pinpai/pinpaiman2logo.jpg'),
              url:"",
              name:"HIGHASH",
              introduction:"寻求设计感趣味和实穿"
            },
            {
              introsrc:require('../../assets/pinpai/pinpaiman3.jpg'),
              logosrc:require('../../assets/pinpai/pinpaiman3logo.jpg'),
              url:"",
              name:"MOSTWANTEDLAB",
              introduction:"坚持街头"
            }

          ]

        }
      }
    }

  }
}
</script>

<style lang="css" scoped>
/* 淘宝css初始化 */
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

.pinpai-form{
  height: auto;
}
.pinpai-form-title{
  height:60px;
  line-height:60px;
  padding-left:20px;
  color: #ff5000;
  background-color: #fff;
}
.pinpai-form-content{
  display: flex;
  display: -webkit-flex;
  display: flex;
  align-items: center;
  flex-direction:row;
  flex-wrap: wrap;
  justify-content: space-between;
}
.new-item{
  width: 32%;
  border:1px solid #ddd;
  text-align: center;
  margin-bottom: 20px;
  padding-bottom: 20px;
  background-color: #fff;
}
.new-item .item-intro,.item-logo{
  display: block;
}
.item-intro img{
  width: 100%;
  height: 200px;
}
.item-logo img{
  width: 80px;
  height: 40px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.new-item a{
  display: block;
}
.p-intro{
  font-size: 14px;
  font-weight: 700;
  color: #333;
}
.p-name{
  font-size: 12px;
  color: #999;
}






















</style>
