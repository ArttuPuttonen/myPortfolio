import useTheme from "../hooks/useTheme";

export default function ThemeToggle({ className = "" }) {
  const [theme, toggle] = useTheme();
  const next = theme === "dark" ? "light" : "dark";
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${next} theme`}
      className={`cursor-pointer text-muted transition-colors hover:text-ink ${className}`}
    >
      {next === "dark" ? "Dark mode" : "Light mode"}
    </button>
  );
}
