import type { NavigationLink, SiteContent, SiteMeta } from "~/types/portfolio";

export const siteMeta: SiteMeta = {
	lang: "es",
	title: "Juan José Rebollo | Líder de Ingeniería",
	shortTitle: "Juan José Rebollo Barranco",
	description:
		"Líder de Ingeniería con más de 10 años en desarrollo iOS y más de 7 años en liderazgo técnico. Especializado en arquitectura mobile, equipos distribuidos y entrega empresarial.",
	cvHref: "/Juan_Rebollo_CV.pdf",
};

export const navigationLinks: NavigationLink[] = [
	{ label: "Habilidades", href: "/es/#skills" },
	{ label: "Proyectos", href: "/es/#projects" },
	{ label: "Vídeos", href: "/es/work" },
	{ label: "Fortalezas", href: "/es/#strengths" },
	{ label: "Recomendaciones", href: "/es/#recommendations" },
	{ label: "Contacto", href: "/es/#contact" },
];

export const siteContent: SiteContent = {
	hero: {
		eyebrow: "Líder de Ingeniería",
		title: "Haciendo crecer equipos de ingeniería, elevando el nivel de arquitectura y entregando escaladamente.",
		summary:
			"Líder de Ingeniería con más de 10 años en desarrollo iOS y más de 7 años en roles de liderazgo técnico y arquitectura. Historial probado liderando equipos distribuidos en España, Reino Unido e India — definiendo estrategia mobile, entregando aplicaciones empresariales en entornos altamente regulados y diseñando arquitecturas mantenibles, testeables y construidas para durar.",
		primaryAction: { label: "Ver proyectos destacados", href: "#projects" },
		secondaryAction: { label: "Contáctame", href: "#contact" },
		metrics: [
			{ value: "10+", label: "Años en desarrollo iOS" },
			{ value: "7+", label: "Años en liderazgo técnico y arquitectura" },
			{ value: "13", label: "Ingenieros liderados en equipos distribuidos" },
			{ value: "40+", label: "Mercados alcanzados con InControl Remote" },
			{ value: "3", label: "Idiomas — Español, Inglés, Portugués" },
		],
	},
	skillGroups: [
		{
			name: "Ingeniería iOS",
			summary:
				"Amplia experiencia en iOS nativo, desde integración de bajo nivel hasta UI declarativa moderna, aplicada consistentemente en producción escalada.",
			skills: ["Swift", "SwiftUI", "Combine", "watchOS", "MVVM-C", "VIPER", "Arquitectura Modular", "Arquitectura Limpia", "SOLID", "Diseño REST API"],
		},
		{
			name: "Entrega y DevOps",
			summary:
				"Responsabilidad end-to-end de workflows y pipelines de entrega, desde decisiones de arquitectura hasta automatización de releases y seguridad empresarial.",
			skills: ["GitHub Actions", "Jenkins", "GitLab", "Fastlane", "TDD / BDD / ATDD", "Scrum", "Kanban", "SAFe", "Modelo Spotify", "MDM / MAM / Intune"],
		},
		{
			name: "Liderazgo y Estrategia",
			summary:
				"Construcción y escalado de equipos de ingeniería, establecimiento de comunidades técnicas y alineación de la capacidad mobile con los objetivos de negocio.",
			skills: ["Chapter Lead", "Gestión de Personas", "Mentoría", "Desarrollo de Carrera", "Estrategia Mobile", "Alineación Interfuncional", "Revisiones de Arquitectura"],
		},
	],
	projectHighlights: [
		{
			name: "Inditex — iOS Chapter Lead y Arquitecto",
			summary:
				"Lideré la capacidad iOS en la región SPAI (España, Portugal, Italia) en Cognizant, mentorizando a 12 ingenieros senior mientras lideraba simultáneamente un equipo de 5 ingenieros en Inditex, construyendo una nueva app desde cero.",
			impact:
				"Diseñé una arquitectura MVVM-C modular en SwiftUI y Combine que mejoró la velocidad de desarrollo mediante patrones reutilizables y redujo el tiempo de onboarding a través de documentación estructurada y registros de decisiones de arquitectura.",
			stack: ["SwiftUI", "Combine", "MVVM-C", "Arquitectura Modular", "GitHub Actions", "API-first Design", "Azure DevOps"],
		},
		{
			name: "HSBC — Arquitecto iOS, Mobile Centre of Excellence",
			summary:
				"Me incorporé al CoE de Mobile Empresarial de HSBC como Experto en Materia iOS (SME), responsable de la gobernanza de arquitectura en múltiples equipos en un entorno bancario altamente regulado.",
			impact:
				"Diseñé la arquitectura iOS empresarial de plantilla adoptada por todos los equipos, eliminando boilerplate y estandarizando el desarrollo. Definí patrones de seguridad mobile integrados con Intune, Zimperium y BlackBerry UEM.",
			stack: ["MVVM-C", "Clean Architecture", "SOLID", "Intune", "BlackBerry UEM", "Zimperium", "UML"],
		},
		{
			name: "Jaguar Land Rover — Apps InControl Remote",
			summary:
				"Lideré el rediseño de las apps InControl Remote de Land Rover y Jaguar desde cero como Líder Técnico iOS, gestionando un equipo distribuido de 8-13 ingenieros en Reino Unido, Bielorrusia e India.",
			impact:
				"Entregué una arquitectura escalable con soporte para releases en más de 40 mercados. Construí pipelines CI/CD, introduje prácticas BDD y ATDD y lideré la entrega end-to-end incluyendo integración de backend y app.",
			stack: ["Swift", "Objective-C", "Jenkins", "GitLab", "Fastlane", "Firebase", "WebSockets", "SAFe", "BDD"],
		},
	],
	strengths: [
		{
			title: "Liderazgo Técnico",
			evidence:
				"Lideré equipos distribuidos de hasta 13 ingenieros en múltiples zonas horarias en JLR, y definí la estrategia del Chapter iOS para toda una región en Cognizant — equilibrando el trabajo de arquitectura hands-on con el crecimiento de personas y la responsabilidad de entrega.",
		},
		{
			title: "Alineación Interfuncional",
			evidence:
				"Constantemente conecté las disciplinas mobile, backend, producto y seguridad. En HSBC, trabajé con el arquitecto Android para asegurar la paridad. En Inditex, facilité sesiones de 3 Amigos y Example Mapping para alinear negocio e ingeniería antes de escribir una línea de código.",
		},
		{
			title: "Mentoría y Crecimiento de Equipo",
			evidence:
				"Construí procesos de onboarding estructurados en JLR, HSBC, Cognizant e Inditex, definí planes de carrera y crecimiento en Cognizant, y establecí comunidades iOS internas con talleres técnicos, intercambio de conocimiento y revisiones de arquitectura.",
		},
	],
	recommendations: {
		source: "Recomendaciones de LinkedIn",
		sourceUrl: "https://www.linkedin.com/in/juan-jose-rebollo-barranco-80655929/?locale=en",
		items: [
			{
				author: "Elena Becerril",
					headline: "Responsable del Digital Engineering Studio Iberia en Cognizant",
					date: "28 de abril de 2026",
				quote:
						"Trabajar con Juanjo durante estos años ha sido un auténtico placer. Es de esos profesionales que realmente dejan huella en todas las personas con las que trabajan. Lo que diferencia a Juanjo es la combinación de una profunda experiencia técnica con unas habilidades blandas extraordinarias. No solo cumple con su trabajo: asume plena responsabilidad de todo lo que toca, anticipa los retos antes de que aparezcan y aporta una energía serena y fiable que mejora a los equipos a su alrededor. Si Juanjo forma parte de un proyecto, el éxito no es un objetivo, es una garantía. No podría recomendarlo más.",
			},
			{
				author: "Jaihind Patil",
					headline: "Test Lead en Endava",
					date: "16 de noviembre de 2022",
				quote:
						"Tuve el placer de trabajar con Juan en HSBC, colaborando en equipos de proyecto. Su experiencia en desarrollo y arquitectura iOS facilitó mucho la entrega. Me impresionó especialmente su capacidad para afrontar incluso los problemas más complejos con aparente facilidad. Esa habilidad suele requerir años, pero en él parecía completamente natural. Juan sería un gran valor para cualquier equipo.",
			},
			{
				author: "Zbigniew Niewiadomski",
					headline: "Lead Scrum Master | SimCorp",
					date: "8 de noviembre de 2022",
				quote:
						"Sus excelentes habilidades en iOS y arquitectura, junto con su experiencia en Android, le permitieron liderar el equipo como arquitecto y mentor. Es muy fácil trabajar con Juan: resuelve conflictos con rapidez y comunica muy bien, tanto al reconocer logros como al señalar problemas cuando corresponde. Recomiendo a Juan totalmente; fue un gran placer trabajar juntos.",
			},
			{
				author: "Marcin Arciszewski",
					headline: "Ex-Big 4 | Ingeniero Android Senior | Kotlin | Jetpack Compose | Arquitectura Android",
					date: "10 de enero de 2022",
				quote:
						"Tuve el placer de trabajar con Juan durante un tiempo. Es un líder técnico entusiasta y orientado al detalle, con grandes habilidades humanas y una sólida experiencia técnica en desarrollo iOS. Es un verdadero ingeniero SOLID, siempre defendiendo arquitectura limpia, testing, calidad y dispuesto a ir un paso más allá para automatizarlo. Es muy cercano y un gran compañero de equipo. Totalmente recomendable trabajar con él.",
			},
			{
				author: "Keith Bauwise",
					headline: "Responsable de Ingeniería de Software",
					date: "26 de julio de 2021",
				quote:
						"Juan Rebollo es un desarrollador iOS senior que desempeña el rol de iOS Platform Technical Lead en el desarrollo de las apps móviles InControl Remote de Jaguar y Land Rover. Su conocimiento profundo de nuestros productos y su comprensión integral de la plataforma iOS lo han convertido en un activo de enorme valor para la organización. Juan tiene una atención al detalle excepcional y un enfoque muy orientado a datos. Posee excelentes habilidades de comunicación oral y escrita, y se comunica eficazmente en todos los niveles, incluida la alta dirección. Tiene una actitud de verdadero 'sí se puede' que resulta inspiradora y contagiosa. Cualquier organización se beneficiaría de alguien del nivel de Juan. Siempre cumple, está totalmente centrado en el cliente y es extremadamente fiable.",
			},
		],
	},
	contact: {
		email: "jj.rebollo.barranco@gmail.com",
		availability:
			"Abierto a roles de Head of Mobile, Solutions Architect, Technical Lead y Principal Engineer. En España — abierto a trabajo remoto e híbrido en Europa y Reino Unido.",
		links: [
			{ label: "LinkedIn", href: "https://www.linkedin.com/in/juan-jose-rebollo-barranco-80655929" },
			{ label: "GitHub", href: "https://github.com/jjrebollo" },
			{ label: "Descargar CV", href: "/Juan_Rebollo_CV.pdf", download: true },
		],
	},
	labels: {
		skills: {
			eyebrow: "Capacidades",
			title: "Lo que aporto",
			intro: "Desde ingeniería iOS nativa hasta pipelines de entrega y liderazgo de equipos — habilidades construidas y probadas en producción.",
		},
		projects: {
			eyebrow: "Trabajo seleccionado",
			title: "Proyectos destacados",
			intro: "Una selección de roles en los que fui responsable tanto de la arquitectura como del resultado.",
		},
		strengths: {
			eyebrow: "Habilidades blandas",
			title: "Cómo trabajo",
			intro: "Los comportamientos y prácticas que definen cómo lidero equipos y tomo decisiones técnicas.",
		},
		recommendations: {
			eyebrow: "LinkedIn",
			title: "Recomendaciones",
			intro: "Respaldo seleccionado de colegas y colaboradores en LinkedIn.",
		},
		contact: {
			eyebrow: "Contacto",
			title: "Hablemos",
			intro: "Si estás escalando un equipo de mobile, elevando el nivel de arquitectura o necesitas a alguien que se responsabilice de la entrega end-to-end — estaré encantado de conectar.",
		},
		work: {
			eyebrow: "Proyectos en acción",
			title: "Proyectos en vídeo",
			intro: "Grabaciones de aplicaciones que construí o lideré como Technical Leader — desde la suite InControl de JLR hasta la plataforma logística de Inditex.",
		},
		recommendationsViewProfile: "Ver perfil",
		recommendationsMore: "Más...",
		recommendationsLess: "Menos...",
		recommendationsEmptyState: "LinkedIn bloquea el acceso público a las recomendaciones, así que esta sección está lista para mostrarlas en cuanto se añadan a los datos del portfolio.",
		findMeOn: "Encuéntrame en",
		downloadCv: "Descargar CV",
		footerTagline: "Líder de Ingeniería · iOS · Arquitectura Mobile",
		footerSource: "Desarrollado con Astro · Ver código",
	},
	videoGroups: [
		{
			project: "Inditex — App de Logística",
			description: "Aplicación logística interna entregada para Inditex como iOS Technical Lead, construida desde cero con arquitectura MVVM-C en SwiftUI.",
			anchor: "inditex",
			videos: [
				{ id: "KhEWEwIBTGQ", title: "Inditex Logistics App — Demo" },
			],
		},
		{
			project: "Jaguar Land Rover — InControl Remote App v2",
			description: "La siguiente generación de la app InControl Remote, con arquitectura rediseñada, nuevas funcionalidades y soporte para nuevas plataformas de vehículos.",
			anchor: "incontrol-v2",
			videos: [
				{ id: "mglk6Jbu23w", title: "InControl Remote App v2 — Overview" },
				{ id: "iuvHfmDIp-E", title: "InControl Remote App v2 — Demo" },
			],
		},
		{
			project: "Jaguar Land Rover — InControl Remote Watch App",
			description: "La app watchOS complementaria para la plataforma InControl Remote, desarrollada junto a la app iOS.",
			anchor: "incontrol-watch",
			videos: [
				{ id: "fkoPquBFM9E", title: "InControl Remote Watch App", isShort: true },
				{ id: "coHJIC9D1pQ", title: "InControl Remote Watch App — Demo" },
			],
		},
		{
			project: "Jaguar Land Rover — InControl Remote App v1",
			description: "Vídeos de demostración de la primera redeveloper de las apps InControl Remote de Land Rover y Jaguar, lanzadas en más de 40 mercados.",
			anchor: "incontrol-v1",
			videos: [
				{ id: "ZzN4pZpO-a8", title: "InControl Remote App v1 — Overview" },
				{ id: "oy3ufw3dYj8", title: "InControl Remote App v1 — Demo" },
				{ id: "4VhGbQQz2ks", title: "InControl Remote App v1 — Features" },
				{ id: "FtU6g8TtvgM", title: "InControl Remote App v1 — Walkthrough" },
			],
		},
	],
};
