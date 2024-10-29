const boardgame = {
	id: 5,
	title: 'Health puzzle',
	linkLanding: 'https://health-puzzle.vercel.app/',
	linkApp: '/',
	promoVideo: '',
	github: 'https://github.com/oleg-darkdev/health_puzzle_app',
	icon: '/images/icons/health_puzzle.svg',
	logo: '/images/logos/health_puzzle.svg',
	logoDark: '/images/logos/health_puzzle_black.svg',
	iconDark: '/images/icons/health_puzzle_black.svg',
	logoWhite: '/images/logos/health_puzzle.svg',
	iconWhite: '/images/icons/health_puzzle.svg',

	iconUrl:
		'https://raw.githubusercontent.com/oleg-darkdev/puzzle-management_app/refs/heads/main/static/images/icons/health_puzzle.svg',
	logoUrl:
		'https://raw.githubusercontent.com/oleg-darkdev/puzzle-management_app/refs/heads/main/static/images/logos/health_puzzle.svg',
	logoDarkUrl:
		'https://raw.githubusercontent.com/oleg-darkdev/puzzle-management_app/refs/heads/main/static/images/logos/health_puzzle_black.svg',
	iconDarkUrl:
		'https://raw.githubusercontent.com/oleg-darkdev/puzzle-management_app/refs/heads/main/static/images/icons/health_puzzle_black.svg',
	logoWhiteUrl:
		'https://raw.githubusercontent.com/oleg-darkdev/puzzle-management_app/refs/heads/main/static/images/logos/health_puzzle.svg',
	iconWhiteUrl:
		'https://raw.githubusercontent.com/oleg-darkdev/puzzle-management_app/refs/heads/main/static/images/icons/health_puzzle.svg',

	freeValueForReplace: '',
	miniFaq: '',
	api: 'https://puzzle-management.vercel.app/api/health-puzzle',
	progress: { app: 0, boardgame: 0, landing: 0 },
	tags: [
		'Retrospektywa',
		'Informacja zwrotna',
		'Diagnoza problemów',
		'Klimat w zespole',
		'Otwartość zespołu'
	],
	type: 'Kooperacyjna gra edukacyjna',
	age: '12+',
	features: [
		{
			title: 'Lorem Ipsum has',
			desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer."
		},
		{
			title: 'Lorem Ipsum has',
			desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer."
		},
		{
			title: 'Lorem Ipsum has',
			desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer."
		}
	],
	amountPlayers: {
		min: 3,
		max: 12
	},
	durationGame: {
		min: 20,
		max: 80
	},
	durationWorkshop: {
		min: 40,
		max: 100
	},
	pricing: {
		box: '40',
		subscription: '8'
	},
	shortDesc: 'Gra edukacyjna o systematycznym podejściu do poprawy kondycji I klimatu w zespole.',
	desc: [
		'',
		'',
		"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
	],
	gallery: [
		{ caption: '', img: '' },
		{ caption: '', img: '' },
		{ caption: '', img: '' },
		{ caption: '', img: '' },
		{ caption: '', img: '' }
	]
};

export default boardgame;
