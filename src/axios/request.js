import  axios from "axios"
import store from '../store/index'
const service = axios.create({
    timeout:5000
})

service.interceptors.request.use(
    config => {
      if (localStorage.getItem('token')) {
        config.headers.token = localStorage.getItem('token');
      }
   
      return config;
    },
    error => {
      return Promise.reject(error);
    });
service.interceptors.response.use(
      response => {
          return response;
      },
      error => {
          if (error.response) {
              switch (error.response.status) {
                  case 401:
                      // 返回 401 清除token信息并跳转到登录页面
                      store.commit('del_token');
                      router.replace({
                          path: 'login',
                          query: {redirect: router.currentRoute.fullPath}
                      })
              }
          }
          return Promise.reject(error.response.data)   // 返回接口返回的错误信息
      });

export default service