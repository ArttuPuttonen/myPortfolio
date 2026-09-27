import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import CubeMark from "./CubeMark";
import ThemeToggle from "./ThemeToggle";
import { nav, profile } from "../content/profile";

const navClass = ({ isActive }) =>
  `transition-colors hover:text-ink ${isActive ? "text-ink underline decoration-1 underline-offset-[0.4em]" : "text-muted"}`;

function Brand() {
  return (
    <Link to="/" className="group flex items-center gap-3 font-medium tracking-tight">
      <CubeMark />
      {profile.name}
    </Link>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="wrap flex items-center justify-between py-5 md:py-8">
      <Brand />

      <nav aria-label="Main" className="hidden items-center gap-7 text-base md:flex">
        {nav.map((item) => (
          <NavLink key={item.to} to={item.to} className={navClass}>
            {item.label}
          </NavLink>
        ))}
        <a href={profile.cvUrl} target="_blank" rel="noopener" className="text-muted transition-colors hover:text-ink">
          CV
        </a>
        <ThemeToggle className="ml-4 border-l border-line pl-7" />
      </nav>

      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        className="cursor-pointer text-base font-medium md:hidden"
      >
        Menu
      </button>

      {open && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="page-in fixed inset-0 z-50 flex flex-col bg-bg md:hidden"
        >
          <div className="wrap flex items-center justify-between py-5">
            <Brand />
            <button type="button" onClick={() => setOpen(false)} className="cursor-pointer text-base font-medium">
              Close
            </button>
          </div>
          <nav aria-label="Main" className="wrap mt-8 flex flex-col gap-3 text-4xl font-medium tracking-tight">
            <NavLink to="/" end className={navClass}>
              Home
            </NavLink>
            {nav.map((item) => (
              <NavLink key={item.to} to={item.to} className={navClass}>
                {item.label}
              </NavLink>
            ))}
            <a href={profile.cvUrl} target="_blank" rel="noopener" className="text-muted transition-colors hover:text-ink">
              CV
            </a>
          </nav>
          <div className="wrap mt-auto flex items-center justify-between pb-8 text-base">
            <a className="link" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <ThemeToggle />
          </div>
        </div>
      )}
    </header>
  );
}
