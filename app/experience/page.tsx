import type { Metadata } from 'next'
import { ArrowUpRight } from 'lucide-react'
import { PageIntro, SiteShell } from '@/components/site-shell'
import { experience, experienceIntro, resumeUrl } from '@/data/projects'

export const metadata: Metadata = {
  title: 'Experience',
  description: experienceIntro,
}

export default function ExperiencePage() {
  return (
    <SiteShell>
      <main>
        <div className="relative">
          <PageIntro
            eyebrow="Experience"
            title="A focused record of professional engineering work."
            description={experienceIntro}
          />
          <div className="section-shell -mt-4 mb-8">
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xs bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors shadow-xs"
            >
              <span>Download Resume (PDF)</span>
              <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
        <section className="section-shell max-w-5xl pb-20 sm:pb-24">
          <div className="grid gap-14">
            {experience.map((item) => (
              <article key={item.role} className="border-t border-border pt-10">
                <div className="grid gap-8 lg:grid-cols-[12rem_1fr]">
                  <div>
                    <p className="font-mono text-xs text-muted-foreground font-medium">{item.period}</p>
                    <p className="eyebrow mt-2 text-primary">{item.type}</p>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h2 className="editorial-title text-2xl sm:text-3xl text-foreground">{item.role}</h2>
                      {item.companyUrl ? (
                        <a
                          href={item.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-1 inline-flex items-center gap-1 text-base font-medium text-foreground/85 hover:text-primary transition-colors underline decoration-border/80 underline-offset-4 hover:decoration-primary group"
                        >
                          <span>{item.company}</span>
                          <ArrowUpRight className="size-3.5 text-muted-foreground group-hover:text-primary transition-colors" aria-hidden="true" />
                        </a>
                      ) : (
                        <p className="mt-1 text-base font-medium text-foreground/85">{item.company}</p>
                      )}
                    </div>

                    <p className="text-base leading-7 text-muted-foreground">
                      {item.overview}
                    </p>

                    <div className="border-t border-border/80 pt-6">
                      <h3 className="text-xs font-semibold tracking-wider uppercase font-mono text-muted-foreground mb-4">
                        Key Responsibilities &amp; Contributions
                      </h3>
                      <ul className="grid gap-3.5">
                        {item.contributions.map((entry, idx) => {
                          const [highlight, ...rest] = entry.split(': ')
                          return (
                            <li
                              key={idx}
                              className="border border-border/70 bg-card/40 p-4 rounded-sm text-sm leading-6 text-muted-foreground"
                            >
                              <span className="font-medium text-foreground">{highlight}</span>
                              {rest.length > 0 && <span>: {rest.join(': ')}</span>}
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </SiteShell>
  )
}


