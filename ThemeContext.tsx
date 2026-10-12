import React, { createContext, useContext, useEffect, useState } from 'react';

export type ThemeMode = 'paper' | 'slate';

interface ThemeContextType {
  theme: ThemeMode;
  toggleTheme: () => void;
  setTheme: (theme: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme-mode');
      if (saved === 'paper' || saved === 'slate') return saved;
      // Default to paper mode (clean light architectural)
      return 'paper';
    }
    return 'paper';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'slate') {
      root.classList.add('dark');
      root.setAttribute('data-theme', 'slate');
    } else {
      root.classList.remove('dark');
      root.setAttribute('data-theme', 'paper');
    }
    localStorage.setItem('theme-mode', theme);
  }, [theme]);

  const toggleTheme = () => {
    setThemeState((prev) => (prev === 'paper' ? 'slate' : 'paper'));
  };

  const setTheme = (newTheme: ThemeMode) => {
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
