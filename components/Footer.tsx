import { Mail } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import { profile } from "@/lib/data/profile";

export function Footer() {
  return (
    <footer id="contact" className="w-full max-w-5xl py-20">
      <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
        <p className="text-center text-xl text-foreground md:text-2xl">
          Open to backend and full-stack roles — let's talk.
        </p>

        <div className="mt-6 flex items-center justify-center gap-4">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/20 text-foreground/80 transition-colors hover:border-accent/30 hover:text-accent"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/20 text-foreground/80 transition-colors hover:border-accent/30 hover:text-accent"
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${profile.socials.email}`}
            aria-label="Email"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/20 text-foreground/80 transition-colors hover:border-accent/30 hover:text-accent"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>

        <p className="mt-8 text-center text-xs uppercase tracking-[0.2em] text-foreground/60">
          © 2026 Mahil. Built with Next.js.
        </p>
      </div>
    </footer>
  );
}
