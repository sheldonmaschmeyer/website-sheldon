import { createI18n } from 'vue-i18n';

const defaultLocale = import.meta.env?.VITE_DEFAULT_LOCALE || 'en';
const fallbackLocale = import.meta.env?.VITE_FALLBACK_LOCALE || 'fr';

const allFiles = import.meta.glob('/src/i18n/locales/**/*.json', {
  eager: true,
  import: 'default',
});

const messages: Record<string, any> = {};

for (const [path, content] of Object.entries(allFiles)) {
  const match = path.match(/\/src\/i18n\/locales\/([^/]+)\/(.+)\.json$/);
  if (!match) continue;

  const [, locale, filename] = match;
  const segments = [locale, ...filename.split('/')];
  const leafKey = segments.pop()!;

  // Traverse the object tree, creating empty objects where they don't exist
  const parent = segments.reduce((current, key) => current[key] ??= {}, messages);

  parent[leafKey] = content;
}

export default createI18n({
  legacy: false,
  locale: defaultLocale,
  fallbackLocale: fallbackLocale,
  globalInjection: true,
  messages,
});
