<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities';

	let { title, icon, shortDesc, anchor, showIdFunc, showIoTFunc, subMenu } = $props();
</script>

<div class="h-seq--item {subMenu ? 'orange-bg': 'gray-bg'}">
	<img src={icon} loading="eager" alt="" class="h-seq--ico" />
	<div class="subhead-3">
		{title}
	</div>
	<div class="subhead-3 mb-10">
		{shortDesc}
	</div>

	{#if anchor === 'id'}
		<button onclick={showIdFunc} class="link-tech w-inline-block">
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
	{#if anchor === 'iot'}
		<button onclick={showIoTFunc} class="link-tech w-inline-block">
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
	.gray-bg {
		background-color: rgba(26, 26, 26, 0.1);
	}
	.orange-bg {
		background-color: rgba(242, 143, 83, 0.1);
	}
	/* # */
	.h-seq--item {
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		padding: 32px;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		-webkit-flex-direction: column;
		-ms-flex-direction: column;
		flex-direction: column;
		-webkit-box-align: start;
		-webkit-align-items: flex-start;
		-ms-flex-align: start;
		align-items: flex-start;
		grid-row-gap: 16px;
		border-radius: 2px;

		background-image: -webkit-gradient(
			linear,
			left top,
			left bottom,
			from(transparent),
			to(rgba(0, 0, 0, 0.1))
		);
		background-image: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.1));
		-webkit-backdrop-filter: blur(34px);
		backdrop-filter: blur(34px);
		color: #fff;
	}

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
	@media screen and (max-width: 991px) {
		.h-seq--item {
			width: 308px;
			-webkit-box-flex: 0;
			-webkit-flex: 0 0 auto;
			-ms-flex: 0 0 auto;
			flex: 0 0 auto;
		}
	}

	@media screen and (max-width: 767px) {
		.link-tech--ico {
			width: 11px;
			height: 16px;
		}

		.h-seq--item {
			width: 100%;
			padding: 24px 24px 24px 20px;
		}
	}
</style>
