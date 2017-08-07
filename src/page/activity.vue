<template>
  <div class="activity">
    <h2>活动</h2>

    <common-footer></common-footer>
  </div>
</template>

<script>
  import { XHeader, Swiper, Search } from 'vux'
  import CommonFooter from '@/components/CommonFooter'


  export default {
    name: 'activity',
    data () {
      return {

      }
    },
    components: {
      CommonFooter
    },
    methods: {

    },
    created(){
      console.log(this.$store.state.count);
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
