// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')


import { createApp } from 'vue';
// import { Button, Antd } from 'ant-design-vue';
import App from './App';
import 'ant-design-vue/dist/antd.css';
import api from './api' // 导入api接口
import Vue from 'vue'

const app = createApp(App);


console.log(Vue)
// app.prototype.$api = api



createApp(App).mount('#app')
app.config.productionTip = false;
// app.use(Antd);
// app.use(Button);

