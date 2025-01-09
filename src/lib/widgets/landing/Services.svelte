<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities';

	const services = [
		{
			title: 'Lorem Ipsum jest tekstem stosowanym.',
			shortDesc:
				'Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków później zaczął być używany przemyśle elektronicznym, pozostając praktycznie niezmienionym.',
			img: 'images/638dadf7b305ca2b46eed134_top-gradient.jpg'
		},
		{
			title: 'Lorem Ipsum jest tekstem stosowanym.',
			shortDesc:
				'Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków później zaczął być używany przemyśle elektronicznym, pozostając praktycznie niezmienionym.',
			img: 'images/638dadf7b305ca2b46eed134_top-gradient.jpg'
		},
		{
			title: 'Lorem Ipsum jest tekstem stosowanym.',
			type: 'Lorem Ipsum',

			shortDesc:
				'Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków później zaczął być używany przemyśle elektronicznym, pozostając praktycznie niezmienionym.',
			img: 'images/638dadf7b305ca2b46eed134_top-gradient.jpg'
		},
		{
			title: 'Lorem Ipsum jest tekstem stosowanym.',
			type: 'Lorem Ipsum',

			shortDesc:
				'Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków później zaczął być używany przemyśle elektronicznym, pozostając praktycznie niezmienionym.',
			img: 'images/638dadf7b305ca2b46eed134_top-gradient.jpg'
		},
		{
			title: 'Lorem Ipsum jest tekstem stosowanym.',
			type: 'Lorem Ipsum',

			shortDesc:
				'Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków później zaczął być używany przemyśle elektronicznym, pozostając praktycznie niezmienionym.',
			img: 'images/638dadf7b305ca2b46eed134_top-gradient.jpg'
		},
		{
			title: 'Lorem Ipsum jest tekstem stosowanym.',
			type: 'Lorem Ipsum',

			shortDesc:
				'Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków później zaczął być używany przemyśle elektronicznym, pozostając praktycznie niezmienionym.',
			img: 'images/638dadf7b305ca2b46eed134_top-gradient.jpg'
		}
	];
</script>

<div class="f-drone wf-section">
	<img
		src="images/638dadf7b305ca5a08eed132_drone7.png"
		loading="eager"
		srcset="images/638dadf7b305ca5a08eed132_drone7-p-500.png 500w, images/638dadf7b305ca5a08eed132_drone7-p-800.png 800w, images/638dadf7b305ca5a08eed132_drone7-p-1080.png 1080w, images/638dadf7b305ca5a08eed132_drone7.png 1786w"
		sizes="(max-width: 479px) 100vw, (max-width: 767px) 335px, (max-width: 991px) 100vw, 893px"
		alt=""
		class="f-drone--img"
	/>
	<div class="container-small">
		<div class="f-drone--content">
			<div class="text-wr-wr max-w-722">
				<div class="text-wr--h2">
					<h2 class="h2">Latać, by zarabiać.</h2>
				</div>
			</div>
			<div class="subhead-3 mt-8">
				Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym.
				<!-- Earn rewards for collecting Earth imagery with your drone. The imagery you help collect will
				enable better decision making by organizations everywhere. -->
			</div>
			<a href="/" class="link-arr w-inline-block">
				<div class="inline">Lorem Ipsum jest tekstem stosowanym.</div>
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

<div class="sec-96 wf-section">
	<div class="container-small">
		<div class="f-card--inner">
			{#each services as service}
				<div class="f-card--wr">
					<div class="f-card--line">
						<img
							src={service.img}
							loading="eager"
							srcset="images/638dadf7b305ca2b46eed134_top-gradient-p-500.jpg 500w, images/638dadf7b305ca2b46eed134_top-gradient-p-800.jpg 800w, images/638dadf7b305ca2b46eed134_top-gradient.jpg 934w"
							sizes="(max-width: 767px) 100vw, (max-width: 991px) 87vw, 930px"
							alt=""
							class="f-card--line-bg"
						/>
					</div>
					<div class="f-card--item">
						<div class="f-card--content">
							<div class="caption">
								<!--Lorem Ipsum jest tekstem  -->
								<!-- Fly for Fun -->
								Lorem Ipsum jest tekstem
							</div>
							<div class="subhead-1 mt-16">{service.title}</div>
							<div class="f-card--text">
								<!-- To start, pilots will earn points for missions flown, imagery collected, and for
							referring other pilots. See how you stack up with other pilots and watch as your
							efforts fill in a map of your area with high resolution imagery. -->
								{service.shortDesc}
							</div>
						</div>
						<div class="f-card--img-wr">
							<img
								src="images/638dadf7b305ca6e12eed15b_Fly%20for%20Fun.png"
								loading="lazy"
								srcset="images/638dadf7b305ca6e12eed15b_Fly%2520for%2520Fun-p-500.png 500w, images/638dadf7b305ca6e12eed15b_Fly%2520for%2520Fun-p-800.png 800w, images/638dadf7b305ca6e12eed15b_Fly%2520for%2520Fun-p-1080.png 1080w, images/638dadf7b305ca6e12eed15b_Fly%20for%20Fun.png 1484w"
								sizes="(max-width: 767px) 100vw, (max-width: 991px) 65vw, 697.5px"
								alt=""
								class="f-card--img mod--1"
							/>
						</div>
					</div>
				</div>
			{/each}
			<!-- <div class="f-card--wr">
				<div class="f-card--line">
					<img
						src="images/638dadf7b305caed75eed13c_top-gradient%202.png"
						loading="eager"
						srcset="images/638dadf7b305caed75eed13c_top-gradient%25202-p-500.png 500w, images/638dadf7b305caed75eed13c_top-gradient%25202-p-800.png 800w, images/638dadf7b305caed75eed13c_top-gradient%202.png 934w"
						sizes="(max-width: 767px) 100vw, (max-width: 991px) 87vw, 930px"
						alt=""
						class="f-card--line-bg"
					/>
				</div>
				<div class="f-card--item mod-left">
					<div class="f-card--img-wr">
						<img
							src="images/638dadf7b305ca761feed135_f%20image%202.png"
							loading="lazy"
							srcset="images/638dadf7b305ca761feed135_f%2520image%25202-p-500.png 500w, images/638dadf7b305ca761feed135_f%2520image%25202-p-800.png 800w, images/638dadf7b305ca761feed135_f%20image%202.png 934w"
							sizes="(max-width: 767px) 100vw, (max-width: 991px) 44vw, 465px"
							alt=""
							class="f-card--img mod-2"
						/>
					</div>
					<div class="f-card--content">
						<div class="caption">Fly to Contribute</div>
						<div class="subhead-1 mt-16">Help the world make better decisions</div>
						<div class="f-card--text">
							The data you collect with your drone is a valuable asset. To make it up to you, we
							will offer points for each mission you complete. They turn into $SPEXI tokens, which
							you can use for your future crypto transactions. Win-win.
						</div>
					</div>
				</div>
			</div>
			<div class="f-card--wr">
				<div class="f-card--line">
					<img
						src="images/638dadf7b305cac03deed137_top-gradient%203.png"
						loading="eager"
						srcset="images/638dadf7b305cac03deed137_top-gradient%25203-p-500.png 500w, images/638dadf7b305cac03deed137_top-gradient%25203-p-800.png 800w, images/638dadf7b305cac03deed137_top-gradient%203.png 934w"
						sizes="(max-width: 767px) 100vw, (max-width: 991px) 87vw, 930px"
						alt=""
						class="f-card--line-bg"
					/>
				</div>
			</div> -->

			<div class="f-drone--wr">
				<div class="f-start wf-section">
					<div class="container-small">
						<div class="f-start-inner">
							<h2>Jak to dziala</h2>
							<div class="f-start--grid">
								<div class="f-start--item">
									<div class="caption">01</div>
									<div class="subhead-3">
										Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia
										tekstem próbnej książki. 
									</div>
								</div>
								<div class="f-start--item">
									<div class="caption">02</div>
									<div class="subhead-3">
										Pięć wieków później zaczął być używany przemyśle
										elektronicznym, pozostając praktycznie niezmienionym.
									</div>
								</div>
								<div class="f-start--item">
									<div class="caption">03</div>
									<div class="subhead-3">
										Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia
										tekstem próbnej książki. 
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
</style>
