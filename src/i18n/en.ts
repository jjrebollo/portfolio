import type { NavigationLink, SiteContent, SiteMeta } from "~/types/portfolio";

export const siteMeta: SiteMeta = {
	lang: "en",
	title: "Juan José Rebollo | Engineering Leader",
	shortTitle: "Juan José Rebollo Barranco",
	description:
		"Engineering Leader with 10+ years in iOS development and 7+ years in technical leadership. Specialising in mobile architecture, distributed teams, and enterprise-grade delivery.",
	cvHref: "/Juan_Rebollo_CV.pdf",
};

export const navigationLinks: NavigationLink[] = [
	{ label: "Skills", href: "/#skills" },
	{ label: "Projects", href: "/#projects" },
	{ label: "Videos", href: "/work" },
	{ label: "Strengths", href: "/#strengths" },
	{ label: "Recommendations", href: "/#recommendations" },
	{ label: "Contact", href: "/#contact" },
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
	recommendations: {
		source: "LinkedIn recommendations",
		sourceUrl: "https://www.linkedin.com/in/juan-jose-rebollo-barranco-80655929/?locale=en",
		items: [
			{
				author: "Elena Becerril",
				headline: "Head of Digital Engineering Studio Iberia at Cognizant",
				date: "April 28, 2026",
				quote:
					"Working with Juanjo over these years has been an absolute pleasure, he is one of those professionals who truly leaves a mark on everyone they work with. What sets Juanjo apart is the combination of deep technical expertise and outstanding soft skills. He doesn't just get the job done; he takes full ownership of everything he touches, anticipates challenges before they arise, and brings the kind of calm, reliable energy that makes teams better around him. If Juanjo is part of a project, success is not a goal, it's a guarantee. I couldn't recommend him more highly.",
			},
			{
				author: "Jaihind Patil",
				headline: "Test Lead at Endava",
				date: "November 16, 2022",
				quote:
					"I had the pleasure of working with Juan at HSBC Company, collaborating on project teams. His expertise in IOS development and architect made things smooth in delivering. I was particularly impressed by Juan's ability to handle even the toughest issues effortlessly. That skill often takes years, but it seemed to come perfectly naturally to him. Juan would be an asset to any team.",
			},
			{
				author: "Zbigniew Niewiadomski",
				headline: "Lead Scrum Master | SimCorp",
				date: "November 8, 2022",
				quote:
					"Very good iOS skills and architecture skills, along with experience in Android, allowed him to lead the team as an Architect and a mentor. Juan is very easy to get along with, resolves conflicts swiftly, while also being good at communicating, either giving praise or raising issues according to situation. I highly recommend Juan, it was a great pleasure to be able to work together.",
			},
			{
				author: "Marcin Arciszewski",
				headline: "Ex-Big 4 | Senior Android Engineer | Kotlin | Jetpack Compose | Android Architecture",
				date: "January 10, 2022",
				quote:
					"I had a brief pleasure working with Juan. He is an enthusiastic and detail-oriented tech leader, with great people skills and strong technical expertise in iOS development. He is a true SOLID engineer, always advocating for clean architecture, testing, quality, and ready to go the extra mile to automate it. He is very approachable and a good team player. Definitely recommended working with him.",
			},
			{
				author: "Keith Bauwise",
				headline: "Software Engineering Manager",
				date: "July 26, 2021",
				quote:
					"Juan Rebollo is a senior iOS developer, who holds the role of iOS Platform Technical Lead for the development of Jaguar and Land Rover InControl Remote mobile apps. His in-depth knowledge of our products and his comprehensive understanding of the iOS platform has made him an invaluable asset to the organisation. Juan has an extreme eye for detail and is very data-driven in his approach. He has excellent verbal and written communication skills and can communicate effectively at all levels, including senior management. Juan has a true can-do approach which is both inspiring and infectious. Any organisation would benefit from somebody of Juan's calibre. He always delivers, is totally customer focused, and very dependable.",
			},
		],
	},
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
		recommendations: {
			eyebrow: "LinkedIn",
			title: "Recommendations",
			intro: "Selected endorsements from colleagues and collaborators on LinkedIn.",
		},
		contact: {
			eyebrow: "Contact",
			title: "Let's talk",
			intro: "Whether you're scaling a mobile team, raising the architecture bar, or need someone to own delivery end-to-end — I'd be glad to connect.",
		},
		work: {
			eyebrow: "Work in action",
			title: "Projects on video",
			intro: "Recordings of apps I built or led as Technical Leader — from the JLR InControl suite to the Inditex logistics platform.",
		},
		recommendationsViewProfile: "View profile",
		recommendationsMore: "More...",
		recommendationsLess: "Less...",
		recommendationsEmptyState: "LinkedIn blocks public access to recommendations, so this section is ready to display them once they are added to the portfolio data.",
		findMeOn: "Find me on",
		downloadCv: "Download CV",
		footerTagline: "Engineering Leader · iOS · Mobile Architecture",
		footerSource: "Built with Astro · View source",
	},
	videoGroups: [
		{
			project: "Inditex — Logistics App",
			description: "Internal logistics application delivered for Inditex as iOS Technical Lead, built from scratch with a MVVM-C architecture in SwiftUI.",
			anchor: "inditex",
			videos: [
				{ id: "KhEWEwIBTGQ", title: "Inditex Logistics App — Demo" },
			],
		},
		{
			project: "Jaguar Land Rover — InControl Remote App v2",
			description: "The next generation of the InControl Remote app, with a redesigned architecture, expanded feature set, and support for new vehicle platforms.",
			anchor: "incontrol-v2",
			videos: [
				{ id: "mglk6Jbu23w", title: "InControl Remote App v2 — Overview" },
				{ id: "iuvHfmDIp-E", title: "InControl Remote App v2 — Demo" },
			],
		},
		{
			project: "Jaguar Land Rover — InControl Remote Watch App",
			description: "The companion watchOS app for the InControl Remote platform, built alongside the iOS app.",
			anchor: "incontrol-watch",
			videos: [
				{ id: "fkoPquBFM9E", title: "InControl Remote Watch App", isShort: true },
				{ id: "coHJIC9D1pQ", title: "InControl Remote Watch App — Demo" },
			],
		},
		{
			project: "Jaguar Land Rover — InControl Remote App v1",
			description: "Demo videos for the first major redevelopment of the Land Rover and Jaguar InControl Remote companion apps, released across 40+ markets.",
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
