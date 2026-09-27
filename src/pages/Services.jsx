import { Link } from "react-router";
import useTitle from "../hooks/useTitle";
import PageHeader from "../components/PageHeader";
import { process, services, workingStyle } from "../content/services";
import { profile } from "../content/profile";
import { languages } from "../content/about";

export default function Services() {
  useTitle("Services");

  return (
    <>
      <PageHeader
        title="Services"
        lead="I help small teams put AI to work: agents, automations and the apps around them."
      />

      <section className="wrap flex flex-col">
        {services.map((s) => (
          <div key={s.title} className="grid gap-4 border-t border-line py-10 md:grid-cols-12 md:gap-8 md:py-14">
            <h2 className="text-2xl font-medium tracking-tight md:col-span-4 md:text-3xl">{s.title}</h2>
            <div className="max-w-[40rem] md:col-span-8">
              <p>{s.description}</p>
              <p className="mt-4 text-base text-muted">Typical projects: {s.examples.join(", ")}.</p>
            </div>
          </div>
        ))}
      </section>

      <section className="wrap mt-10 md:mt-16">
        <p className="max-w-3xl text-2xl leading-snug tracking-tight md:text-3xl">{workingStyle}</p>
      </section>

      <section className="wrap mt-28 md:mt-40">
        <h2 className="mb-10 text-2xl font-medium tracking-tight md:text-3xl">How a project runs</h2>
        <ol className="grid gap-10 sm:grid-cols-2 md:grid-cols-4 md:gap-8">
          {process.map((step, i) => (
            <li key={step.title} className="border-t border-line pt-5">
              <span className="text-base text-accent tabular-nums">{i + 1}</span>
              <h3 className="mt-2 text-xl font-medium tracking-tight">{step.title}</h3>
              <p className="mt-2 text-base text-muted">{step.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="wrap mt-28 md:mt-40">
        <h2 className="mb-10 text-2xl font-medium tracking-tight md:text-3xl">Practical details</h2>
        <dl className="grid gap-8 border-t border-line pt-6 text-base sm:grid-cols-3">
          <div>
            <dt className="text-muted">Invoicing</dt>
            <dd className="mt-1">Through my registered business, Business ID {profile.businessId}</dd>
          </div>
          <div>
            <dt className="text-muted">Location</dt>
            <dd className="mt-1">{profile.location}, working remotely or on site</dd>
          </div>
          <div>
            <dt className="text-muted">Languages</dt>
            <dd className="mt-1">{languages.map((l) => l.name).join(", ")}</dd>
          </div>
        </dl>
        <p className="mt-16 text-xl">
          <Link to="/contact" className="link font-medium">
            Tell me about your project
          </Link>
        </p>
      </section>
    </>
  );
}
