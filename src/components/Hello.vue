<template>
  <div class="hello">
    <x-header  :left-options="{backText: ''}">要客购物</x-header>
    <h1>{{ msg }}</h1>
    <button @click="gotoVux">GoTo Vux</button>
  </div>
</template>

<script>
  import { XHeader } from 'vux'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome!!!'
    }
  },
  components: {
    XHeader
  },
  methods: {
    gotoVux(){
      this.$router.push({ name: 'home', query:{name: 'will', age: '18'}});
    }
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
</style>
