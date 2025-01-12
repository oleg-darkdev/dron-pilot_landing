<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities''

	const tech = [
		{
			title: 'AR (Rozszerzona rzeczywistość)',
			icon: 'images/638dadf7b305ca8aa7eed12a_ico%202.png',
			shortDesc:
				'Technologie rozszerzonej rzeczywistości do wizualizacji danych, rozwiązań interaktywnych i poprawy doświadczeń użytkownika.'
		},
		{
			title: 'AI (Sztuczna inteligencja)',
			icon: 'images/638dadf7b305ca8aa7eed12a_ico%202.png',
			shortDesc:
				'Wykorzystanie sztucznej inteligencji do analizy danych, automatyzacji procesów i tworzenia inteligentnych rozwiązań.'
		},
		{
			title: 'DRON',
			icon: 'images/638dadf7b305ca8aa7eed12a_ico%202.png',
			shortDesc:
				'Zaawansowane technologie dronów do monitorowania, filmowania i zbierania danych w czasie rzeczywistym.'
		},
		{
			title: 'NFC (Near Field Communication)',
			icon: 'images/638dadf7b305ca8aa7eed12a_ico%202.png',
			shortDesc:
				'Technologie komunikacji bliskiego zasięgu do bezpiecznego przesyłania danych i wygodnej interakcji między urządzeniami.'
		},
		{
			title: 'RFID (Radio-Frequency Identification)',
			icon: 'images/638dadf7b305ca8aa7eed12a_ico%202.png',
			shortDesc:
				'Systemy identyfikacji i zarządzania oparte na znacznikach radiowych do efektywnej kontroli zasobów.'
		},
		{
			title: 'IoT (Internet Rzeczy)',
			icon: 'images/638dadf7b305ca8aa7eed12a_ico%202.png',
			shortDesc:
				'Sieci inteligentnych urządzeń do automatyzacji, monitorowania i zarządzania procesami w czasie rzeczywistym.'
		}
	];
</script>

<a name="technologie"></a>

<section class="h-seq wf-section">
	<div class="container">
		<div class="h-seq-title">
			<div class="text-wr-wr">
				<div class="text-wr--h2">
					<h2 class="h2 mod--textgrad">Technologie, których używamy.</h2>
				</div>
			</div>
		</div>
		<div class="h-seq--inner">
			<!-- 					src="images/638dadf7b305ca8aa7eed12a_ico%202.png"
 -->
			<!-- 					src="images/638dadf7b305caa40ceed128_ico.png"
 -->
			<!-- 					src="images/638dadf7b305ca59bbeed129_ico%203.png"
 -->
			{#each tech as { title, icon, shortDesc }}
				<div class="h-seq--item">
					<img src={icon} qloading="eager" alt="" class="h-seq--ico" />
					<div class="subhead-3">
						{title}
					</div>
					<div class="subhead-3">
						{shortDesc}
					</div>
				</div>
			{/each}
		</div>
	</div>
	<img
		src="images/638dadf7b305ca170beed130_block-easy-to-join.jpg"
		loading="eager"
		srcset="images/638dadf7b305ca170beed130_block-easy-to-join-p-500.jpg 500w, images/638dadf7b305ca170beed130_block-easy-to-join-p-800.jpg 800w, images/638dadf7b305ca170beed130_block-easy-to-join-p-1080.jpg 1080w, images/638dadf7b305ca170beed130_block-easy-to-join-p-1600.jpg 1600w, images/638dadf7b305ca170beed130_block-easy-to-join-p-2000.jpg 2000w, images/638dadf7b305ca170beed130_block-easy-to-join.jpg 2800w"
		sizes="(max-width: 767px) 100vw, (max-width: 991px) 96vw, 100vw"
		alt=""
		class="h-seq--bg"
	/>
	<div id="sequence-w" class="h-seq--embed w-embed w-script">
		<canvas id="main-animations"></canvas>
		<!-- <script async="" src="https://assets.website-files.com/6370d47a2c89f708dcaaef22/63752fa67eb10bf077e9e95a_spexiSeq.js.txt" type="text/javascript"></script> -->
	</div>
</section>

<style lang="postcss">
</style>
