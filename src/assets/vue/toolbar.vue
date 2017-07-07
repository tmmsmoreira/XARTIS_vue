<!-- toolbar Component Template -->
<template>
    <f7-toolbar tabbar labels bottom>
        <f7-link icon-f7="room" route-tab-link="#tab1" href="/" tabLink="#tab1" text="Perto" active></f7-link>
        <f7-link icon-f7="photo_camera" route-tab-link="#tab2" href="/tab-2/" tabLink="#tab2" text="Câmara"></f7-link>
        <f7-link icon-f7="explore" route-tab-link="#tab3" href="/tab-3/" tabLink="#tab3" text="Rotas"></f7-link>
        <f7-link icon-f7="local_mall" route-tab-link="#tab4" href="/tab-4/" tabLink="#tab4" text="Comprar"></f7-link>
        <span class="tab-link-highlight" style="width: 25%; transform: translate3d(0%, 0px, 0px);"></span>
    </f7-toolbar>
</template>
<script>
	export default {
		data() {
			return {
                active: false
            }
		},
        methods: {
            
        }
	}
</script>
