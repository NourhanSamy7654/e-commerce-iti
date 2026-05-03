import { createContext, useEffect, useState } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");

  const direction = lang === "ar" ? "rtl" : "ltr";


  useEffect(() => {
    document.documentElement.dir = direction;
    document.documentElement.lang = lang;
  }, [lang, direction]);

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang,
        direction,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageContext;