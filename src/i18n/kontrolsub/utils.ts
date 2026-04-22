// Contém código gerado por IA

import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const segments = url.pathname.split('/').filter(Boolean);
  // Se o caminho começa com kontrolsub, o idioma é o segundo segmento (ex: /kontrolsub/en/...)
  if (segments[0] === 'kontrolsub' && segments[1] in ui) {
    return segments[1] as keyof typeof ui;
  }
  // Fallback para o primeiro segmento ou padrão
  const lang = segments[0];
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}
