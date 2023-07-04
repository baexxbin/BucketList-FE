import Vue from 'vue';
import VueRouter from 'vue-router';
import MainView from '../views/MainView.vue';


// 연결할 컴포넌트들

// 라우터 설계
const routes = [
    {
        path: "/main",
        name: "main",
        component: MainView
    },
];

// 라우터 생성
const router = new VueRouter({
    mode: 'history',
    routes
});

// 라우터 추출 (main.js 사용)
export {router}