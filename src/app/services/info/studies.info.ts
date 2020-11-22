import { StudyField, study } from '../../studies-comp/studies.class';


export let studiesAreas: Array<StudyField> = [
	{
		id: 2,
		name: 'Programming'
	},
	{
		id: 1,
		name: 'Design'
	}
];

export let studiesList: Array<study> = [
	{
		id: 1,
		studyFieldID: 1,
		title: 'Visual Arts Degree',
		subject: 'Visual Arts',
		coursePath: 'http://www.fad.unam.mx/licenciatura_artes_visuales.php',
		courseImgPath: 'assets/studies/artvis.jpg',
		institution: 'FAD - UNAM',
		institutionImgPath: 'assets/studies/logofad.png',
		institutionURLPath: 'http://www.fad.unam.mx/',
		certificateAvailable: 0,
		certificateImgPath: '',
		teacher: ''
	},
	{
		id: 2,
		studyFieldID: 1,
		title: 'Responsive Design Course',
		subject: 'Web Design',
		coursePath: 'https://platzi.com/cursos/responsive-design/',
		courseImgPath: 'assets/studies/responsive.png',
		institution: 'Platzi',
		institutionImgPath: 'assets/studies/platzi.png',
		institutionURLPath: 'https://platzi.com/',
		certificateAvailable: 1,
		certificateImgPath: 'assets/studies/certificates/responsiveDesignCer.png',
		teacher: 'Leónidas Esteban'
	},
	{
		id: 3,
		studyFieldID: 2,
		title: 'Jquery in 30 days',
		subject: 'Jquery',
		coursePath: 'https://code.tutsplus.com/courses/30-days-to-learn-jquery',
		courseImgPath: 'assets/studies/jquery.png',
		institution: 'envatotuts+',
		institutionImgPath: 'assets/studies/envato.png',
		institutionURLPath: 'https://tutsplus.com/',
		certificateAvailable: 0,
		certificateImgPath: '',
		teacher: 'Jeffrey Way'
	},
	{
		id: 4,
		studyFieldID: 2,
		title: 'Getting Started with React.js',
		subject: 'React JS',
		coursePath: 'https://code.tutsplus.com/courses/getting-started-with-reactjs',
		courseImgPath: 'assets/studies/reactCourse.png',
		institution: 'envatotuts+',
		institutionImgPath: 'assets/studies/envato.png',
		institutionURLPath: 'https://tutsplus.com/',
		certificateAvailable: 0,
		certificateImgPath: '',
		teacher: 'David East'
	},
	{
		id: 5,
		studyFieldID: 2,
		title: 'Curso de HTML5 y CSS3',
		subject: 'HTML5 - CSS3',
		coursePath: 'https://platzi.com/clases/html-css3-2015/',
		courseImgPath: 'assets/studies/html.png',
		institution: 'Platzi',
		institutionImgPath: 'assets/studies/platzi.png',
		institutionURLPath: 'https://platzi.com/',
		certificateAvailable: 1,
		certificateImgPath: 'assets/studies/certificates/html5css3Cer.png',
		teacher: ''
	},
	{
		id: 6,
		studyFieldID: 2,
		title: 'Curso de programación básica',
		subject: 'Javascript',
		coursePath: 'https://platzi.com/clases/programacion-basica/',
		courseImgPath: 'assets/studies/programming.png',
		institution: 'Platzi',
		institutionImgPath: 'assets/studies/platzi.png',
		institutionURLPath: 'https://platzi.com/',
		certificateAvailable: 1,
		certificateImgPath: 'assets/studies/certificates/programacionBasicaCer.png',
		teacher: 'John Freddy Vega'
	},
	{
		id: 7,
		studyFieldID: 2,
		title: 'Curso de Javascript y Jquery',
		subject: 'Javascript - Jquery',
		coursePath: 'https://platzi.com/clases/javascript-jquery/',
		courseImgPath: 'assets/studies/jquery2.png',
		institution: 'Platzi',
		institutionImgPath: 'assets/studies/platzi.png',
		institutionURLPath: 'https://platzi.com/',
		certificateAvailable: 1,
		certificateImgPath: 'assets/studies/certificates/jsjqueryCer.png',
		teacher: 'Leónidas Esteban'
	},
	{
		id: 8,
		studyFieldID: 2,
		title: 'Building a Web App From Scratch With Angular JS',
		subject: 'Angular JS',
		coursePath: 'https://code.tutsplus.com/courses/building-a-web-app-from-scratch-with-angularjs',
		courseImgPath: 'assets/studies/angular.png',
		institution: 'envatotuts+',
		institutionImgPath: 'assets/studies/envato.png',
		institutionURLPath: 'https://tutsplus.com/',
		certificateAvailable: 0,
		certificateImgPath: '',
		teacher: 'Andrew Burgess'
	},
	{
		id: 9,
		studyFieldID: 1,
		title: 'Bootstrap 3 for Web Design',
		subject: 'Bootstrap',
		coursePath: 'https://code.tutsplus.com/courses/bootstrap-3-for-web-design',
		courseImgPath: 'assets/studies/bootstrap3.png',
		institution: 'envatotuts+',
		institutionImgPath: 'assets/studies/envato.png',
		institutionURLPath: 'https://tutsplus.com/',
		certificateAvailable: 0,
		certificateImgPath: '',
		teacher: 'Adi Purdila'
	},
	{
		id: 10,
		studyFieldID: 2,
		title: 'Angular 4 (formerly Angular 2)',
		subject: 'Angular 2',
		coursePath: 'https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/overview',
		courseImgPath: 'assets/studies/angular2.png',
		institution: 'udemy',
		institutionImgPath: 'assets/studies/udemy.png',
		institutionURLPath: 'https://www.udemy.com/',
		certificateAvailable: 0,
		certificateImgPath: '',
		teacher: 'Maximilian Schwarzmüller'
	},
	{
		id: 11,
		studyFieldID: 2,
		title: 'Curso Profesional de Git y Github',
		subject: 'Git - Github',
		coursePath: 'https://platzi.com/cursos/git-github',
		courseImgPath: 'assets/studies/gitgithub.png',
		institution: 'Platzi',
		institutionImgPath: 'assets/studies/platzi.png',
		institutionURLPath: 'https://platzi.com/',
		certificateAvailable: 0,
		certificateImgPath: '',
		teacher: ''
	},
	{
		id: 12,
		studyFieldID: 2,
		title: 'PHP Fundamentals',
		subject: 'PHP',
		coursePath: 'https://code.tutsplus.com/courses/php-fundamentals',
		courseImgPath: 'assets/studies/php.png',
		institution: 'envatotuts+',
		institutionImgPath: 'assets/studies/envato.png',
		institutionURLPath: 'https://tutsplus.com/',
		certificateAvailable: 0,
		certificateImgPath: '',
		teacher: 'Jeffrey Way'
	}
];