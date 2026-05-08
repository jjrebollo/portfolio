export const languages = {
	en: "English",
	es: "Español",
	pt: "Português",
} as const;

export const languageFlags: Record<keyof typeof languages, string> = {
	en: "🇬🇧",
	es: "🇪🇸",
	pt: "🇵🇹",
};

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "en";

export const localePaths: Record<Lang, string> = {
	en: "/",
	es: "/es/",
	pt: "/pt/",
};
