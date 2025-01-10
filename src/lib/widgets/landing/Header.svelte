<script lang="ts">
	import { navigation } from '$sharedData';
	// import {  } from '$widgets';
	// import {  } from '$entities'
</script>

<div class="navbar w-nav">
	<div class="nav-inner">
		<a href="/" aria-current="page" class="nav-logo w-nav-brand w--current">
			<img src="images/logo.png" loading="lazy" alt="" class="nav-logo--mob" />
			<img src="images/logo.png" loading="lazy" alt="" class="nav-logo--desk" />
		</a>
		<nav role="navigation" class="nav-menu w-nav-menu">
			{#each navigation as { title, link }}
				<a href={link} class="nav-link w-nav-link">{title}</a>
			{/each}
			<div class="nav--btns">
				<div class="nav-line"></div>
				<a href="#" class="nav-link-large w-nav-link">Rozpocząć</a>
				<div class="nav-line"></div>
				<!-- <a id="theme-toggle" href="#" class="link-theme w-inline-block"></a> -->
			</div>
		</nav>
		<div class="nav--tablet--only">
			<a href="#" class="nav-link-large w-nav-link">Rozpocząć</a>
			<!-- <a href="#" class="link-theme w-inline-block"></a> -->
		</div>
		<div class="menu-btn w-nav-button"></div>
	</div>
</div>

<style lang="postcss">
	.nav--tablet--only {
		display: none;
	}

	/* nav-line nav-link-large w-nav-link*/
	.nav--btns {
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: center;
		-webkit-align-items: center;
		-ms-flex-align: center;
		align-items: center;
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		-ms-flex: 1;
		flex: 1;
	}

	.w-icon-nav-menu:before {
		content: '\e602';
	}

	[data-nav-menu-open] {
		display: block !important;
		position: absolute;
		top: 100%;
		left: 0;
		right: 0;
		background: #c8c8c8;
		text-align: center;
		overflow: visible;
		min-width: 200px;
	}

	.w-nav-overlay [data-nav-menu-open] {
		top: 0;
	}

	/* nav-logo--mob */
	.nav-logo--mob {
		display: none;
	}

	.nav-logo--desk {
		display: block;
	}

	.nav-inner {
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		width: 100%;
		max-width: 1280px;
		margin-right: auto;
		margin-left: auto;
		padding: 32px 20px;
		-webkit-box-pack: justify;
		-webkit-justify-content: space-between;
		-ms-flex-pack: justify;
		justify-content: space-between;
		-webkit-box-align: center;
		-webkit-align-items: center;
		-ms-flex-align: center;
		align-items: center;
	}

	.nav-menu {
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		max-width: 808px;
		margin-left: 20px;
		padding-right: 2px;
		padding-left: 2px;
		-webkit-justify-content: space-around;
		-ms-flex-pack: distribute;
		justify-content: space-around;
		-webkit-box-align: center;
		-webkit-align-items: center;
		-ms-flex-align: center;
		align-items: center;
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		-ms-flex: 1;
		flex: 1;
		border-radius: 2px;
		background-color: #fff;
	}

	.nav-link {
		margin-right: 0px;
		margin-left: 0px;
		padding: 22px 20px;
		border-radius: 2px;
		font-size: 13px;
		line-height: 1.2;
		text-align: center;
		text-decoration: none;
		text-transform: uppercase;
	}

	.nav-link:hover {
		background-color: #eae7ff;
	}

	.nav-link.w--current {
		color: #000;
	}

	.nav-line {
		width: 1px;
		height: 40px;
		margin-right: 2px;
		margin-left: 2px;
		-webkit-align-self: center;
		-ms-flex-item-align: center;
		-ms-grid-row-align: center;
		align-self: center;
		border-radius: 2px;
		background-color: #000;
	}

	.nav-link-large {
		max-width: 202px;
		margin-right: 0px;
		margin-left: 0px;
		padding: 22px 20px;
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		-ms-flex: 1;
		flex: 1;
		font-size: 13px;
		line-height: 1.2;
		text-align: center;
		text-decoration: none;
		text-transform: uppercase;
	}

	.nav-link-large:hover {
		background-color: #eae7ff;
	}

	.nav-link-large.desk-hide {
		display: none;
	}

	.link-theme {
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		width: 61px;
		height: 64px;
		-webkit-box-pack: center;
		-webkit-justify-content: center;
		-ms-flex-pack: center;
		justify-content: center;
		-webkit-box-align: center;
		-webkit-align-items: center;
		-ms-flex-align: center;
		align-items: center;
		-webkit-box-flex: 0;
		-webkit-flex: 0 0 auto;
		-ms-flex: 0 0 auto;
		flex: 0 0 auto;
		background-image: url('images/638dadf7b305cafaeeeed1a0_State%253Ddefault%252C%20color%253Dwhite.svg');
		background-position: 50% 50%;
		background-repeat: no-repeat;
	}

	.navbar {
		position: absolute;
		left: 0%;
		top: 0%;
		right: 0%;
		bottom: auto;
		display: block;
		background-color: transparent;
	}

	.w-nav {
		position: relative;
		background: #dddddd;
		z-index: 1000;
	}
	.w-nav:before,
	.w-nav:after {
		content: ' ';
		display: table;
		grid-column-start: 1;
		grid-row-start: 1;
		grid-column-end: 2;
		grid-row-end: 2;
	}
	.w-nav:after {
		clear: both;
	}
	.w-nav-brand {
		position: relative;
		float: left;
		text-decoration: none;
		color: #333333;
	}
	.w-nav-link {
		position: relative;
		display: inline-block;
		vertical-align: top;
		text-decoration: none;
		color: #222222;
		padding: 20px;
		text-align: left;
		margin-left: auto;
		margin-right: auto;
	}
	.w-nav-link.w--current {
		color: #0082f3;
	}
	.w-nav-menu {
		position: relative;
		float: right;
	}

	.w-nav[data-animation='over-left'] .w-nav-overlay {
		width: auto;
	}
	.w-nav[data-animation='over-left'] .w-nav-overlay,
	.w-nav[data-animation='over-left'] [data-nav-menu-open] {
		right: auto;
		z-index: 1;
		top: 0;
	}
	.w-nav[data-animation='over-right'] .w-nav-overlay {
		width: auto;
	}
	.w-nav[data-animation='over-right'] .w-nav-overlay,
	.w-nav[data-animation='over-right'] [data-nav-menu-open] {
		left: auto;
		z-index: 1;
		top: 0;
	}
	.w-nav-button {
		position: relative;
		float: right;
		padding: 18px;
		font-size: 24px;
		display: none;
		cursor: pointer;
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
		tap-highlight-color: rgba(0, 0, 0, 0);
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}
	.w-nav-button:focus {
		outline: 0;
	}
	.w-nav-button.w--open {
		background-color: #c8c8c8;
		color: white;
	}
	.w-nav[data-collapse='all'] .w-nav-menu {
		display: none;
	}
	.w-nav[data-collapse='all'] .w-nav-button {
		display: block;
	}

	@media screen and (max-width: 767px) {
		.w-nav[data-collapse='small'] .w-nav-menu {
			display: none;
		}
		.w-nav[data-collapse='small'] .w-nav-button {
			display: block;
		}
		.w-nav-brand {
			padding-left: 10px;
		}
	}
	@media screen and (max-width: 479px) {
		.w-nav[data-collapse='tiny'] .w-nav-menu {
			display: none;
		}
		.w-nav[data-collapse='tiny'] .w-nav-button {
			display: block;
		}
		.nav-inner {
			-webkit-box-align: start;
			-webkit-align-items: flex-start;
			-ms-flex-align: start;
			align-items: flex-start;
		}

		.nav-link-large.desk-hide {
			display: none;
		}

		.html-embed {
			display: none;
		}

		.nav-logo--mob {
			display: block;
			height: 50px;
		}

		.nav-logo--desk {
			display: none;
		}
	}

	@media screen and (max-width: 991px) {
		.nav--tablet--only {
			position: relative;
			z-index: 10;
			display: -webkit-box;
			display: -webkit-flex;
			display: -ms-flexbox;
			display: flex;
		}

		.nav--btns {
			display: none;
		}

		.w-nav[data-collapse='medium'] .w-nav-menu {
			display: none;
		}
		.w-nav[data-collapse='medium'] .w-nav-button {
			display: block;
		}

		.nav-logo {
			z-index: 10;
			margin-right: auto;
		}

		.nav-inner {
			padding-right: 35px;
			padding-left: 60px;
			-webkit-box-pack: justify;
			-webkit-justify-content: space-between;
			-ms-flex-pack: justify;
			justify-content: space-between;
		}

		.nav-menu {
			left: 0%;
			top: 0%;
			right: 0%;
			bottom: auto;
			max-width: none;
			margin-left: 0px;
			padding: 128px 0px 120px;
			-webkit-box-orient: vertical;
			-webkit-box-direction: normal;
			-webkit-flex-direction: column;
			-ms-flex-direction: column;
			flex-direction: column;
			-webkit-box-align: start;
			-webkit-align-items: flex-start;
			-ms-flex-align: start;
			align-items: flex-start;
			background-color: #f3f5fa;
		}

		.nav-link {
			padding: 24px 40px;
			font-size: 24px;
			font-weight: 500;
			text-align: left;
			text-transform: none;
		}

		.nav-line {
			display: none;
		}

		.nav-link-large {
			min-height: 64px;
			padding: 22px 40px;
			background-color: #fff;
			font-size: 17px;
			text-align: left;
		}

		.nav-link-large.desk-hide {
			display: -webkit-box;
			display: -webkit-flex;
			display: -ms-flexbox;
			display: flex;
			min-height: 68px;
			margin-left: auto;
			padding-right: 24px;
			padding-left: 24px;
			-webkit-box-pack: center;
			-webkit-justify-content: center;
			-ms-flex-pack: center;
			justify-content: center;
			-webkit-box-align: center;
			-webkit-align-items: center;
			-ms-flex-align: center;
			align-items: center;
			-webkit-align-self: center;
			-ms-flex-item-align: center;
			align-self: center;
			-webkit-box-flex: 0;
			-webkit-flex: 0 auto;
			-ms-flex: 0 auto;
			flex: 0 auto;
			border-radius: 2px;
			font-size: 17px;
			font-weight: 600;
		}

		.menu-btn {
			z-index: 10;
			min-height: 64px;
			min-width: 80px;
			margin-left: 8px;
			padding: 0px;
			border-radius: 2px;
			background-color: #000;
			background-image: url('images/638dadf7b305ca24cbeed1a2_burger%20menu.svg');
			background-position: 50% 50%;
			background-size: auto;
			background-repeat: no-repeat;
		}

		.menu-btn.w--open {
			background-color: #000;
		}

		.menu-btn--img {
			height: 64px;
		}
	}

	@media screen and (max-width: 767px) {
		.w-nav-brand {
			padding-left: 10px;
		}

		.menu-btn {
			width: 50px;
			height: 50px;
			max-height: 50px;
			max-width: 50px;
			min-height: 50px;
			min-width: 50px;
			padding: 0px;
		}
		.nav-logo {
			padding-left: 0px;
		}

		.nav-inner {
			padding: 40px 20px;
		}

		.nav-menu {
			padding-bottom: 24px;
		}

		.nav-link {
			padding-right: 20px;
			padding-left: 20px;
			font-size: 20px;
		}

		.nav-link-large {
			margin-left: 8px;
			border-radius: 2px;
			background-color: #000;
			color: #fff;
		}

		.nav-link-large:hover {
			background-color: #000;
		}

		.nav-link-large.desk-hide {
			display: none;
		}

		.about-contacts--wr {
			padding-right: 20px;
			padding-left: 20px;
		}

		.nav--tablet--only {
			display: none;
		}

		.nav--btns {
			display: -webkit-box;
			display: -webkit-flex;
			display: -ms-flexbox;
			display: flex;
			margin-top: 16px;
		}
		.menu-btn--img {
			display: none;
		}
	}
</style>
