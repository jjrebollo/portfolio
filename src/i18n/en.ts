import type { NavigationLink, SiteContent, SiteMeta } from "../types/portfolio";

export const siteMeta: SiteMeta = {
	lang: "en",
	title: "Juan José Rebollo | Engineering Leader",
	shortTitle: "Juan José Rebollo Barranco",
	description:
		"Engineering Leader with 10+ years in iOS development and 7+ years in technical leadership. Specialising in mobile architecture, distributed teams, and enterprise-grade delivery.",
	cvHref: "/Juan_Rebollo_CV.pdf",
};

export const navigationLinks: NavigationLink[] = [
	{ label: "Skills", href: "#skills" },
	{ label: "Projects", href: "#projects" },
	{ label: "Strengths", href: "#strengths" },
	{ label: "Contact", href: "#contact" },
];

export const siteContent: SiteContent = {
	hero: {
		eyebrow: "Engineering Leader",
		title: "Growing engineering teams, raising the architecture bar, and delivering at scale.",
		summary:
			"Engineering Leader with 10+ years in iOS development and 7+ years in technical leadership and architecture roles. Proven track record leading distributed teams across Spain, UK, and India — defining mobile strategy, delivering enterprise-grade apps in highly regulated environments, and crafting architectures that are maintainable, testable, and built to last.",
		primaryAction: { label: "View featured work", href: "#projects" },
		secondaryAction: { label: "Get in touch", href: "#contact" },
		metrics: [
			{ value: "10+", label: "Years in iOS development" },
			{ value: "7+", label: "Years in technical leadership & architecture" },
			{ value: "13", label: "Engineers led across distributed teams" },
			{ value: "40+", label: "Markets reached with InControl Remote" },
			{ value: "3", label: "Languages — Spanish, English, Portuguese" },
		],
	},
	skillGroups: [
		{
			name: "iOS Engineering",
			summary:
				"Deep expertise in native iOS from low-level integration to modern declarative UI, applied consistently in production at scale.",
			skills: ["Swift", "SwiftUI", "Combine", "watchOS", "MVVM-C", "VIPER", "Modular Architecture", "Clean Architecture", "SOLID", "REST API Design"],
		},
		{
			name: "Delivery & DevOps",
			summary:
				"End-to-end ownership of the delivery workflows and pipelines, from architecture decisions through to release automation and enterprise security.",
			skills: ["GitHub Actions", "Jenkins", "GitLab", "Fastlane", "TDD / BDD / ATDD", "Scrum", "Kanban", "SAFe", "Spotify Model", "MDM / MAM / Intune"],
		},
		{
			name: "Leadership & Strategy",
			summary:
				"Building and scaling engineering teams, establishing technical communities, and aligning mobile capability with business goals.",
			skills: ["Chapter Lead", "People Management", "Mentoring", "Career Development", "Mobile Strategy", "Cross-functional Alignment", "Architecture Reviews"],
		},
	],
	projectHighlights: [
		{
			name: "Inditex — iOS Chapter Lead & Architect",
			summary:
				"Led iOS capability across the SPAI region (Spain, Portugal, Italy) at Cognizant, mentoring 12 senior engineers while simultaneously leading a 5-engineer team at Inditex, delivering a new app from scratch.",
			impact:
				"Designed a modular MVVM-C architecture in SwiftUI and Combine that improved development velocity through reusable patterns and reduced onboarding time via structured documentation and architecture decision records.",
			stack: ["SwiftUI", "Combine", "MVVM-C", "Modular Architecture", "GitHub Actions", "API-first Design", "Azure DevOps"],
		},
		{
			name: "HSBC — iOS Architect, Mobile Centre of Excellence",
			summary:
				"Joined the Enterprise Mobile CoE at HSBC as the iOS Subject Matter Expert (SME), responsible for architecture governance across multiple teams in a highly regulated banking environment.",
			impact:
				"Designed the enterprise iOS template architecture adopted across teams, eliminating boilerplate and standardising development. Defined mobile security patterns integrated with Intune, Zimperium, and BlackBerry UEM.",
			stack: ["MVVM-C", "Clean Architecture", "SOLID", "Intune", "BlackBerry UEM", "Zimperium", "UML"],
		},
		{
			name: "Jaguar Land Rover — InControl Remote Apps",
			summary:
				"Led the redevelopment of the Land Rover and Jaguar InControl Remote apps from scratch as iOS Technical Leader, managing a distributed team of 8-13 engineers across the United Kingdom, Belarus, and India.",
			impact:
				"Delivered a scalable architecture supporting multi-country releases across 40+ markets. Built CI/CD pipelines, introduced BDD and ATDD practices, and owned end-to-end feature delivery including backend and app integration.",
			stack: ["Swift", "Objective-C", "Jenkins", "GitLab", "Fastlane", "Firebase", "WebSockets", "SAFe", "BDD"],
		},
	],
	strengths: [
		{
			title: "Technical Leadership",
			evidence:
				"Led distributed teams of up to 13 engineers across multiple time zones at JLR, and defined the iOS chapter strategy for an entire region at Cognizant — balancing hands-on architecture work with people growth and delivery accountability.",
		},
		{
			title: "Cross-functional Alignment",
			evidence:
				"Consistently bridged mobile, backend, product, and security disciplines. At HSBC, partnered with the Android architect to ensure parity. At Inditex, facilitated 3 Amigos and Example Mapping sessions to align business and engineering before a line of code was written.",
		},
		{
			title: "Mentoring & Team Growth",
			evidence:
				"Built structured onboarding processes at JLR, HSBC, Cognizant, and Inditex, defined career paths and growth plans at Cognizant, and established internal iOS communities with technical workshops, knowledge sharing, and architecture reviews.",
		},
	],
	contact: {
		email: "jj.rebollo.barranco@gmail.com",
		availability:
			"Open to Head of Mobile, Solutions Architect, Technical Lead, and Principal Engineer roles. Based in Spain — open to remote and hybrid arrangements in Europe and the UK.",
		links: [
			{ label: "LinkedIn", href: "https://www.linkedin.com/in/juan-jose-rebollo-barranco-80655929" },
			{ label: "GitHub", href: "https://github.com/jjrebollo" },
			{ label: "Download CV", href: "/Juan_Rebollo_CV.pdf", download: true },
		],
	},
	labels: {
		skills: {
			eyebrow: "Capabilities",
			title: "What I bring to the table",
			intro: "From native iOS engineering to delivery pipelines and team leadership — skills built and tested in production.",
		},
		projects: {
			eyebrow: "Selected work",
			title: "Featured work",
			intro: "A selection of roles where I owned both the architecture and the outcome.",
		},
		strengths: {
			eyebrow: "Soft skills",
			title: "How I work",
			intro: "The behaviours and practices that shape how I lead teams and make technical decisions.",
		},
		contact: {
			eyebrow: "Contact",
			title: "Let's talk",
			intro: "Whether you're scaling a mobile team, raising the architecture bar, or need someone to own delivery end-to-end — I'd be glad to connect.",
		},
		findMeOn: "Find me on",
		downloadCv: "Download CV",
		footerTagline: "Engineering Leader · iOS · Mobile Architecture",
		footerSource: "Built with Astro · View source",
	},
};
