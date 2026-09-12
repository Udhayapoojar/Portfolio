import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { ProjectIndex } from '@/components/project-index'
import { SiteShell, SectionHeading } from '@/components/site-shell'
import {
  aboutCopy,
  experience,
  featuredProjects,
  profileFacts,
  skillGroups,
} from '@/data/projects'

export default function Page() {
  return (
    <SiteShell>
      <main>
        <section className="section-shell grid gap-9 pb-14 pt-14 sm:pb-18 sm:pt-20 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-16">
          <div>
            <p className="text-sm font-medium text-muted-foreground">Hello — I&apos;m</p>
            <h1 className="editorial-title mt-3 text-5xl sm:text-7xl lg:text-8xl">
              Udhaya Pooja R<span className="text-primary">.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-8 text-foreground sm:text-2xl">
              Full-Stack Developer building practical business applications, dependable APIs, and inventory &amp; operational systems.
            </p>
            <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">
              Currently working across React.js, TypeScript, Node.js, MySQL, and third-party integrations (including FedEx APIs and barcode workflows).
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-5 text-sm">
              <a
                href="https://drive.google.com/file/d/1AXwJXNvCBDAXIXP1yuVEsWtkkAZbbv-9/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xs bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors shadow-xs"
              >
                <span>Resume (PDF)</span>
                <ArrowUpRight className="size-3.5" aria-hidden="true" />
              </a>
              <Link
                href="/projects"
                className="font-medium text-foreground underline decoration-primary decoration-2 underline-offset-4 transition-[color,text-decoration-color] hover:text-primary inline-flex items-center gap-1"
              >
                <span>Selected work</span>
                <ArrowUpRight className="size-3.5" aria-hidden="true" />
              </Link>
              <Link
                href="/experience"
                className="text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:text-primary inline-flex items-center gap-1"
              >
                <span>Experience</span>
                <ArrowUpRight className="size-3.5" aria-hidden="true" />
              </Link>
              <Link
                href="/contact"
                className="text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:text-primary inline-flex items-center gap-1"
              >
                <span>Contact</span>
                <ArrowUpRight className="size-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <aside className="border-t border-primary/40 pt-4 text-sm lg:mt-6 lg:border-l lg:border-t-0 lg:pl-10">
            <p className="eyebrow text-primary font-bold">Currently</p>
            <ul className="mt-4 grid gap-3 leading-6 text-base w-full">
              <li className="flex items-start gap-2">
                <span className="text-primary font-mono text-xs mt-1">▸</span>
                <span>Software Developer at Neural Schema Pvt. Ltd.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-mono text-xs mt-1">▸</span>
                <span>Building inventory &amp; work-order systems.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-mono text-xs mt-1">▸</span>
                <span>Based in Tamil Nadu, India.</span>
              </li>
            </ul>
          </aside>
        </section>

        <section id="about" className="section-shell border-t border-border py-16 sm:py-20 scroll-mt-20">
          <SectionHeading
            eyebrow="About"
            title="A practical approach to software."
            description={aboutCopy}
          />
          <div className="mt-12 grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
            <dl className="grid gap-5 text-sm sm:grid-cols-2 lg:grid-cols-1">
              {profileFacts.map(([label, value]) => (
                <div key={label} className="grid grid-cols-[8rem_1fr] gap-3 border-b border-border/50 pb-3 last:border-b-0">
                  <dt className="text-muted-foreground font-mono text-xs uppercase tracking-wider pt-0.5">{label}</dt>
                  <dd className="text-foreground font-medium">{value}</dd>
                </div>
              ))}
            </dl>
            <div className="grid gap-8 sm:grid-cols-2">
              {skillGroups.map((group) => (
                <div key={group.label} className="border-t border-border pt-4">
                  <h3 className="text-sm font-serif text-foreground font-medium">{group.label}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        className="font-mono text-xs text-muted-foreground bg-accent/30 border border-border/60 px-2 py-0.5 rounded-sm"
                        key={skill}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell border-t border-border py-14 sm:py-18">
          <SectionHeading
            eyebrow="Selected work"
            title="Engineering case studies."
            description="A working index of applications and integrations shaped by real workflows and constraints."
            href="/projects"
            linkLabel="View all work"
          />
          <div className="mt-10">
            <ProjectIndex projects={featuredProjects} />
          </div>
        </section>

        <section className="section-shell border-t border-border py-16 sm:py-20">
          <SectionHeading
            eyebrow="Experience"
            title="A focused record of professional work."
            href="/experience"
            linkLabel="Detailed timeline"
          />
          <div className="mt-10 border-y border-border divide-y divide-border">
            {experience.map((item) => (
              <article
                key={item.role}
                className="grid gap-6 py-10 sm:grid-cols-[11rem_1fr]"
              >
                <div>
                  <p className="font-mono text-xs text-muted-foreground font-medium">{item.period}</p>
                  <span className="eyebrow mt-2 block text-primary">{item.type}</span>
                </div>
                <div>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <div>
                      <h3 className="text-2xl font-serif text-foreground">{item.role}</h3>
                      <p className="mt-1 text-sm font-medium text-foreground/85">{item.company}</p>
                    </div>
                  </div>
                  <p className="mt-4 max-w-2xl text-sm leading-6 text-muted-foreground">
                    {item.overview}
                  </p>
                  <ul className="mt-6 grid gap-2.5 text-sm leading-6 text-muted-foreground">
                    {item.contributions.slice(0, 4).map((entry, idx) => {
                      const [highlight, ...rest] = entry.split(': ')
                      return (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-primary font-mono text-xs mt-1 shrink-0">—</span>
                          <span>
                            <strong className="font-medium text-foreground/90">{highlight}</strong>
                            {rest.length > 0 && `: ${rest.join(': ')}`}
                          </span>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell border-t border-border py-14 sm:py-18">
          <SectionHeading
            eyebrow="Contact"
            title="Let&apos;s talk."
            description="I&apos;m open to software development opportunities, technical projects, and interesting engineering problems."
          />
          <div className="mt-8 flex items-center gap-6">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground underline decoration-primary decoration-2 underline-offset-4 hover:text-primary transition-colors"
            >
              <span>Get in touch</span>
              <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </Link>
            <a
              href="mailto:udhayapooja24@gmail.com"
              className="text-sm text-muted-foreground underline decoration-border underline-offset-4 hover:text-primary transition-colors"
            >
              udhayapooja24@gmail.com
            </a>
          </div>
        </section>
      </main>
    </SiteShell>
  )
}

