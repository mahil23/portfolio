import { experience } from "@/lib/data/experience";
import { ScrollReveal } from "@/components/ScrollReveal";

export function Experience() {
  return (
    <ScrollReveal className="w-full max-w-5xl py-20">
      <section id="experience">
        <div className="mb-10 flex items-center gap-3">
          <span className="text-sm font-medium uppercase tracking-[0.28em] text-accent">
            Experience
          </span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <div className="space-y-8">
          {experience.map((entry) => (
            <article
              key={entry.company}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
            >
              <div className="mb-6 flex flex-col gap-2 border-b border-white/10 pb-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <h3 className="text-2xl font-medium text-foreground">{entry.company}</h3>
                </div>
                <span className="text-sm uppercase tracking-[0.2em] text-foreground/70">
                  {entry.totalDuration}
                </span>
              </div>

              <div className="relative ml-3 space-y-6 border-l border-white/10 pl-6 before:absolute before:-left-[1px] before:top-0 before:h-2 before:w-2 before:rounded-full before:bg-accent">
                {entry.roles.map((role) => (
                  <div key={`${entry.company}-${role.title}`} className="relative">
                    <div className="mb-3 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                      <div>
                        <h4 className="text-xl font-medium text-foreground">{role.title}</h4>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-foreground/70">
                        <span>{role.duration}</span>
                        <span className="h-1 w-1 rounded-full bg-white/30" />
                        <span className="uppercase tracking-[0.14em] text-accent">
                          {role.type}
                        </span>
                      </div>
                    </div>

                    <ul className="list-disc space-y-2 pl-5 text-base leading-7 text-foreground/80">
                      {role.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </ScrollReveal>
  );
}
