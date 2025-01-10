<script lang="ts">
	import {} from '$sharedData';
	import {} from '$sharedUi';
	import {
		Hero,
		Contact,
		CTA,
		Team,
		FreeBlock,
		Culture,
		Welcome,
		Banner,
		Technologies,
		Services,
		Release,
		Steps,
		Faq,
		Projects
	} from '$widgetsLanding';
	import { CookieCard, ContactForm } from '$entitiesLanding';
	// import { SEO } from '$sharedUtils';
</script>

<svelte:head>
	<title>DronPilot | Home</title>
	<meta name="description" content="" />
</svelte:head>

<!-- <SEO title="Home" /> -->

<!--  
    <div class="sec-hero wf-section">
      <div class="container">
        <div class="h-hero--inner">
          <div class="text-wr-wr">
            <div class="text-wr--h1-small">
              <h1 class="h1-small mod--textgrad">fly with us</h1>
            </div>
          </div>
          <div class="h-hero--wr mod--fly">
            <div class="subhead-3">Fly for fun, fly for rewards, & help collect Earth’s most important data</div>
            <div class="h-hero--link-flex">
              <a data-w-id="68ddcc12-7ad6-7bf8-449a-6414533ea2cc" href="#" class="btn--black mod-hero">let’s fly</a>
              <div class="h-hero--line"></div>
              <a href="/access-imagery#access-work" class="btn--black mod-hero">Learn how it works</a>
            </div>
          </div>
        </div>
      </div>
      <div class="hero-video w-embed w-iframe">
        <div class="vimeo-wrapper">
          <iframe src="https://player.vimeo.com/video/777122375?background=1&autoplay=1&loop=1&byline=0&title=0" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe>
        </div>
      </div>
    </div> -->

<!-- <div class="h-slider mob--bot-0 wf-section">
	<div class="container-small">
		<div class="f-slider--head">
			<h2 id="w-node-_9d05002b-2f67-7f48-2033-005e44aeba6d-57eed0ea" class="max-w-480">
				Super easy to join
			</h2>
			<div class="h-slider--pagin">
				<div id="slider-prev" class="arr-wr">
					<div class="h-slider--arr w-embed">
						<svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g clip-path="url(#clip0_5913_3909)">
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M11.1679 2.94531L7.16795 8.94531C6.94402 9.28121 6.94402 9.71881 7.16795 10.0547L11.1679 16.0547L12.8321 14.9453L9.86852 10.5H15C16.8459 10.5 18.0466 10.9608 18.7929 11.7071C19.5392 12.4534 20 13.6542 20 15.5V17.5H22V15.5C22 13.3459 21.4608 11.5466 20.2071 10.2929C18.9534 9.03923 17.1541 8.50001 15 8.50001H9.86852L12.8321 4.05471L11.1679 2.94531Z"
									fill="currentcolor"
								></path>
							</g>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M24 27.5H6V25.5H24V27.5Z"
								fill="currentcolor"
							></path>
							<defs>
								<clipPath id="clip0_5913_3909">
									<rect width="20" height="15" fill="white" transform="translate(5 2.5)"></rect>
								</clipPath>
							</defs>
						</svg>
					</div>
				</div>
				<div id="slider-next" class="arr-wr">
					<div class="h-slider--arr w-embed">
						<svg
							width="30"
							height="30"
							viewBox="0 0 30 30"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g clip-path="url(#clip0_5913_3914)">
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M18.8321 2.94531L22.8321 8.94531C23.056 9.28121 23.056 9.71881 22.8321 10.0547L18.8321 16.0547L17.1679 14.9453L20.1315 10.5H15C13.1541 10.5 11.9534 10.9608 11.2071 11.7071C10.4608 12.4534 10 13.6542 10 15.5L10 17.5H8L8 15.5C8 13.3459 8.53921 11.5466 9.79289 10.2929C11.0466 9.03923 12.8459 8.50001 15 8.50001H20.1315L17.1679 4.05471L18.8321 2.94531Z"
									fill="currentcolor"
								></path>
							</g>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M6 27.5H24V25.5H6V27.5Z"
								fill="currentcolor"
							></path>
							<defs>
								<clipPath id="clip0_5913_3914">
									<rect width="20" height="15" fill="white" transform="matrix(-1 0 0 1 25 2.5)"
									></rect>
								</clipPath>
							</defs>
						</svg>
					</div>
				</div>
			</div>
		</div>
		<div   class="swiper mod--home">
			<div class="swiper-wrapper mod-mob">

				<div class="swiper-slide mb-8">
					<div class="slide-item mod--fly">
						<img
							src="images/638dadf7b305ca08aceed13f_fly%20img.jpg"
							loading="eager"
							srcset="images/638dadf7b305ca08aceed13f_fly%2520img-p-500.jpg 500w, images/638dadf7b305ca08aceed13f_fly%20img.jpg 780w"
							sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, 390px"
							alt=""
							class="slider--img"
						/>
						<div class="h-slider--content mod--fly">
							<div>
								<div class="subhead-1">Mobile app</div>
								<div class="h-slider--subtitle">
									Easy to use mobile app that autonomously controls the drone to standardize
									outputs. Pilots simply supervise the flights. This means anyone with a suitable
									drone can participate.
								</div>
							</div>
						</div>
					</div>
				</div>
				
			</div>
		</div>
	</div>
</div> -->

<CookieCard />

<Hero />

<Welcome />

<!-- <div class="h-slider wf-section">
	<div class="container">
		<div class="h-slider--head">
			<h2 id="w-node-_3c53cdb5-3368-bde7-86d8-3a08b4da1eac-68eed0d6">
				Collect Imagery, Earn Rewards, Help the Planet
			</h2>
			<div id="w-node-_5db22972-f286-5764-175f-4151fe8b2a5f-68eed0d6" class="h-slider--pagin">
				<div id="slider-prev" class="arr-wr">
					<div class="h-slider--arr w-embed">
						<svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g clip-path="url(#clip0_5913_3909)">
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M11.1679 2.94531L7.16795 8.94531C6.94402 9.28121 6.94402 9.71881 7.16795 10.0547L11.1679 16.0547L12.8321 14.9453L9.86852 10.5H15C16.8459 10.5 18.0466 10.9608 18.7929 11.7071C19.5392 12.4534 20 13.6542 20 15.5V17.5H22V15.5C22 13.3459 21.4608 11.5466 20.2071 10.2929C18.9534 9.03923 17.1541 8.50001 15 8.50001H9.86852L12.8321 4.05471L11.1679 2.94531Z"
									fill="currentcolor"
								></path>
							</g>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M24 27.5H6V25.5H24V27.5Z"
								fill="currentcolor"
							></path>
							<defs>
								<clipPath id="clip0_5913_3909">
									<rect width="20" height="15" fill="white" transform="translate(5 2.5)"></rect>
								</clipPath>
							</defs>
						</svg>
					</div>
				</div>
				<div id="slider-next" class="arr-wr">
					<div class="h-slider--arr w-embed">
						<svg
							width="30"
							height="30"
							viewBox="0 0 30 30"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g clip-path="url(#clip0_5913_3914)">
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M18.8321 2.94531L22.8321 8.94531C23.056 9.28121 23.056 9.71881 22.8321 10.0547L18.8321 16.0547L17.1679 14.9453L20.1315 10.5H15C13.1541 10.5 11.9534 10.9608 11.2071 11.7071C10.4608 12.4534 10 13.6542 10 15.5L10 17.5H8L8 15.5C8 13.3459 8.53921 11.5466 9.79289 10.2929C11.0466 9.03923 12.8459 8.50001 15 8.50001H20.1315L17.1679 4.05471L18.8321 2.94531Z"
									fill="currentcolor"
								></path>
							</g>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M6 27.5H24V25.5H6V27.5Z"
								fill="currentcolor"
							></path>
							<defs>
								<clipPath id="clip0_5913_3914">
									<rect width="20" height="15" fill="white" transform="matrix(-1 0 0 1 25 2.5)"
									></rect>
								</clipPath>
							</defs>
						</svg>
					</div>
				</div>
			</div>
		</div>
		<div id="slider-home" class="swiper mod--home">
			<div class="swiper-wrapper mod-mob">
				<div class="swiper-slide mb-8">
					<div class="slide-item">
						<img
							src="images/638dadf7b305ca111aeed116_image.jpg"
							loading="eager"
							sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, 390px"
							srcset="images/638dadf7b305ca111aeed116_image-p-500.jpg 500w, images/638dadf7b305ca111aeed116_image.jpg 670w"
							alt=""
							class="slider--img"
						/>
						<div class="h-slider--content">
							<div>
								<div class="subhead-1">Organizations</div>
								<div class="h-slider--subtitle">
									If you need to monitor, analyze, or track physical infrastructure, buildings, or
									resources, we can help.
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="swiper-slide mb-8">
					<div class="slide-item slide-2">
						<img
							src="images/638dadf7b305cad65aeed115_image-1.jpg"
							loading="eager"
							sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, 390px"
							srcset="images/638dadf7b305cad65aeed115_image-1-p-500.jpg 500w, images/638dadf7b305cad65aeed115_image-1.jpg 670w"
							alt=""
							class="slider--img"
						/>
						<div class="h-slider--content">
							<div>
								<div class="subhead-1">Developers</div>
								<div class="h-slider--subtitle">
									Would your app or platform benefit from accessing ultra-high resolution,
									frequently updated Earth imagery?
								</div>
							</div>
							<div class="h-slider--link-wr">
								<a href="/careers#careers-form" class="link-arr w-inline-block">
									<div class="inline">If so, we'd like to hear from you</div>
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
					</div>
				</div>
				<div class="swiper-slide">
					<div class="slide-item slide-3">
						<img
							src="images/638dadf7b305cac2c1eed114_image-2.jpg"
							loading="eager"
							sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, 390px"
							srcset="images/638dadf7b305cac2c1eed114_image-2-p-500.jpg 500w, images/638dadf7b305cac2c1eed114_image-2.jpg 670w"
							alt=""
							class="slider--img"
						/>
						<div class="h-slider--content">
							<div>
								<div class="subhead-1">Data Partners</div>
								<div class="h-slider--subtitle">
									Would your clients benefit from accessing our imagery?
								</div>
							</div>
							<div class="h-slider--link-wr">
								<a
									data-w-id="57a9a975-6061-d5b3-09e7-b68cdf8b6c0b"
									href="#"
									class="link-arr w-inline-block"
								>
									<div class="inline">Get in touch</div>
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
					</div>
				</div>
			</div>
		</div>
	</div>
</div> -->

<Banner />

<!-- <Steps /> -->

<Technologies />

<Services />

<!-- <Projects /> -->

<!-- <FreeBlock /> -->

<Contact />

<Culture />

<Team />

<Faq />

<!-- <ContactForm /> -->

<CTA />

<Release />

<style lang="postcss">
</style>
