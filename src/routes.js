import AboutPage from './assets/vue/pages/about.vue'
import XartisTabs from './assets/vue/tabs.vue'

export default [
    {
        path: '/',
        component: XartisTabs,
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
                tabIId: 'tab3',
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
