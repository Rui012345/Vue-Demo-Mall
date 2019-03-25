<!-- 首页 -->
<template>
  <div class="index-wrap">
    <div class="index-left">
      <div class="index-left-block">
        <h3>全部商品</h3>
        <template v-for="product in productList">
          <h4>{{ product.title }}</h4>
            <ul>
              <li v-for="item in product.list">
                <a :href="item.url">{{ item.name }}</a>
                <span v-if="item.hot" class="hot-tag">hot</span>
              </li>
            </ul>
          <div class="hr"></div>
        </template>
      </div>
      <div class="index-left-block lastest-news">
        <h3>猜你喜欢</h3>
        <ul>
          <li v-for="like in likesList">
            <a :href="like.url" class="likeitem">{{ like.title }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div   class="index-right">
      <div class="slide">
        <!-- :slides="slides" -给slides传入什么，就是怎样的幻灯片，监听子组件onchange事件@onchange="doSomething"-->
        <SlideShow :slides="slides" :inv="slideSpeed" ></SlideShow>
      </div>
      <div class="index-board-list">
        <div class="index-board-item" v-for="(item,index) in boardList"
        :class="[{'line-last':index%2!==0},
        'index-board-'+item.id]">
          <div class="index-board-item-inner">
            <h4>{{ item.title }}</h4>
            <p>{{ item.description }}</p>
            <div class="index-board-button">
              <a href="" class="button">点击进入</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SlideShow from '../components/SlideShow.vue'
export default {
  components:{//引入子组件
    SlideShow
  },
  //组件创建完毕，生命周期created
  //组件创建完毕，生命周期promise,this.$http.post为promise对象，请求成功回调，请求失败的回调
  created:function(){
    this.$http.get('api/likesList')
    .then((res) => {//箭头函数，this为当前代码环境下的this,而不是执行环境的this
      this.likesList = res.body
    },(err) => {
      console.log("this is an error")
    })
  },
  // methods:{
  //   doSomething(index){
  //     //利用SlideShow子组件传来的参数，处理别的事情
  //     console.log(index);
  //   }
  // },
  data(){
    // ['女上装','裙装/套装','裤装','女鞋']，['男士外套','男式T恤','男士衬衫','男士裤装']
    return{
      slideSpeed:2000,
      slides:[
        {
          src:require('../assets/slide1.jpg'),
          title:"男人帮特色",
          href:'detail/ananly'
        },
        {
          src:require('../assets/slide2.jpg'),
          title:"女神养成计划",
          href:'detail/ananlyss'
        },
        {
          src:require('../assets/slide3.jpg'),
          title:"有腔调的品味",
          href:'detail/ananlyss'
        }
      ],
      boardList:[
      {
        title:"今日热卖",
        description:"时尚应该是种解脱，而不是束缚。",
        id:'hotproducts'
      },{
        title:"女神新衣",
        description:"优雅并不是耀眼夺目，而是被人铭记。优雅并不是耀眼夺目，而是被人铭记。优雅并不是耀眼夺目，而是被人铭记。",
        id:'lady'
      },{
        title:"男人帮",
        description:"人靠衣装，落难对社会有很少或者几乎没有影响力。",
        id:'gentleman'
      },{
        title:"有腔调",
        description:"至简才是王道。",
        id:'special'
      }
      ],
      likesList:'',////!!!!!!!!!!!!
      // likesList:[
      // {
      //   title:"针织衫",
      //   url:""
      // },
      // {
      //   title:"女式衬衫",
      //   url:"",
      // },
      // {
      //   title:"半身裙",
      //   url:""
      // }
      // ],
      productList:{
        woman:{
          title:"女装",
          list:[
          {
            name:'女上装',
            url:''
          },
          {
            name:'裙装/套装',
            url:'',
            hot:true
          },
          {
            name:'裤装',
            url:''
          },
          {
            name:'女鞋',
            url:''
          }
          ]
        },
        man:{
          title:"男装",
          last:true,
          list:[
          {
            name:'男士外套',
            url:''
          },
          {
            name:'男式T恤',
            url:''
          },
          {
            name:'男式衬衫',
            url:'',
            hot:true
          },
          {
            name:'男鞋',
            url:''
          }
          ]
        },
    }
  }
  }

}
</script>
<style scoped>
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

.index-wrap{
  width:80%;
  margin:0px auto;
  padding-top: 30px;
  display:flex;
}
.index-left{
  width:20%;
  background-color: #fff;
  opacity: 0.8;
  color:#fff;
  border:1px solid #ff5000;
}
.index-left-block{
  text-indent :20px;
}
.index-left ul{
  padding: 10px 0px 10px 20px;
  color:#666;
}
.index-left li{
  margin-bottom: 10px;
  list-style: none;
  cursor: pointer;
  padding: 3px 0px 3px 0px;
}
h4{
  color: #555;
}
h3{
  background-color:#ff5000;
  padding: 10px 0px;
  letter-spacing:2px;
  margin-bottom: 10px;
}
li a{
  text-decoration: none;
  color: #333;
}
.index-left li:hover{
  background-color:#ffe4dc;
}
.hr{
  border-bottom:1px solid #eee;
  margin-bottom: 10px;
}
.hr:nth-last-child(1){
  border:none;
  margin-bottom:0px;
}
.hot-tag{
  background: red;
  color: #fff;
  font-size:0.5em;
  vertical-align:super;
}
.likeitem{
  text-indent: 0px;
  display: inline-block;
  width:80%;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;

}

.index-right{
  width: 80%;
  margin-left:15px;
}
.slide{
  width: 100%;
  height: 400px;
  background-color:#fff;
}
.index-board-list{
  display: -webkit-flex;
  display: flex;
  flex-direction:row;
  flex-wrap: wrap;
  justify-content:space-between;
}
.index-board-hotproducts .index-board-item-inner{
  background:url('../assets/hotproducts.jpg') no-repeat;
}
.index-board-lady .index-board-item-inner{
  background:url('../assets/lady.jpg') no-repeat;
}
.index-board-gentleman .index-board-item-inner{
  background:url('../assets/gentleman.jpg') no-repeat ;
}
.index-board-special .index-board-item-inner{
  background:url('../assets/special.jpg') no-repeat;
}
.index-board-item{
  width:45%;
  margin-top: 20px;
  background-color:#fff;
  padding:20px;
  border:1px solid #ddd;
}
.index-board-item-inner{
  padding-left: 100px;
  padding-bottom: 20px;
  width: 70%;
}
.index-board-item-inner h4,p{
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-left: 20px;
  margin-top: 10px;
}
.line-last{
  margin-right: 0px;
}

.button{
  background-color:#ff5000;
  letter-spacing: 2px;
  float: right;
  text-indent:0;
  padding:5px 10px;
  text-decoration: none;
  color: #fff;
  margin-top:20px;
  margin-right: 10px;
  cursor: pointer;
  border-radius: 2px;
}
.button:hover{
  box-shadow: 2px 2px 3px #aaa;
}

</style>
