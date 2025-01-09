<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'

	const types = ['AI', 'AR', 'IoT', 'RFID', 'QR', 'Dron', 'Cyfrowy Archiwium'];

	const projects = [
		{
			type: types[0],
			date: '22/11/2023',
			title: 'Lorem impsun #1',
			link: '/'
		},
		{
			type: types[4],
			date: '22/11/2023',
			title: 'Lorem impsun #2',
			link: '/'
		},
		{
			type: types[2],
			date: '16/06/2020',
			title: 'Lorem impsun #3',
			link: '/'
		},
		{
			type: types[6],
			date: '29/02/2024',
			title: 'Lorem impsun #4',
			link: '/'
		},
		{
			type: types[5],
			date: '08/10/2024',
			title: 'Lorem impsun #5',
			link: '/'
		}
	];
</script>

<!-- sec-128-56 -->
<div class="">
	<div class="container-small f-start-inner">
		<h2 class="mb-20">Nasze projecty</h2>

		<div class="w-form">
			<form
				id="email-form"
				name="email-form"
				data-name="Email Form"
				method="get"
				fs-cmsfilter-element="filters"
				data-wf-page-id="638dadf7b305ca51e1eed0e3"
				data-wf-element-id="ccad5377-0430-0466-2b2f-a37a1ff0c79e"
			>
				<div fs-cmsfilter-element="reset" class="career-filter active">
					<div class="career-filter--text">All</div>
				</div>
				<div class="w-dyn-list inline">
					<div role="list" class="w-dyn-items inline">
						{#each types as type}
							<div role="listitem" class="w-dyn-item inline">
								<label class="career-filter w-radio">
									<input
										type="radio"
										data-name="filter"
										id="radio-2"
										name="filter"
										class="w-form-formradioinput hide w-radio-input"
										value="Radio"
									/>
									<span class="career-filter--text w-form-label" for="radio-2">{type}</span>
									<div class="career-filtr--line"></div>
								</label>
							</div>
						{/each}
					</div>
				</div>
				<input type="submit" data-wait="Please wait..." class="hide w-button" value="Submit" />
			</form>
			<!-- <div class="w-form-done">
				<div>Thank you! Your submission has been received!</div>
			</div>
			<div class="w-form-fail">
				<div>Oops! Something went wrong while submitting the form.</div>
			</div> -->
		</div>
		<div class="w-dyn-list">
			<div role="list" class="careers-list w-dyn-items">
				{#each projects as project}
					<div role="listitem" class="w-dyn-item">
						<a href={project.link} target="_blank" class="career-card w-inline-block">
							<div class="career-card--top">
								<div class="caption">{project.type}</div>
								<div class="caption">{project.date}</div>
							</div>
							<div class="career-card--title">{project.title}</div>
							<div class="link-arr mt-auto">
								<div class="inline">Подробнее</div>
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
							</div>
						</a>
					</div>
				{/each}
			</div>
			<div role="navigation" aria-label="List" class="w-pagination-wrapper">
				<a href="/" class="w-pagination-next btn--black mod-careers">
					<div class="w-inline-block">Показать все</div>
				</a>
				<link rel="prerender" href="/" />
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
</style>
