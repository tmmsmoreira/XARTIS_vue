<!-- toolbar Component Template -->
<template>
    <!-- Main Views -->
    <f7-views tabs toolbar-through>
        <f7-view id="tab1" route-tab-id="tab1" class="has-tabbar" tab main navbar-fixed active>
            <f7-pages>
                <about-page></about-page>
            </f7-pages>
        </f7-view>

        <f7-view id="tab2" route-tab-id="tab2" class="has-tabbar" tab navbar-through>
            <f7-pages>
                <form-page></form-page>
            </f7-pages>
        </f7-view>

        <f7-view id="tab3" route-tab-id="tab3" class="has-tabbar" tab>
            <f7-pages></f7-pages>
        </f7-view>

        <f7-view id="tab4" route-tab-id="tab4" class="has-tabbar" tab>
            <f7-pages></f7-pages>
        </f7-view>

        <xartis-toolbar></xartis-toolbar>
    </f7-views>
</template>
<script>
    import AboutPage from './pages/about.vue'
    import FormPage from './pages/form.vue'
    import XartisToolbar from './toolbar.vue'

	export default {
        components: { XartisToolbar, AboutPage, FormPage },
		data() {
			return { }
		},
        methods: {

        }
	}
</script>
