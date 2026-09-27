import { Link, useParams } from "react-router";
import useTitle from "../hooks/useTitle";
import PageHeader from "../components/PageHeader";
import NotFound from "./NotFound";
import { findProject, projects } from "../content/projects";

function Fact({ label, children }) {
  return (
    <div>
      <dt className="text-muted">{label}</dt>
      <dd className="mt-1">{children}</dd>
    </div>
  );
}

export default function Project() {
  const { slug } = useParams();
  const project = findProject(slug);
  useTitle(project?.title ?? "Page not found");

  if (!project) return <NotFound />;

  const index = projects.indexOf(project);
  const next = projects[(index + 1) % projects.length];

  return (
    <article>
      <PageHeader title={project.title} lead={project.summary}>
        <Link to="/work" className="link mb-6 inline-block text-base text-muted">
          All work
        </Link>
      </PageHeader>

      <dl className="wrap grid grid-cols-2 gap-x-8 gap-y-6 text-base md:grid-cols-12">
        <div className="col-span-2 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-line pt-6 md:col-span-12 md:grid-cols-4">
          <Fact label="Role">{project.role}</Fact>
          <Fact label="When">
            {project.kind}, {project.year}
          </Fact>
          {project.stack.length > 0 && <Fact label="Built with">{project.stack.join(", ")}</Fact>}
          {project.links.length > 0 && (
            <Fact label="Links">
              <ul>
                {project.links.map((l) => (
                  <li key={l.href}>
                    <a className="link" href={l.href} target="_blank" rel="noopener noreferrer">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </Fact>
          )}
        </div>
      </dl>

      {project.image && (
        <figure className="wrap mt-14 md:mt-20">
          <img
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            className="w-full rounded-[4px] border border-line"
          />
        </figure>
      )}

      <div className="wrap mt-16 flex flex-col gap-14 md:mt-24 md:gap-20">
        {project.sections.map((s) => (
          <section key={s.heading} className="grid gap-4 md:grid-cols-12 md:gap-8">
            <h2 className="text-xl font-medium tracking-tight md:col-span-4">{s.heading}</h2>
            <div className="prose-block max-w-[40rem] md:col-span-8">
              {s.paragraphs?.map((p) => (
                <p key={p}>{p}</p>
              ))}
              {s.bullets && (
                <ul className={`flex list-disc flex-col gap-2 pl-5 marker:text-muted ${s.paragraphs ? "mt-4" : ""}`}>
                  {s.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
            </div>
          </section>
        ))}
      </div>

      <nav aria-label="Next project" className="wrap mt-24 md:mt-32">
        <Link to={`/work/${next.slug}`} className="group block border-t border-line pt-8">
          <span className="text-base text-muted">Next project</span>
          <span className="mt-2 block text-3xl font-medium tracking-tight transition-colors group-hover:text-accent md:text-4xl">
            {next.title}
          </span>
        </Link>
      </nav>
    </article>
  );
}
