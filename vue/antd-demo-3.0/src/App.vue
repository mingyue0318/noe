<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Button type="primary">Primary</Button>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import { Button } from 'ant-design-vue';
// import { Button } from "Antd"
import api from './api'

export default {
  name: "App",
  components: {
    HelloWorld,
    Button
  },
  methods:{
      getDate(){
          api.get('/api/wxapi')
      },
  },
  mounted() {
      this.getDate()
  },

};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
