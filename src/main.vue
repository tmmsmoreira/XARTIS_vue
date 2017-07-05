<template>
	<!-- App -->
	<div id="app">

		<!-- Statusbar -->
		<f7-statusbar></f7-statusbar>

		<!-- Main Views -->
		<f7-views tabs toolbar-through>
			<f7-view id="tab1" route-tab-id="tab1" tab has-tabbar main navbar-fixed active>
				<f7-pages></f7-pages>
			</f7-view>

			<f7-view id="tab2" route-tab-id="tab2" tab has-tabbar>
				<f7-pages></f7-pages>
			</f7-view>

			<f7-view id="tab3" route-tab-id="tab3" tab has-tabbar>
				<f7-pages></f7-pages>
			</f7-view>

			<f7-view id="tab4" route-tab-id="tab4" tab has-tabbar>
				<f7-pages></f7-pages>
			</f7-view>


			<!--<div class="toolbar tabbar tabbar-labels toolbar-bottom">
	            <div class="toolbar-inner">
	                <a id="tab-nearby" href="/about/" class="tab-link active">
	                    <i class="f7-icons">room</i>
	                    <span class="tabbar-label">Perto</span>
	                </a>
	                <a id="tab-camera" href="#camera" class="tab-link">
	                    <i class="f7-icons">photo_camera</i>
	                    <span class="tabbar-label">Câmara</span>
	                </a>
	                <a id="tab-routes" href="#routes" class="tab-link">
	                    <i class="f7-icons">explore</i>
	                    <span class="tabbar-label">Rotas</span>
	                </a>
	                <a id="tab-purchases" href="#purchases" class="tab-link">
	                    <i class="f7-icons">local_mall</i>
	                    <span class="tabbar-label">Comprar</span>
	                </a>
					<span class="tab-link-highlight" style="width: 25%; transform: translate3d(0%, 0px, 0px);"></span>
	            </div>
	        </div>-->

			<!--<f7-toolbar tabbar labels bottom>
				<f7-link active href="/" route-tab-link="#tab1" class="tab-link"><i class="f7-icons">room</i><span class="tabbar-label">Perto</span></f7-link>
				<f7-link href="/tab-2/" route-tab-link="#tab2" class="tab-link"><i class="f7-icons">photo_camera</i><span class="tabbar-label">Câmara</span></f7-link>
				<f7-link href="/tab-3/" route-tab-link="#tab3" class="tab-link"><i class="f7-icons">explore</i><span class="tabbar-label">Rotas</span></f7-link>
				<f7-link href="/about/" route-tab-link="#tab4" class="tab-link"><i class="f7-icons">local_mall</i><span class="tabbar-label">Comprar</span></f7-link>
				<span class="tab-link-highlight" style="width: 25%; transform: translate3d(0%, 0px, 0px);"></span>
			</f7-toolbar>-->

			<f7-toolbar tabbar labels bottom>
				<f7-link iconF7="true" iconMaterial="room" tabLink="true" text="Perto" href="/" route-tab-link="#tab1" active></f7-link>
				<f7-link iconF7="true" iconMaterial="photo_camera" tabLink="true" text="Câmara" href="/tab-2/" route-tab-link="#tab2"></f7-link>
				<f7-link iconF7="true" iconMaterial="explore" tabLink="true" text="Rotas" href="/tab-3/" route-tab-link="#tab3"></f7-link>
				<f7-link iconF7="true" iconMaterial="local_mall" tabLink="true" text="Comprar" href="/tab-4/" route-tab-link="#tab4"></f7-link>
				<span class="tab-link-highlight" style="width: 25%; transform: translate3d(0%, 0px, 0px);"></span>
			</f7-toolbar>

		</f7-views>

	</div>
</template>
