<!-- header弹窗组件 -->
<!-- props:isshow -->
<template>
  <div>
    <div class="dialog-wrap" >
      <div class="dialog-cover" v-if="isshow" @click="closeMyDialog">
      </div>
      <transition name="dropdialog">
        <div class="dialog-content" v-if="isshow">
          <p class="dialog-close" @click="closeMyDialog">X</p>
          <slot></slot>
        </div>
      </transition>

    </div>
  </div>
</template>

<script>
export default {
  props:{
    isshow:{
      type:Boolean,
      default:false
    }
  },
  data(){
    return{


    }
  },
  methods:{
    closeMyDialog(){
      this.$emit('onclose')
    }
  }

}
</script>

<style scoped>

/* 淘宝CSS初始化 */
body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, ol, li, pre, form, fieldset, legend, button,
  input, textarea, th, td { margin:0; padding:0;}
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

.dropdialog-enter-active{
  transition: all .3s;
}
.dropdialog-enter{
  transform: translateY(-600px);
}
.dropdialog-leave-active{
    transition: all .2s;
    transform: translateY(-600px);
}

.dialog-wrap{
  position: fixed;
  width: 100%;
  height: 100%;
}
.dialog-cover{
  background: #333;
  opacity: .5;
  position: fixed;
  z-index: 4;
  top: 0;
  left: 0;
  width:100%;
  height:100%;
}
.dialog-content{
  width: 40%;
  position: fixed;
  max-height: 50%;
  overflow: auto;
  opacity: 1;
  background-color: #fafafa;
  top:25%;
  left:30%;
  z-index:20;
  border: 1px solid #ff5000;
  padding: 2%;
  line-height: 2;
}
.dialog-close{
  padding: 10px 10px;
  position: absolute;
  right:15px;
  top:5px;
  cursor: pointer;
}
</style>
