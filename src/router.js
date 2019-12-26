import Vue from 'vue';
import Router from 'vue-router';
import store from './store';

import Splashscreen from './pages/Splashscreen';
import Login from './pages/Login';
import Items from './pages/Items';
import CategoryId from './pages/Items/_CategoryId/Index';

Vue.use(Router);

const ifNotAuthenticated = (to, from, next) => {
/*    if (!store.getters['user/isAuthenticated']) {
        mapRouteStack(to) && next()
        return
    }
    mapRouteStack(router.resolve({name: 'Dashboard'}).route) && next()*/
}

const ifAuthenticated = (to, from, next) => {
/*    if (store.getters['user/isAuthenticated']) {
        mapRouteStack(to) && next()
        return
    }
    mapRouteStack(router.resolve({name: 'Auth'}).route) && next()*/
}

const router = new Router({
    routes: [
        {
            path: '/',
            redirect: '/splashscreen'
        },
        {
            path: '/splashscreen',
            name: 'Splashscreen',
            component: {
                extends: Splashscreen,
                onsNavigatorOptions: {animation: 'none'}
            },

        },
        {
            path: '/login',
            name: 'Login',
            component: {
                extends: Login,
                onsNavigatorOptions: {animation: 'none'}
            },
//            beforeEnter: ifNotAuthenticated,
        },
        {
            path: '/items',
            name: 'Items',
            component: {
                extends: Items,
                onsNavigatorOptions: {animation: 'none'}
            },
//            beforeEnter: ifAuthenticated,
            children: [
                {
                    path: ':categoryId',
                    name: 'CategoryId',
                    component: {
                        extends: CategoryId,
                        onsNavigatorOptions: {animation: 'slide', animationOptions: { duration: 0.2 }}
                    },
//            beforeEnter: ifAuthenticated,
                }
            ]
        }
    ]
})

const mapRouteStack = route => store.state['router'].pageStack = route.matched.map(m => m.components.default)
mapRouteStack(router.resolve({name: 'Splashscreen'}).route)
router.beforeEach((to, from, next) => {
    if (from.path !==to.path) {
        mapRouteStack(to) && next()
    }
});


export default router;