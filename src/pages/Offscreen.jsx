import useTitle from "../hooks/useTitle";
import PageHeader from "../components/PageHeader";
import CubeFace from "../components/CubeFace";
import { climbing, cubing } from "../content/offscreen";

export default function Offscreen() {
  useTitle("Off-screen");

  return (
    <>
      <PageHeader title="Off-screen" lead="Speedcubing for more than ten years, climbing for the last two." />

      <section className="wrap grid gap-12 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-7">
          <h2 className="text-2xl font-medium tracking-tight md:text-3xl">Speedcubing</h2>
          <div className="prose-block mt-6 max-w-[38rem]">
            {cubing.intro.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="mt-10">
            <CubeFace />
          </div>
        </div>

        <div className="md:col-span-4 md:col-start-9">
          <dl className="border-t border-line text-base">
            {cubing.stats.map((s) => (
              <div key={s.label} className="flex justify-between gap-4 border-b border-line py-3">
                <dt className="text-muted">{s.label}</dt>
                <dd className="font-medium">{s.value}</dd>
              </div>
            ))}
          </dl>
          <a className="link mt-4 inline-block text-base" href={cubing.profile} target="_blank" rel="noopener noreferrer">
            All results on my WCA profile
          </a>
        </div>
      </section>

      <section className="wrap mt-24 grid gap-6 md:mt-32 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-7">
          <h2 className="text-2xl font-medium tracking-tight md:text-3xl">Climbing</h2>
          <div className="prose-block mt-6 max-w-[38rem]">
            {climbing.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
