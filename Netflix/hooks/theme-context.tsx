// this file stores the current theme (light or dark) so any screen can read it
// and the toggle button can change it for the whole app
import React, { createContext, useContext, useState } from 'react';
import { useColorScheme as useDeviceColorScheme } from './use-color-scheme';

type ThemeContextType = {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeContextProvider({ children }: { children: React.ReactNode }) {
  const deviceTheme = useDeviceColorScheme() ?? 'light';
  // starts with whatever the phone is set to, but after that user can override with button
  const [theme, setTheme] = useState<'light' | 'dark'>(deviceTheme);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useAppTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useAppTheme must be used inside ThemeContextProvider');
  }
  return context;
}
