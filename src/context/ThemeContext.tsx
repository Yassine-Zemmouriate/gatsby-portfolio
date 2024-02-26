// src/context/ThemeContext.tsx
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ThemeContextType {
  dark: boolean;
  toggleDark: () => void;
}

const defaultState: ThemeContextType = {
  dark: false,
  toggleDark: () => {},
};

const ThemeContext = createContext<ThemeContextType>(defaultState);

export const useTheme = () => useContext(ThemeContext);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [dark, setDark] = useState<boolean>(false);

  useEffect(() => {
    const lsDark = localStorage.getItem('dark');
    if (lsDark) {
      setDark(JSON.parse(lsDark));
    }
  }, []);

  const toggleDark = () => {
    const isDark = !dark;
    setDark(isDark);
    localStorage.setItem('dark', JSON.stringify(isDark));
  };

  return (
    <ThemeContext.Provider value={{ dark, toggleDark }}>
      {children}
    </ThemeContext.Provider>
  );
};
