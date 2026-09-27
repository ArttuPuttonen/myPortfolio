import { Link } from "react-router";
import useTitle from "../hooks/useTitle";
import PageHeader from "../components/PageHeader";
import { education, experience, interests, languages, skills, story } from "../content/about";
import { profile } from "../content/profile";
import { isOngoing, yearRange } from "../lib/dates";

function EntryList({ title, entries }) {
  return (
    <section className="wrap mt-24 md:mt-32">
      <h2 className="mb-8 text-2xl font-medium tracking-tight md:text-3xl">{title}</h2>
      <ol className="border-t border-line">
        {entries.map((e) => (
          <li key={e.title + e.org} className="grid gap-2 border-b border-line py-7 md:grid-cols-12 md:gap-8">
            <p className={`text-base md:col-span-3 ${isOngoing(e) ? "text-accent" : "text-muted"}`}>{yearRange(e)}</p>
            <div className="md:col-span-9">
              <h3 className="text-xl font-medium tracking-tight">
                {e.title}, {e.org}
              </h3>
              {e.bullets.length > 0 && (
                <ul className="mt-3 flex max-w-[44rem] list-disc flex-col gap-1 pl-5 text-base text-muted marker:text-line">
                  {e.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
              {e.project && (
                <Link to={`/work/${e.project}`} className="link mt-3 inline-block text-base">
                  Project details
                </Link>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Facts({ label, items }) {
  return (
    <div>
      <dt className="text-muted">{label}</dt>
      {items.map((item) => (
        <dd key={item} className="mt-1">
          {item}
        </dd>
      ))}
    </div>
  );
}

export default function About() {
  useTitle("About");

  return (
    <>
      <PageHeader title="About" />

      <section className="wrap grid gap-12 md:grid-cols-12 md:gap-8">
        <div className="prose-block max-w-[38rem] text-xl leading-relaxed md:col-span-8">
          {story.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <dl className="flex flex-col gap-6 text-base md:col-span-3 md:col-start-10">
          <Facts label="Languages" items={languages.map((l) => `${l.name}, ${l.level}`)} />
          <Facts label="Outside work" items={interests} />
          <div>
            <a href={profile.cvUrl} target="_blank" rel="noopener" className="link font-medium">
              Download CV as PDF
            </a>
          </div>
        </dl>
      </section>

      <EntryList title="Experience" entries={experience} />
      <EntryList title="Education" entries={education} />

      <section className="wrap mt-24 md:mt-32">
        <h2 className="mb-8 text-2xl font-medium tracking-tight md:text-3xl">Skills</h2>
        <div className="grid gap-10 border-t border-line pt-6 sm:grid-cols-2 md:grid-cols-4 md:gap-8">
          {skills.map((g) => (
            <div key={g.group}>
              <h3 className="text-base text-muted">{g.group}</h3>
              <ul className="mt-3 flex flex-col gap-1">
                {g.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
