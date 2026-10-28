import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { translateArabic } from '../i18n/arabic.js';
const dictionary = {
  en: { nav: { home: 'Home', experiences: 'Experiences', desert: 'Desert', city: 'Dubai', abu:'Abu Dhabi', attractions:'Attractions', transfers: 'Transfers', destinations: 'Destinations', guides:'Guides', offers:'Offers', about: 'Our story' }, explore: 'Explore experiences', booking: 'Request a booking', quote: 'Request a quote', details: 'View experience', pending: 'Pending confirmation', menu: 'Open menu', close: 'Close menu' },
  ar: { nav: { home: 'الرئيسية', experiences: 'التجارب', desert: 'الصحراء', city: 'دبي', abu:'أبوظبي', attractions:'المعالم', transfers: 'التوصيل', destinations: 'الوجهات', guides:'أدلة السفر', offers:'العروض', about: 'قصتنا' }, explore: 'استكشف التجارب', booking: 'طلب حجز', quote: 'اطلب عرض سعر', details: 'عرض التجربة', pending: 'بانتظار التأكيد', menu: 'فتح القائمة', close: 'إغلاق القائمة' },
};
const LanguageContext = createContext(null);
const originalTextNodes = new WeakMap();
const originalAttributes = new WeakMap();
export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => localStorage.getItem('wmt-language') || 'en');
  useEffect(() => { localStorage.setItem('wmt-language', language); document.documentElement.lang = language; document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'; }, [language]);
  useEffect(() => {
    const translateNode = (node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        if (!originalTextNodes.has(node)) originalTextNodes.set(node, node.nodeValue);
        const original = originalTextNodes.get(node);
        const nextValue = language === 'ar' ? translateArabic(original) : original;
        if (node.nodeValue !== nextValue) node.nodeValue = nextValue;
        return;
      }
      if (!(node instanceof Element) || node.closest('[data-no-translate]')) return;
      ['placeholder','aria-label','title'].forEach((attribute) => {
        if (!node.hasAttribute(attribute)) return;
        if (!originalAttributes.has(node)) originalAttributes.set(node, {});
        const saved = originalAttributes.get(node);
        if (!saved[attribute]) saved[attribute] = node.getAttribute(attribute);
        const original = saved[attribute];
        node.setAttribute(attribute, language === 'ar' ? translateArabic(original) : original);
      });
      node.childNodes.forEach(translateNode);
    };
    const translatePage = () => translateNode(document.body);
    translatePage();
    const observer = new MutationObserver((mutations) => mutations.forEach((mutation) => {
      if (mutation.type === 'characterData') translateNode(mutation.target);
      mutation.addedNodes.forEach(translateNode);
    }));
    observer.observe(document.body, { childList:true, characterData:true, subtree:true });
    return () => observer.disconnect();
  }, [language]);
  const value = useMemo(() => ({ language, setLanguage, t: dictionary[language], isRTL: language === 'ar' }), [language]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
export const useLanguage = () => useContext(LanguageContext);
