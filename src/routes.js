import AboutPage from './assets/vue/pages/about.vue'

export default [
    {
        path: '/',
        tabs: [
            {
                path: '/',
                tabId: 'tab1',
                component: AboutPage
            },
            {
                path: '/tab-2/',
                tabId: 'tab2',
                component: AboutPage
            },
            {
                path: '/tab-3/',
                tabId: 'tab3',
                component: AboutPage
            },
            {
                path: '/tab-4/',
                tabId: 'tab4',
                component: AboutPage
            },
        ]
    }
]
