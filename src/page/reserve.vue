<template>
  <div class="reserve">
    <div class="vux-demo">
      <img class="logo" src="../assets/vux_logo.png">
      <h1>Hello</h1>
    </div>
    <group title="cell demo">
      <cell title="VUX" value="cool" is-link></cell>
    </group>

    <common-footer></common-footer>
  </div>
</template>

<script>
  import { Group, Cell } from 'vux'
  import CommonFooter from '@/components/CommonFooter'


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

    },
    created(){
      console.log(this.$store.state.count);
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
</style>
