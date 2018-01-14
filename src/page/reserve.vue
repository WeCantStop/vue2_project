<template>
  <div class="reserve">
    <div class="vux-demo">
      <img class="logo" src="../assets/vux_logo.png">
      <h1>Hello</h1>
    </div>
    <group title="cell demo">
      <cell title="VUX" value="cool" is-link></cell>
    </group>

    <group title="cell demo">
      <cell :title="num" value="cool" is-link></cell>
    </group>

    <button @click="addNum(8)">+8</button>

    <common-footer></common-footer>
  </div>
</template>

<script>
  import { Group, Cell } from 'vux'
  import CommonFooter from '@/components/CommonFooter'
  import { mapState, mapActions } from 'vuex'


  export default {
    name: 'reserve',
    components: {
      Group,
      Cell,
      CommonFooter
    },
    data () {
      return {
        // note: changing this line won't causes changes
        // with hot-reload because the reloaded component
        // preserves its current state and we are modifying
        // its initial state.
        msg: 'Hello World!'
      }
    },
    methods: {
      ...mapActions('computerModule', [
        'addNum',
        'decreaseNum'
      ])

    },
    created(){},
    computed: {
      ...mapState('computerModule', {
        num: 'testNum'
      })
    }
  }
</script>

<style>
  .vux-demo {
    text-align: center;
  }
  .logo {
    width: 100px;
    height: 100px
  }
  .reserve button {
    min-height: 30px;
    min-width: 80px;
    border: 1px solid #000;
    text-align: center;
  }
</style>
