<template>
  <div class="reserve">
    <div class="vux-demo">
      <img class="logo" src="../assets/vux_logo.png">
      <h1>Hello</h1>
    </div>
    <group title="cell demo">
      <cell title="VUX" value="cool" is-link></cell>
    </group>
    <div class="addEvent-container">
      <input ref="eventInput" type="text" v-model="inputEvent" @keyup.enter="addEvent">
      <button @click="addEvent">添加</button>
      <button @click="removeAllEvent">清空</button>
    </div>
    <ul>
      <li v-for="(event, index) in todoList" :key="index">
        <span>{{index+1}}、</span>
        <span>{{event.text}}</span>
        <span class="remove-btn" @click="removeEvent(index)">删除</span>
      </li>
    </ul>

    <common-footer></common-footer>
  </div>
</template>

<script>
  import { Group, Cell, Alert, AlertModule } from 'vux'
  import CommonFooter from '@/components/CommonFooter'
  import { mapState, mapActions } from 'vuex'

  export default {
    name: 'reserve',
    components: {
      Group,
      Cell,
      CommonFooter,
      Alert
    },
    data () {
      return {
        msg: 'Hello World!',
        inputEvent: ''
      }
    },
    methods: {
    
      addEvent() {
        if (!this.inputEvent) {
          AlertModule.show({
            title: 'Trip',
            content: '请输入内容'
          });     
          return;
        }
        this.$store.commit('todoListModule/ADD_EVENT', {text: this.inputEvent});
        this.inputEvent = '';
      },
      removeEvent(id) {
        this.$store.commit('todoListModule/REMOVE_EVENT', id);
      },
      removeAllEvent () {
        this.$store.commit('todoListModule/REMOVE_ALL_EVENT');
      }
    },
    created(){},
    computed: {
      ...mapState('todoListModule', [
        'todoList'
      ])
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
  .addEvent-container input {
    border: 1px solid #000;
    padding-left: 10px;
  }
  .remove-btn {
    display: inline-block;
    float: right;
    padding-right: 20px;
  }
</style>
