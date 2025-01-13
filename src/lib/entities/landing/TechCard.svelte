<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities';

	let { title, icon, shortDesc, anchor, showIdTechFunc } = $props();
</script>

<div class="h-seq--item">
	<img src={icon} qloading="eager" alt="" class="h-seq--ico" />
	<div class="subhead-3">
		{title}
	</div>
	<div class="subhead-3 mb-10">
		{shortDesc}
	</div>

	{#if anchor === 'id'}
		<button onclick={showIdTechFunc} target="_blank" class="link-tech w-inline-block">
			<div class="inline">{title}</div>
			<div class="link-tech--ico w-embed">
				<svg viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M8 3L8 10C8 14 6 16 2 16H0M8 3L14 7M8 3L2 7"
						stroke="currentcolor"
						stroke-width="2"
						stroke-linejoin="round"
					></path>
				</svg>
			</div>
		</button>
	{/if}
</div>

<style lang="postcss">
	.link-tech {
		color: #fff;
		font-size: 17px;
		line-height: 1.2;
		font-weight: 600;
		text-decoration: none;
		text-transform: uppercase;
	}

	.link-tech--ico {
		display: inline-block;
		width: 14px;
		height: 19px;
		margin-left: 8px;
		-webkit-transform: translate(0px, 3px);
		-ms-transform: translate(0px, 3px);
		transform: translate(0px, 3px);
	}

	.link-tech:hover {
		color: rgba(0, 0, 0, 0.5);
	}

	@media screen and (max-width: 767px) {
		.link-tech--ico {
			width: 11px;
			height: 16px;
		}
	}
</style>
