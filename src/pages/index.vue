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
            <a :href="like.url">{{ like.title }}</a>
            <span v-if="like.hot" class="hot-tag">hot</span>
          </li>
        </ul>
      </div>
    </div>
    <div   class="index-right">
      <div class="slide">
        <SlideShow :slides="slides"></SlideShow>
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
  components:{
    SlideShow
  },
  //组件创建完毕，生命周期created
  //组件创建完毕，生命周期promise,this.$http.post为promise对象，请求成功回调，请求失败的回调
  // created:function(){
  //   this.$http.post('getList',{userId:13}).then(
  //     function(data){
  //       console.log(data)
  //   },function(err){
  //       console.log(err)
  //
  //   })
  // },

  data(){
    // ['女上装','裙装/套装','裤装','女鞋']，['男士外套','男式T恤','男士衬衫','男士裤装']
    return{
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
      likesList:[
      {
        title:"针织衫",
        url:""
      },
      {
        title:"女式衬衫",
        url:"",
        hot:true
      },
      {
        title:"半身裙",
        url:""
      },

      ],
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
*{
  font: 14px/1.5 tahoma,arial,"Hiragino Sans GB",宋体,sans-serif;
}
.index-wrap{
  width:80%;
  margin:0px auto;
  padding-top: 30px;
  display:flex;
}
.index-left{
  width:20%;
  font-weight: bold;
  background-color: #000;
  opacity: 0.82;
  color:#fff;
}
.index-left-block{
  text-indent :20px;

}
.index-left ul{
  padding-left:20px;
}
.index-left li{
  margin-bottom: 5px;
  list-style: none;
  cursor: pointer;
}
h3{
  background-color:#1fdd88;
  padding: 5px 0px;
  letter-spacing:2px;
  font-weight :bold;
}
h4{
   font-weight :bold;
}
.index-left-block li a{
  text-decoration: none;
  color: #fff;
}
.index-left li:hover{
  background-color:#1fdd88;
  font-size:1.2em;
}
.hr{
  border-bottom:1px solid #aaa;
}
.hot-tag{
  background: red;
  color: #fff;
  font-size:0.5em;
  vertical-align:super;
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
}
.line-last{
  margin-right: 0px;
}

.button{
  background-color:#1fdd88;
  letter-spacing: 2px;
  float: right;
  text-indent: 0;
  padding:5px 10px;
  text-decoration: none;
  color: #fff;
  margin-right: 10px;
  cursor: pointer;
  border-radius: 2px;
}
.button:hover{
  box-shadow: 2px 2px 3px #aaa;
}

</style>
