import { useRouter } from 'next/router';
import en from '../locales/en.json';
import fr from '../locales/fr.json';

const translations = { en, fr };

export function useTranslation() {
  const router = useRouter();
  const locale = router.locale || 'en';
  const t = translations[locale] || translations.en;

  const switchLocale = (newLocale) => {
    document.cookie = `NEXT_LOCALE=${newLocale};path=/;max-age=31536000`;
    router.push(router.asPath, router.asPath, { locale: newLocale });
  };

  return { t, locale, switchLocale };
}
