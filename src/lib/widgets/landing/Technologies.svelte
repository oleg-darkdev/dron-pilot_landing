<script lang="ts">
	import { tech, idTech, idIoT } from '$sharedData';
	// import {  } from '$widgets';
	import { TechCard } from '$entitiesLanding';
	import { fade } from 'svelte/transition';

	let showIdTech = $state(false),
		subMenu = $state(false),
		showIdIoT = $state(false);
</script>

<a name="technologie"></a>

<section class="h-seq wf-section">
	<div class="container">
		<div class="h-seq-title">
			<div class="text-wr-wr">
				<div class="text-wr--h2">
					<h2 class="h2 mod--textgrad">Technologie, których uźywamy.</h2>
				</div>
			</div>
		</div>
		<div class="h-seq--inner">
			{#each tech as { title, icon, shortDesc, anchor }}
				<TechCard
					{title}
					{icon}
					{shortDesc}
					{anchor}
					showIdFunc={() => {
						showIdTech = !showIdTech;
						showIdIoT = false;
					}}
					showIoTFunc={() => {
						showIdIoT = !showIdIoT;
						showIdTech = false;
					}}
				/>
			{/each}
		</div>
		{#if showIdTech || showIdIoT}
			<div transition:fade class="container mt-40">
				<div class="h-seq-title">
					<div class="text-wr-wr">
						<div class="text-wr--h2">
							<h2 class="h2 mod--textgrad">{showIdIoT ? 'Technologie IoT': 'Technologie identyfikacji bezdotykowej.'}</h2>
						</div>
					</div>
				</div>
				<div class="h-seq--inner">
					{#each showIdTech ? idTech : idIoT as { title, icon, shortDesc, anchor }}
						<TechCard {title} {icon} {shortDesc} {anchor}  subMenu={true}/>
					{/each}
				</div>
			</div>
		{/if}
	</div>

	<!-- <img
		src="images/638dadf7b305ca170beed130_block-easy-to-join.jpg"
		loading="eager"
		srcset="images/638dadf7b305ca170beed130_block-easy-to-join-p-500.jpg 500w, images/638dadf7b305ca170beed130_block-easy-to-join-p-800.jpg 800w, images/638dadf7b305ca170beed130_block-easy-to-join-p-1080.jpg 1080w, images/638dadf7b305ca170beed130_block-easy-to-join-p-1600.jpg 1600w, images/638dadf7b305ca170beed130_block-easy-to-join-p-2000.jpg 2000w, images/638dadf7b305ca170beed130_block-easy-to-join.jpg 2800w"
		sizes="(max-width: 767px) 100vw, (max-width: 991px) 96vw, 100vw"
		alt=""
		class="h-seq--bg"
	/> -->

	<!-- <a name=""></a> -->
</section>

<style lang="postcss">
</style>
