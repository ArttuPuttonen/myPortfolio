import useTitle from "../hooks/useTitle";
import PageHeader from "../components/PageHeader";
import ProjectList from "../components/ProjectList";
import { projects } from "../content/projects";

export default function Work() {
  useTitle("Work");

  return (
    <>
      <PageHeader
        title="Work"
        lead="Things I've built, from my thesis to the tools that keep my own company running."
      />
      <section className="wrap">
        <ProjectList projects={projects} />
      </section>
    </>
  );
}
