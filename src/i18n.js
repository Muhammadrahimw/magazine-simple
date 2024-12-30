import {initReactI18next} from "react-i18next";

i18n
	.use(LanguageDetector)
	.use(HttpBackend)
	.use(initReactI18next)
	.init({
		fallbackLng: `uz`,
		debug: true,
		interpolation: {
			escapValue: false,
		},
		backend: {
			loadPath: ``,
		},
	});

export default i18n;
