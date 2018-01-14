<template>
  <div class="activity">
    <h2>活动</h2>
    <h2>{{num}}</h2>
    <button @click="addNum(1)">+1</button>
    <button @click="addNum(2)">+2</button>
    <button @click="decreaseNum(2)">-2</button>
    <button @click="decreaseNum(4)">-4</button>
    <common-footer></common-footer>
  </div>
</template>

<script>
  import CommonFooter from '@/components/CommonFooter'
  import { mapState, mapActions } from 'vuex'

  export default {
    name: 'activity',
    components: {
      CommonFooter
    },
    data () {
      window.activity = this;
      return {

      }
    },
    methods: {
      ...mapActions('computerModule', [
        'addNum',
        'decreaseNum'
      ])
    },
    created () {},
    computed: {
      ...mapState('computerModule', {
        num: 'testNum'
      })
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .activity h2 {
    text-align: center;
  }

  .activity button {
    min-width: 80px;
    min-height: 30px;
    line-height: 30px;
    text-align: center;
    border: 1px solid #000;
  }
</style>
