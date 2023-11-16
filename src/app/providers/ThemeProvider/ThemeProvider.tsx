import {
  LOCAL_STORAGE_THEME_KEY,
  Theme,
  ThemeContext,
} from "@/app/providers/ThemeProvider/ThemeContext";
import { FC, ReactNode, useMemo, useState } from "react";

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;
interface ThemeProviderProps {
  children: ReactNode;
}
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const defaultProps = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};
