export default [
    {
        path: '/',
        tabs: [
            {
                path: '/',
                tabId: 'tab1',
                component: require('./assets/vue/pages/about.vue')
            },
            {
                path: '/tab-2/',
                tabId: 'tab2',
                component: require('./assets/vue/pages/about.vue')
            },
            {
                path: '/tab-3/',
                tabId: 'tab3',
                component: require('./assets/vue/pages/about.vue')
            },
            {
                path: '/tab-4/',
                tabId: 'tab4',
                component: require('./assets/vue/pages/about.vue')
            },
        ]
    }
]
