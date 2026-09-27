import useTitle from "../hooks/useTitle";
import PageHeader from "../components/PageHeader";
import { links, profile } from "../content/profile";

export default function Contact() {
  useTitle("Contact");

  return (
    <>
      <PageHeader title="Contact" lead="Tell me what you're working on. Email reaches me fastest." />

      <section className="wrap grid gap-16 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-7">
          <a
            href={`mailto:${profile.email}`}
            className="link text-2xl font-medium tracking-tight [overflow-wrap:anywhere] sm:text-4xl"
          >
            {profile.email}
          </a>
          <p className="mt-4 text-muted">
            Phone{" "}
            <a className="link text-ink" href={`tel:${profile.phone.replace(/\s/g, "")}`}>
              {profile.phone}
            </a>
          </p>
        </div>

        <dl className="flex flex-col gap-6 text-base md:col-span-4 md:col-start-9">
          <div>
            <dt className="text-muted">Elsewhere</dt>
            {links.map((l) => (
              <dd key={l.href} className="mt-1">
                <a className="link" href={l.href} target="_blank" rel="noopener noreferrer">
                  {l.label}
                </a>
              </dd>
            ))}
          </div>
          <div>
            <dt className="text-muted">CV</dt>
            <dd className="mt-1">
              <a className="link" href={profile.cvUrl} target="_blank" rel="noopener">
                Download as PDF
              </a>
            </dd>
          </div>
        </dl>
      </section>
    </>
  );
}
