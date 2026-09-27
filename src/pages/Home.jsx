import { Link } from "react-router";
import useTitle from "../hooks/useTitle";
import Portrait from "../components/Portrait";
import ProjectList from "../components/ProjectList";
import { featuredProjects } from "../content/projects";
import { services } from "../content/services";
import { profile } from "../content/profile";
import { education, experience, skills } from "../content/about";
import { isOngoing, yearRange } from "../lib/dates";

function SectionHeading({ title, children }) {
  return (
    <div className="mb-8 flex flex-wrap items-baseline justify-between gap-4 md:mb-10">
      <h2 className="text-2xl font-medium tracking-tight md:text-3xl">{title}</h2>
      {children}
    </div>
  );
}

// Dates, role and organisation in one row each, newest first. Roles still
// held have their dates in the accent colour.
function CvRows({ entries }) {
  return (
    <ol className="border-t border-line">
      {entries.map((e) => (
        <li
          key={e.title + e.org}
          className="grid gap-x-8 gap-y-0.5 border-b border-line py-4 md:grid-cols-12 md:items-baseline md:py-5"
        >
          <p className={`text-base md:col-span-3 ${isOngoing(e) ? "text-accent" : "text-muted"}`}>{yearRange(e)}</p>
          <p className="text-xl font-medium tracking-tight md:col-span-5">{e.title}</p>
          <p className="text-muted md:col-span-4">{e.org}</p>
        </li>
      ))}
    </ol>
  );
}

export default function Home() {
  useTitle();
  const major = (entries) => entries.filter((e) => !e.minor);

  return (
    <>
      <section className="wrap grid items-end gap-12 pt-6 md:grid-cols-12 md:gap-8 md:pt-14">
        <div className="md:col-span-7 md:pb-4">
          <h1 className="text-[2.6rem] leading-[1] font-medium tracking-[-0.035em] sm:text-6xl lg:text-[5.25rem]">
            I build AI agents, automations and the web apps around them.
          </h1>
          <p className="mt-8 max-w-xl text-xl leading-snug text-muted">
            I'm {profile.name}, a freelance developer in {profile.location}. {profile.availability}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-lg font-medium">
            <a
              href={profile.cvUrl}
              target="_blank"
              rel="noopener"
              className="rounded-[3px] bg-ink px-6 py-3 text-bg transition-colors hover:bg-accent"
            >
              Download CV
            </a>
            <Link to="/work" className="link">
              See my work
            </Link>
            <Link to="/contact" className="link">
              Get in touch
            </Link>
          </div>
        </div>
        <Portrait className="mx-auto w-full max-w-sm md:col-span-5 md:max-w-none" />
      </section>

      <section className="wrap mt-24 md:mt-28">
        <SectionHeading title="Experience">
          <a href={profile.cvUrl} target="_blank" rel="noopener" className="link text-base text-muted">
            Full CV as PDF
          </a>
        </SectionHeading>
        <CvRows entries={major(experience)} />

        <div className="mt-16 grid gap-16 md:mt-20 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <h2 className="mb-6 text-2xl font-medium tracking-tight">Education</h2>
            <ol className="border-t border-line">
              {major(education).map((e) => (
                <li key={e.title} className="border-b border-line py-4">
                  <p className="text-base text-muted">{yearRange(e)}</p>
                  <p className="mt-0.5 text-lg font-medium tracking-tight">{e.title}</p>
                  <p className="text-base text-muted">{e.org}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <h2 className="mb-6 text-2xl font-medium tracking-tight">Skills</h2>
            <div className="grid grid-cols-2 gap-x-8 gap-y-6 border-t border-line pt-4">
              {skills.map((g) => (
                <div key={g.group}>
                  <h3 className="text-base text-muted">{g.group}</h3>
                  <ul className="mt-1 text-base">
                    {g.items.map((item) => (
                      <li key={item} className="py-0.5">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="wrap mt-28 md:mt-40">
        <SectionHeading title="Selected work">
          <Link to="/work" className="link text-base text-muted">
            All projects
          </Link>
        </SectionHeading>
        <ProjectList projects={featuredProjects} />
      </section>

      <section className="wrap mt-28 md:mt-40">
        <SectionHeading title="What I can build for you">
          <Link to="/services" className="link text-base text-muted">
            Services and how I work
          </Link>
        </SectionHeading>
        <ul className="grid gap-10 md:grid-cols-3 md:gap-8">
          {services.map((s) => (
            <li key={s.title} className="border-t border-line pt-5">
              <h3 className="text-xl font-medium tracking-tight">{s.title}</h3>
              <p className="mt-3 text-base text-muted">{s.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="wrap mt-28 md:mt-40">
        <p className="max-w-3xl text-2xl leading-snug tracking-tight md:text-3xl">
          Off-screen I solve Rubik's cubes fast (6.70 seconds at best, 135 competitions so far) and spend the rest
          of my free time climbing.{" "}
          <Link to="/off-screen" className="link text-muted">
            More about that
          </Link>
        </p>
      </section>
    </>
  );
}
