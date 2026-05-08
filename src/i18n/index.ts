export const languages = {
	en: "English",
	es: "Español",
	pt: "Português",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "en";

export const localePaths: Record<Lang, string> = {
	en: "/",
	es: "/es/",
	pt: "/pt/",
};
