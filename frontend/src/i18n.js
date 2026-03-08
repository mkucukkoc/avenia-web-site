import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const LanguageContext = createContext({
  lang: 'en',
  setLang: () => {},
});

const STORAGE_KEY = 'avenia_lang';

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    if (typeof window === 'undefined') return 'en';
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === 'tr' ? 'tr' : 'en';
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem(STORAGE_KEY, lang);
    if (document?.documentElement) {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang }), [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => useContext(LanguageContext);
