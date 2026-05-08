export interface SiteMeta {
	lang: string;
	title: string;
	shortTitle: string;
	description: string;
	cvHref?: string;
}

export interface NavigationLink {
	label: string;
	href: string;
}

export interface CallToAction {
	label: string;
	href: string;
}

export interface Metric {
	value: string;
	label: string;
}

export interface HeroContent {
	eyebrow: string;
	title: string;
	summary: string;
	primaryAction: CallToAction;
	secondaryAction: CallToAction;
	metrics: Metric[];
}

export interface SkillGroup {
	name: string;
	summary: string;
	skills: string[];
}

export interface ProjectHighlight {
	name: string;
	summary: string;
	impact: string;
	stack: string[];
	linkLabel?: string;
	href?: string;
}

export interface Strength {
	title: string;
	evidence: string;
}

export interface ContactLink {
	label: string;
	href: string;
	download?: boolean;
}

export interface ContactContent {
	email: string;
	availability: string;
	links: ContactLink[];
}

export interface SectionLabel {
	eyebrow: string;
	title: string;
	intro?: string;
}

export interface SiteLabels {
	skills: SectionLabel;
	projects: SectionLabel;
	strengths: SectionLabel;
	contact: SectionLabel;
	findMeOn: string;
	downloadCv: string;
	footerTagline: string;
	footerSource: string;
}

export interface SiteContent {
	hero: HeroContent;
	skillGroups: SkillGroup[];
	projectHighlights: ProjectHighlight[];
	strengths: Strength[];
	contact: ContactContent;
	labels: SiteLabels;
}
