'use client'

import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';
import { useState } from 'react';

interface LanguageOption {
  code: string;
  name: string;
  flag: string;
}

const languageOptions: LanguageOption[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
];

export function LanguageSwitcher() {
  const t = useTranslations('LanguageSwitcher');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage = languageOptions.find(lang => lang.code === locale);

  const handleLanguageChange = (langCode: string) => {
    // Используем типизированный роутер из next-intl
    router.push(pathname, { locale: langCode });
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Кнопка переключения */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium 
                 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 
                 rounded-lg shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 
                 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                 transition-colors duration-200"
        aria-label={t('language')}
      >
        <span className="text-lg">{currentLanguage?.flag}</span>
        <span className="hidden sm:inline">{currentLanguage?.name}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Выпадающее меню */}
      {isOpen && (
        <div className="absolute top-full mt-1 w-48 bg-white dark:bg-gray-800 
                      border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg 
                      z-50 overflow-hidden">
          {languageOptions.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left text-sm
                       hover:bg-gray-50 dark:hover:bg-gray-700 
                       transition-colors duration-200
                       ${locale === lang.code 
                         ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300' 
                         : 'text-gray-700 dark:text-gray-300'}`}
            >
              <span className="text-lg">{lang.flag}</span>
              <span>{lang.name}</span>
              {locale === lang.code && (
                <svg
                  className="w-4 h-4 ml-auto text-blue-600 dark:text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}

      {/* Фон для закрытия меню */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
} 