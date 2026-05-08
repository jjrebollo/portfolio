import type { NavigationLink, SiteContent, SiteMeta } from "../types/portfolio";

export const siteMeta: SiteMeta = {
	lang: "pt",
	title: "Juan José Rebollo | Líder de Engenharia",
	shortTitle: "Juan José Rebollo Barranco",
	description:
		"Líder de Engenharia com mais de 10 anos em desenvolvimento iOS e mais de 7 anos em liderança técnica. Especializado em arquitetura mobile, equipas distribuídas e entrega empresarial.",
	cvHref: "/cv.pdf",
};

export const navigationLinks: NavigationLink[] = [
	{ label: "Competências", href: "#skills" },
	{ label: "Projetos", href: "#projects" },
	{ label: "Pontos Fortes", href: "#strengths" },
	{ label: "Contacto", href: "#contact" },
];

export const siteContent: SiteContent = {
	hero: {
		eyebrow: "Líder de Engenharia",
		title: "Desenvolvendo equipas de engenharia, elevando o nível de arquitetura e entregando à escala.",
		summary:
			"Líder de Engenharia com mais de 10 anos em desenvolvimento iOS e mais de 7 anos em funções de liderança técnica e arquitetura. Historial comprovado a liderar equipas distribuídas em Espanha, Reino Unido e Índia — definindo estratégia mobile, entregando aplicações empresariais em ambientes altamente regulados e desenhando arquiteturas mantíveis, testáveis e construídas para durar.",
		primaryAction: { label: "Ver trabalho em destaque", href: "#projects" },
		secondaryAction: { label: "Entre em contacto", href: "#contact" },
		metrics: [
			{ value: "10+", label: "Anos em desenvolvimento iOS" },
			{ value: "7+", label: "Anos em liderança técnica e arquitetura" },
			{ value: "13", label: "Engenheiros liderados em equipas distribuídas" },
			{ value: "40+", label: "Mercados alcançados com InControl Remote" },
			{ value: "3", label: "Idiomas — Espanhol, Inglês, Português" },
		],
	},
	skillGroups: [
		{
			name: "Engenharia iOS",
			summary:
				"Experiência profunda em iOS nativo, desde integração de baixo nível até UI declarativa moderna, aplicada consistentemente em produção à escala.",
			skills: ["Swift", "SwiftUI", "Combine", "watchOS", "MVVM-C", "VIPER", "Arquitetura Modular", "Arquitetura Limpa", "SOLID", "Design REST API"],
		},
		{
			name: "Entrega e DevOps",
			summary:
				"Responsabilidade end-to-end dos workflows e pipelines de entrega, desde decisões de arquitetura até automação de releases e segurança empresarial.",
			skills: ["GitHub Actions", "Jenkins", "GitLab", "Fastlane", "TDD / BDD / ATDD", "Scrum", "Kanban", "SAFe", "Modelo Spotify", "MDM / MAM / Intune"],
		},
		{
			name: "Liderança e Estratégia",
			summary:
				"Construção e escalabilidade de equipas de engenharia, estabelecimento de comunidades técnicas e alinhamento da capacidade mobile com os objetivos de negócio.",
			skills: ["Chapter Lead", "Gestão de Pessoas", "Mentoria", "Desenvolvimento de Carreira", "Estratégia Mobile", "Alinhamento Interfuncional", "Revisões de Arquitetura"],
		},
	],
	projectHighlights: [
		{
			name: "Inditex — iOS Chapter Lead e Arquiteto",
			summary:
				"Liderei a capacidade iOS na região SPAI (Espanha, Portugal, Itália) na Cognizant, mentorizando 12 engenheiros sénior enquanto liderava simultaneamente uma equipa de 5 engenheiros a construir uma nova app de raiz.",
			impact:
				"Desenhei uma arquitetura MVVM-C modular em SwiftUI e Combine que melhorou a velocidade de desenvolvimento através de padrões reutilizáveis e reduziu o tempo de onboarding via documentação estruturada e registos de decisões de arquitetura.",
			stack: ["SwiftUI", "Combine", "MVVM-C", "Arquitetura Modular", "GitHub Actions", "API-first Design", "Azure DevOps"],
		},
		{
			name: "HSBC — Arquiteto iOS, Mobile Centre of Excellence",
			summary:
				"Integrei o CoE de Mobile Empresarial da HSBC como Especialista em iOS (SME), responsável pela governança de arquitetura em múltiplas equipas num ambiente bancário altamente regulado.",
			impact:
				"Desenhei a arquitetura iOS empresarial de template adotada por todas as equipas, eliminando boilerplate e padronizando o desenvolvimento. Defini padrões de segurança mobile integrados com Intune, Zimperium e BlackBerry UEM.",
			stack: ["MVVM-C", "Clean Architecture", "SOLID", "Intune", "BlackBerry UEM", "Zimperium", "UML"],
		},
		{
			name: "Jaguar Land Rover — Apps InControl Remote",
			summary:
				"Liderei o redesenho das apps InControl Remote da Land Rover e Jaguar de raiz como Líder Técnico iOS, gerindo uma equipa distribuída de 8-13 engenheiros no Reino Unido, Bielorrússia e Índia.",
			impact:
				"Entreguei uma arquitetura escalável com suporte para releases em mais de 40 mercados. Construí pipelines CI/CD, introduzi práticas BDD e ATDD e assumi a entrega end-to-end incluindo integração de backend e app.",
			stack: ["Swift", "Objective-C", "Jenkins", "GitLab", "Fastlane", "Firebase", "WebSockets", "SAFe", "BDD"],
		},
	],
	strengths: [
		{
			title: "Liderança Técnica",
			evidence:
				"Liderei equipas distribuídas de até 13 engenheiros em múltiplos fusos horários na JLR, e defini a estratégia do iOS Chapter para uma região inteira na Cognizant — equilibrando o trabalho de arquitetura hands-on com o crescimento das pessoas e a responsabilidade de entrega.",
		},
		{
			title: "Alinhamento Interfuncional",
			evidence:
				"Consistentemente liguei as disciplinas mobile, backend, produto e segurança. Na HSBC, trabalhei com o arquiteto Android para garantir paridade. Na Inditex, facilitei sessões de 3 Amigos e Example Mapping para alinhar negócio e engenharia antes de escrever uma linha de código.",
		},
		{
			title: "Mentoria e Crescimento da Equipa",
			evidence:
				"Construí processos de onboarding estruturados na JLR, HSBC, Cognizant e Inditex, defini planos de carreira e crescimento na Cognizant, e estabeleci comunidades iOS internas com workshops técnicos, partilha de conhecimento e revisões de arquitetura.",
		},
	],
	contact: {
		email: "jj.rebollo.barranco@gmail.com",
		availability:
			"Disponível para funções de Head of Mobile, Solutions Architect, Technical Lead e Principal Engineer. Baseado em Espanha — disponível para trabalho remoto e híbrido na Europa e no Reino Unido.",
		links: [
			{ label: "LinkedIn", href: "https://www.linkedin.com/in/juanjose-rebollo-barranco-80655929" },
			{ label: "GitHub", href: "https://github.com/jjrebollo" },
			{ label: "Descarregar CV", href: "/cv.pdf", download: true },
		],
	},
	labels: {
		skills: {
			eyebrow: "Capacidades",
			title: "O que trago para a mesa",
			intro: "Da engenharia iOS nativa aos pipelines de entrega e liderança de equipas — competências construídas e testadas em produção.",
		},
		projects: {
			eyebrow: "Trabalho selecionado",
			title: "Trabalho em destaque",
			intro: "Uma seleção de funções em que fui responsável tanto pela arquitetura como pelo resultado.",
		},
		strengths: {
			eyebrow: "Habilidades interpessoais",
			title: "Como trabalho",
			intro: "Os comportamentos e práticas que definem como lidero equipas e tomo decisões técnicas.",
		},
		contact: {
			eyebrow: "Contacto",
			title: "Vamos conversar",
			intro: "Se está a escalar uma equipa de mobile, a elevar o nível de arquitetura ou precisa de alguém que assuma a entrega end-to-end — terei todo o gosto em ligar.",
		},
		findMeOn: "Encontre-me em",
		downloadCv: "Descarregar CV",
		footerTagline: "Líder de Engenharia · iOS · Arquitetura Mobile",
		footerSource: "Construído com Astro · Ver código",
	},
};
