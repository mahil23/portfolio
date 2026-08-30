import { ScrollReveal } from "@/components/ScrollReveal";
import { skillGroups } from "@/lib/data/skills";

export function Skills() {
  return (
    <ScrollReveal className="w-full max-w-5xl py-20">
      <section id="skills">
        <div className="mb-10 flex items-center gap-3">
          <span className="text-sm font-medium uppercase tracking-[0.28em] text-accent">
            Skills
          </span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
            >
              <h3 className="mb-4 text-xl font-medium text-foreground">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={`${group.category}-${item}`}
                    className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-foreground/70"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </ScrollReveal>
  );
}
