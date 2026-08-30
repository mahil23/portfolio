import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { ScrollReveal } from "@/components/ScrollReveal";
import { projects } from "@/lib/data/projects";

const featuredProjects = projects.filter((project) => project.featured);
const regularProjects = projects.filter((project) => !project.featured);

export function Projects() {
  const renderProjectCard = (project: (typeof projects)[number], dense = false) => {
    const hasGithub = Boolean(project.githubUrl?.trim());
    const hasLive = Boolean(project.liveUrl?.trim());

    return (
      <article
        key={project.title}
        className={[
          "group rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-colors duration-200 hover:border-accent/30 hover:bg-white/[0.03] hover:shadow-[0_0_0_1px_rgba(122,168,137,0.14)]",
          dense ? "min-h-[260px]" : "min-h-[300px]",
        ].join(" ")}
      >
        <div className="flex h-full flex-col">
          <div className="mb-4 flex items-center justify-between gap-3">
            <h3 className={dense ? "text-xl font-medium text-foreground" : "text-2xl font-medium text-foreground"}>
              {project.title}
            </h3>
            {project.featured ? (
              <span className="rounded-full border border-accent/30 bg-accent/10 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-accent">
                Featured
              </span>
            ) : null}
          </div>

          <p className="mb-4 text-base leading-7 text-foreground/80">{project.oneLiner}</p>

          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-foreground/60">
            {project.role}
          </p>

          <div className="mb-5 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span
                key={`${project.title}-${item}`}
                className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-foreground/70"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-auto rounded-xl border border-accent/20 bg-accent/5 p-3">
            <p className="text-[10px] uppercase tracking-[0.22em] text-accent">Outcome</p>
            <p className="mt-2 text-sm leading-6 text-foreground/90">{project.outcome}</p>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            {hasGithub ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3 py-2 text-xs font-medium uppercase tracking-[0.16em] text-foreground transition-colors hover:border-accent/30 hover:text-accent"
              >
                <GithubIcon className="h-3.5 w-3.5" />
                Code
              </a>
            ) : (
              <span
                aria-disabled="true"
                className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3 py-2 text-xs font-medium uppercase tracking-[0.16em] text-foreground/60 opacity-60"
              >
                <GithubIcon className="h-3.5 w-3.5" />
                Code
              </span>
            )}

            {hasLive ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-transparent px-3 py-2 text-xs font-medium uppercase tracking-[0.16em] text-foreground/80 transition-colors hover:border-accent/30 hover:text-accent"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                Live
              </a>
            ) : null}
          </div>
        </div>
      </article>
    );
  };

  return (
    <ScrollReveal className="w-full max-w-5xl py-20">
      <section id="projects">
        <div className="mb-10 flex items-center gap-3">
          <span className="text-sm font-medium uppercase tracking-[0.28em] text-accent">
            Projects
          </span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <div className="space-y-8">
          <div className="grid gap-6 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <div key={project.title}>{renderProjectCard(project)}</div>
            ))}
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {regularProjects.map((project) => (
              <div key={project.title}>{renderProjectCard(project, true)}</div>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
