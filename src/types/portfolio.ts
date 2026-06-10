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

export interface Recommendation {
	quote: string;
	author: string;
	headline: string;
	date?: string;
}

export interface RecommendationsContent {
	source: string;
	sourceUrl: string;
	items: Recommendation[];
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

export interface Video {
	id: string;
	title: string;
	isShort?: boolean;
}

export interface VideoGroup {
	project: string;
	description: string;
	anchor: string;
	videos: Video[];
}

export interface SiteLabels {
	skills: SectionLabel;
	projects: SectionLabel;
	strengths: SectionLabel;
	recommendations: SectionLabel;
	contact: SectionLabel;
	work: SectionLabel;
	recommendationsViewProfile: string;
	recommendationsMore: string;
	recommendationsLess: string;
	recommendationsEmptyState: string;
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
	recommendations: RecommendationsContent;
	contact: ContactContent;
	videoGroups: VideoGroup[];
	labels: SiteLabels;
}
