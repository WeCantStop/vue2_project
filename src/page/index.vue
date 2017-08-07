<template>
  <div class="index">
    <x-header :left-options="{showBack: false}">
      <img class="logo" src="../assets/logo-s.png" alt="">
    </x-header>
    <search
      :results="results"
      v-model="searchValue"
      auto-scroll-to-top top="46px"
      ref="search"></search>
    <swiper :list="demo01_list" v-model="demo01_index" loop auto :aspect-ratio="0.54" @on-index-change=""></swiper>

    <common-footer></common-footer>
  </div>
</template>

<script>
  import { XHeader, Swiper, Search } from 'vux'
  import CommonFooter from '@/components/CommonFooter'

  const baseList = [{
    url: 'javascript:',
    img: 'http://oss.yaok.com/headimg/2017-02-24/dbac3c20-63ad-466f-938d-d259f3c55e21.jpg?x-oss-process=image/resize,w_768'
  }, {
    url: 'javascript:',
    img: 'http://oss.yaok.com/headimg/2017-02-28/207ffc4d-b2f3-4644-a009-ec9d0ed83cb1.jpg?x-oss-process=image/resize,w_768'
  }, {
    url: 'javascript:',
    img: 'http://oss.yaok.com/headimg/2017-03-30/34330009-f037-42d1-a944-2b61749a610d.jpg?x-oss-process=image/resize,w_768'
  },{
    url: 'javascript:',
    img: 'http://img.yaok.com/user/2017-08-04/2017080414225903403329175940.jpg?x-oss-process=image/resize,w_768'
  },{
    url: 'javascript:',
    img: 'http://img.yaok.com/user/2017-08-04/2017080414194313420402624884.jpg?x-oss-process=image/resize,w_768'
  }];

  export default {
    name: 'index',
    data () {
      return {
        demo01_list: baseList,
        demo01_index: 0,
        results: [],
        searchValue: ""
      }
    },
    components: {
      XHeader,
      Swiper,
      Search,
      CommonFooter
    },
    methods: {
      changeState(){
        this.$store.commit('INCREASE_COUNT');
        this.$router.push({name: 'reserve', query: {name: 'will',age: '20'}})
      }
    },
    created(){
      console.log(this.$store.state.count);

      //promise 方法的使用
      //避免回调地狱

//      function runAsync1(){
//        return new Promise(function(resolve, reject){
//          //做一些异步操作
//          setTimeout(function(){
//            console.log('执行完成1');
//            resolve('执行1');
//          }, 3000);
//        });
//      }
//      function runAsync2(){
//        return new Promise(function(resolve, reject){
//          //做一些异步操作
//          setTimeout(function(){
//            console.log('执行完成2');
//            resolve('执行2');
//          }, 2000);
//        });
//      }
//      function runAsync3(){
//        return new Promise(function(resolve, reject){
//          //做一些异步操作
//          setTimeout(function(){
//            console.log('执行完成3');
//            //resolve也可以返回一个函数
//            resolve(function(data){
//              console.log(data);
//            });
//          }, 2000);
//        });
//      }
//
//      //all
//      Promise.all([runAsync1(),runAsync2(),runAsync3()]).then(function(result){
//        console.log(result);
//        for (var n = 0; n < result.length; n++) {
//          var t = result[n];
//          if ( typeof t == 'function'){
//            t('hello')
//          }
//        }
//      });

      //race
//      Promise.race([runAsync1(),runAsync2(),runAsync3()]).then(function(result){
//        console.log(result);
//      })

      //Generator
//      function* helloWorldGenerator() {
//        console.log('hello,world');
//        console.log('你好啊。世界')
//      }
//
//      var hw = helloWorldGenerator();
//      hw.next();


    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .logo {
    max-height: 140%;
    width: auto;
    margin-top: -8px;
  }

  .vux-header {
    background-color: #fff;
    box-shadow: 2px 0 12px -6px #aaa;
    border-bottom: 1px solid #eee;
  }
</style>
