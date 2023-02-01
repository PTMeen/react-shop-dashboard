import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({
  theme: "",
  toggleTheme: () => {},
});

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return setTheme("dark");
    }
    setTheme("light");
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      return document.documentElement.classList.add("dark");
    }
    document.documentElement.classList.remove("dark");
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useThemeContext = () => useContext(ThemeContext);

export { ThemeProvider, useThemeContext };
