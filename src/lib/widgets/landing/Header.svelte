<script lang="ts">
	import { navigation } from '$sharedData';
	// import {  } from '$widgets';
	// import {  } from '$entities'


</script>

<div class="navbar w-nav">
	<div class="nav-inner">
		<a href="/" aria-current="page" class="nav-logo w-nav-brand w--current">
			<img
				src="images/logo.png"
				loading="lazy"
				alt=""
				class="nav-logo--mob"
			/>
			<img
				src="images/logo.png"
				loading="lazy"
				alt=""
				class="nav-logo--mob"
			/>
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
</style>
