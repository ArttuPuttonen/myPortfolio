import { useLocation } from "react-router";
import { links, profile } from "../content/profile";

export default function Footer() {
  const { pathname } = useLocation();
  // The contact page already shows the email and links, so skip them here.
  const onContact = pathname === "/contact";

  return (
    <footer className="wrap mt-32 pb-10 md:mt-44">
      {!onContact && (
        <div className="grid gap-10 border-t border-line pt-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-8">
            <p className="text-muted">Have something in mind?</p>
            <a
              href={`mailto:${profile.email}`}
              className="link mt-2 inline-block text-xl font-medium tracking-tight [overflow-wrap:anywhere] sm:text-4xl"
            >
              {profile.email}
            </a>
          </div>
          <ul className="flex flex-col gap-1 text-base md:col-span-4 md:items-end">
            {links.map((l) => (
              <li key={l.href}>
                <a className="link" href={l.href} target="_blank" rel="noopener noreferrer">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div
        className={`flex flex-wrap justify-between gap-x-8 gap-y-2 text-sm text-muted ${onContact ? "border-t border-line pt-6" : "mt-16"}`}
      >
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>Business ID {profile.businessId}</p>
      </div>
    </footer>
  );
}
