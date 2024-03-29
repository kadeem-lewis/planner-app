import { Theme, useTheme } from "remix-themes";
import { Switch } from "./ui/switch";
import { useState, useEffect } from "react";

export function ThemeToggle() {
  const [theme, setTheme] = useTheme();
  const [isSelected, setIsSelected] = useState(theme === Theme.DARK);

  useEffect(() => {
    if (isSelected) {
      setTheme(Theme.DARK);
    } else {
      setTheme(Theme.LIGHT);
    }
  }, [isSelected, setTheme]);

  return (
    <>
      <Switch isSelected={isSelected} onChange={setIsSelected}>
        Dark Mode
      </Switch>
    </>
  );
}
