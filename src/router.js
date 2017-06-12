const routers = [{
    path: '/',
    component: (resolve) => require(['./views/index.vue'], resolve)
},{
    path: '/index',
    component: (resolve) => require(['./views/index.vue'], resolve)
},{
    path: '/main',
    meta: {
        title: 'aaa'
    },
    component: (resolve) => require(['./views/main.vue'], resolve)
},{
    path: '/form',
    meta: {
        title: 'form'
    },
    component: (resolve) => require(['./views/form.vue'], resolve)
},{
    path: '/type',
    meta: {
        title: 'form'
    },
    component: (resolve) => require(['./views/type.vue'], resolve)
}];

export default routers;