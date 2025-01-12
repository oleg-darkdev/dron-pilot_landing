<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities';

	const partners = [
		{
			link: '/',
			img: '/images/partners/aws.jpg',
			alTtext: 'AWS'
		},
		{
			link: '/',
			img: '/images/partners/google.jpg',
			alTtext: 'Google'
		},
		{
			link: '/',
			img: '/images/partners/adobe.jpg',
			alTtext: 'Adobe'
		},
		{
			link: '/',
			img: '/images/partners/microsoft.jpg',
			alTtext: 'Microsoft'
		},
		{
			link: '/',
			img: '/images/partners/prpl.jpg',
			alTtext: 'PRPL'
		},
		{
			link: '/',
			img: '/images/partners/renesas.jpg',
			alTtext: 'Renesas'
		},
		{
			link: '/',
			img: '/images/partners/roku.jpg',
			alTtext: 'Roku'
		},
		{
			link: '/',
			img: '/images/partners/servicen.jpg',
			alTtext: 'Servicen'
		},
		
	];
</script>

<section class="sec-128">
	<div class="container-small">
		<div class="bp--other-hw">
			<h2>Nasi partnerzy</h2>
			<!-- <a href="/blog" class="link-arr mod-absolute w-inline-block"
						><div class="inline">ALL STORIES</div>
						<div class="link-arr--ico w-embed">
							<svg viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M8 3L8 10C8 14 6 16 2 16H0M8 3L14 7M8 3L2 7"
									stroke="currentcolor"
									stroke-width="2"
									stroke-linejoin="round"
								></path>
							</svg></div
					></a> -->
		</div>
		<div class="w-dyn-list">
			<div role="list" class="blog-list--other mod-about w-dyn-items">
				{#each partners as partner}
					<div role="listitem" class="blog-item--other w-dyn-item">
						<!-- images/638dadf7b305ca749deed1e6_post%20img.jpg -->
						<a href="{partner.link}" class="blog-card--other w-inline-block"
							><img
								alt="{partner.alTtext}"
								loading="lazy"
								src="{partner.img}"
								sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 43vw, 457px"
								class="blog-card--img mod--other"
							/>
						</a>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<style lang="postcss">
	.blog-list--other {
		display: -ms-grid;
		display: grid;
		-webkit-flex-wrap: wrap;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
		-webkit-box-align: start;
		-webkit-align-items: flex-start;
		-ms-flex-align: start;
		align-items: flex-start;
		grid-auto-columns: 1fr;
		grid-column-gap: 16px;
		grid-row-gap: 16px;
		-ms-grid-columns: 1fr 1fr 1fr;
		grid-template-columns: 1fr 1fr 1fr;
		-ms-grid-rows: auto;
		grid-template-rows: auto;
	}
	@media screen and (max-width: 991px) {
		.blog-list--other {
			-ms-grid-columns: 1fr;
			grid-template-columns: 1fr;
		}

		.blog-list--other.mod-about {
			padding-bottom: 36px;
			-ms-grid-columns: 1fr 1fr;
			grid-template-columns: 1fr 1fr;
		}
	}
	@media screen and (max-width: 767px) {
		.blog-list--other {
			padding-bottom: 36px;
		}

		.blog-list--other.mod-about {
			-ms-grid-columns: 1fr;
			grid-template-columns: 1fr;
		}
	}
	@media screen and (max-width: 479px) {
		.blog-list--other {
			display: block;
			margin-right: 0px;
			margin-left: 0px;
		}

		.blog-list--other.mod-about {
			display: -ms-grid;
			display: grid;
			grid-auto-columns: 1fr;
			grid-column-gap: 16px;
			grid-row-gap: 16px;
			-ms-grid-columns: 1fr;
			grid-template-columns: 1fr;
			-ms-grid-rows: auto;
			grid-template-rows: auto;
		}
	}
</style>
