<script lang="ts">
	import { Header, Footer } from '$widgetsLanding';
	import {} from '$sharedData';
	import '../../../app/app.css';

	let { children } = $props();
</script>

<div class="page-wrapper">
	<Header />

	<main>
		{@render children()}
	</main>

	<Footer />
</div>
<div class="bg-gradient"></div>

<style lang="postcss">
</style>
