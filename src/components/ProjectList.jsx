import { Link } from "react-router";

export default function ProjectList({ projects }) {
  return (
    <ul className="border-t border-line">
      {projects.map((p) => (
        <li key={p.slug} className="border-b border-line">
          <Link
            to={`/work/${p.slug}`}
            className="group grid gap-x-8 gap-y-2 py-7 md:grid-cols-12 md:py-9"
          >
            <h3 className="text-2xl leading-tight font-medium tracking-tight transition-colors group-hover:text-accent md:col-span-5 md:text-[1.75rem]">
              {p.title}
            </h3>
            <p className="text-muted md:col-span-5">{p.summary}</p>
            <p className="text-base text-muted md:col-span-2 md:text-right">
              <span className="md:block">{p.year}</span>
              <span className="md:hidden">, </span>
              <span className="md:block">{p.kind}</span>
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
