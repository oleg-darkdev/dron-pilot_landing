<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities';
	import { fade } from 'svelte/transition';

	let showAnswer = $state(false);

	const { a, q } = $props();

	// console.log(a)

</script>

<div class="f-faq--drop">
	<div onclick={()=> showAnswer = !showAnswer} class="f-faq--head">
		<div class="subhead-1">{q}</div>
		<div class="f-faq--ico--wr">
			<div class="f-faq--ico w-embed">
				<svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M13.4151 13.4151V4.5H16.5849V13.4151H25.5V16.5849H16.5849V25.5H13.4151V16.5849H4.5V13.4151H13.4151Z"
						fill="currentcolor"
					></path>
				</svg>
			</div>
		</div>
	</div>
	{#if showAnswer}
	<div transition:fade class="f-faq--content">
		<div class="f-faq--content-wr">
			<div class="f-faq--rich w-richtext">
				{#each a as answer}
					<p>
						{answer}
					</p>
				{/each}
			</div>
			<a href="#contact" class="link-arr w-inline-block">
				<div class="inline">kontakt</div>
				<div class="link-arr--ico w-embed">
					<svg viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M8 3L8 10C8 14 6 16 2 16H0M8 3L14 7M8 3L2 7"
							stroke="currentcolor"
							stroke-width="2"
							stroke-linejoin="round"
						></path>
					</svg>
				</div>
			</a>
		</div>
	</div>
	{/if}
</div>

<style lang="postcss">
</style>
