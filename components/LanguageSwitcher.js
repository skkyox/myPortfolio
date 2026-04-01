import { useTranslation } from '../hooks/useTranslation';

export default function LanguageSwitcher() {
  const { locale, switchLocale } = useTranslation();
  const otherLocale = locale === 'en' ? 'fr' : 'en';

  return (
    <button
      onClick={() => switchLocale(otherLocale)}
      className="ml-2 px-3 py-1.5 rounded-full text-xs font-display font-semibold tracking-wider uppercase border border-zinc-700/50 text-zinc-400 hover:text-primary hover:border-primary/30 transition-all duration-300"
      aria-label={`Switch to ${otherLocale === 'fr' ? 'French' : 'English'}`}
    >
      {otherLocale.toUpperCase()}
    </button>
  );
}
