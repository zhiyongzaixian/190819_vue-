<template>
  <div id="appContainer">
    <h1>App 组件</h1>

    <hr>
    <!-- 原生事件 -->
    <button @click="handleClick">测试按钮</button>

    <br>
    <br>
    <p>-----   双向数据绑定 v-mode实现  -------------</p>
    <input type="text" v-model="msg">
    <p>{{msg}}</p>
    <br>
    <br>
    <p>-----   不使用v-mode实现双向数据绑定的效果  -------------</p>
    <input type="text" :value="msg2" @input="test">
    <p>{{msg2}}</p>

    <p> ----- 在组件身上绑定事件: 自定义事件  --------</p>
    <!--<Home @click.native="handleClick2" />-->
    <Home @click="handleClick2" />


    <p>------ v-model都做了哪些事情 ---------------</p>
    <input type="text" :value="msg3" @input="msg3 = $event.target.value">
    <p>{{msg3}}</p>
    <hr>
    <Msite v-model="msg4"/>
    <p>{{msg4}}</p>
  </div>
</template>

<script>
  import Home from './components/Home'
  import Msite from './components/Msite'
  export default {
    components: {
      Home, Msite
    },
    data(){
      return {
        msg: '初始化的数据',
        msg2: '不使用v-model',
        msg3: '测试v-model',
        msg4: 'msite组件测试数据'
      }
    },
    methods: {
      handleClick(){
        console.log('handleClick');
      },
      handleClick2(event){
        console.log('handleClick2', event);
      },
      test(){
        console.log('test');
      },
      test2(event){
        console.log('test2', event.target.value);
        this.msg3 = event.target.value
      }
    }
  }
</script>

<style lang="stylus">

</style>
