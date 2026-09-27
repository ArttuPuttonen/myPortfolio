import { useEffect, useState } from "react";

const darkQuery = "(prefers-color-scheme: dark)";

function readTheme() {
  const chosen = document.documentElement.dataset.theme;
  if (chosen === "light" || chosen === "dark") return chosen;
  return window.matchMedia(darkQuery).matches ? "dark" : "light";
}

// The theme the page is showing right now, plus a toggle that remembers the choice.
export default function useTheme() {
  const [theme, setTheme] = useState(readTheme);

  useEffect(() => {
    const media = window.matchMedia(darkQuery);
    const onChange = () => setTheme(readTheme());
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    const root = document.documentElement;
    // Switch every colour at once instead of letting hover transitions lag behind.
    root.classList.add("theme-switching");
    root.dataset.theme = next;
    requestAnimationFrame(() => requestAnimationFrame(() => root.classList.remove("theme-switching")));
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Storage can be blocked; the choice then lasts for this page view only.
    }
    setTheme(next);
  };

  return [theme, toggle];
}
