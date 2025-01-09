<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'

	// добавить иконки с соц.сетями из футера
	const team = [
		// {
		// 	img: '/images/team/pawel.webp',
		// 	bio: 'Lorem Ipsum',
		// 	link: '/',
		// 	role: 'CEO',
		// 	facebook: '',
		// 	linkedin: ''
		// },
		{
			img: '/images/team/1.jpg',
			bio: 'Anna Kowalska',
			link: '/',
			role: 'Data Scientist',
			facebook: '',
			linkedin: ''
		},
		{
			img: '/images/team/2.jpg',
			bio: 'Grzegorz Wiśniewski',
			link: '/',
			role: 'Inżynier automatyzacji procesów',
			facebook: '',
			linkedin: ''
		},
		{
			img: '/images/team/3.jpg',
			bio: 'Maria Wiśniewska',
			link: '/',
			role: 'Specjalista ds. analizy danych',
			facebook: '',
			linkedin: ''
		},
		{
			img: '/images/team/4.jpg',
			bio: 'Katarzyna Nowicka',
			link: '/',
			role: 'Kierownik projektu',
			facebook: '',
			linkedin: ''
		},
		{
			img: '/images/team/7.jpg',
			bio: 'Tomasz Jabłoński',
			link: '/',
			role: 'Programista Python',
			facebook: '',
			linkedin: ''
		},
		{
			img: '/images/team/8.jpg',
			bio: 'Łukasz Lewandowski',
			link: '/',
			role: 'Inżynier systemów dronowych',
			facebook: '',
			linkedin: ''
		},
		{
			img: '/images/team/9.jpg',
			bio: 'Michał Wróbel',
			link: '/',
			role: 'Tester oprogramowania',
			facebook: '',
			linkedin: ''
		},
		{
			img: '/images/team/10.jpg',
			bio: 'Paweł Stępień',
			link: '/',
			role: 'Inżynier robotyki',
			facebook: '',
			linkedin: ''
		},
		{
			img: '/images/team/11.jpg',
			bio: 'Adrian Król',
			link: '/',
			role: 'Inżynier robotyki',
			facebook: '',
			linkedin: ''
		},
		// {
		// 	img: '/images/team/4.jpg',
		// 	bio: 'Lorem Ipsum',
		// 	link: '/',
		// 	role: 'CEO',
		// 	facebook: '',
		// 	linkedin: ''
		// },
		// {
		// 	img: '/images/team/4.jpg',
		// 	bio: 'Lorem Ipsum',
		// 	link: '/',
		// 	role: 'CEO',
		// 	facebook: '',
		// 	linkedin: ''
		// }
	];
</script>

<div class="sec-128-56">
	<div class="container-small mod-csreers">
		<h2>Nasza ekipa</h2>
		<img
			src="images/team/culture.webp"
			loading="eager"
			sizes="(max-width: 479px) 92vw, (max-width: 991px) 95vw, 930px"
			alt=""
			class="c-culture--video"
		/>
		<div class="c-culture--rich w-richtext">
			<p>
				Na czele zespołu DronPilot stoi Paweł Wojciechowski, lider z ponad 20-letnim doświadczeniem
				w obszarach transformacji cyfrowej i optymalizacji procesów biznesowych. Jego kariera
				obejmuje kluczowe stanowiska w globalnych firmach, takich jak T-Mobile Polska, TeamViewer i
				OpenText, gdzie wyróżnił się wdrażaniem nowoczesnych technologii i rozwojem rynków
				regionalnych.
			</p>
			<p>
				Pasjonat nowych technologii i certyfikowany pilot dronów, Paweł łączy swoje doświadczenie
				zawodowe z osobistym zaangażowaniem w eksplorowanie innowacji, które definiują przyszłość.
			</p>
		</div>
	</div>
</div>

<!-- <div class="sec-128-56"> -->
	<div class="container-small">
		<!-- <h2>Nasz zespół</h2> -->
		 <!-- mt-56 -->
		<div class="w-dyn-list ">
			<div role="list" class="c-culture--teams w-dyn-items">
				{#each team as member}
					<div role="listitem" class="w-dyn-item">
						<img
							alt={member.bio}
							loading="eager"
							src={member.img}
							sizes="(max-width: 479px) 44vw, (max-width: 767px) 46vw, (max-width: 991px) 42vw, 299.34375px"
							class="c-culture--teams-img"
						/>
						<div class="c-culture--teams-bootom">
							<div>{member.bio}</div>
							<div class="a-team--slide-position">{member.role}</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
<!-- </div> -->

<style lang="postcss">
</style>
