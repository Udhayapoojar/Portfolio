import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { notFound } from 'next/navigation'
import { SiteShell } from '@/components/site-shell'
import { getProject, projects } from '@/data/projects'

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  return project
    ? {
        title: project.title,
        description: project.summary,
      }
    : { title: 'Project not found' }
}

export default async function CaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  const number = String(projects.findIndex((item) => item.slug === project.slug) + 1).padStart(2, '0')

  return (
    <SiteShell>
      <main className="section-shell pb-24">
        <div className="pt-12 sm:pt-20">
          <Link
            href="/projects"
            className="text-sm text-muted-foreground underline decoration-border underline-offset-4 hover:text-foreground inline-flex items-center gap-1.5"
          >
            <ArrowLeft className="size-3.5" aria-hidden="true" />
            <span>Back to selected work</span>
          </Link>
          <div className="mt-14 grid gap-8 lg:grid-cols-[8rem_minmax(0,1fr)]">
            <p className="font-mono text-sm text-muted-foreground">{number}</p>
            <div>
              <p className="eyebrow text-primary">{project.category}</p>
              <h1 className="editorial-title mt-4 max-w-4xl text-4xl sm:text-6xl text-balance">
                {project.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                {project.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs text-muted-foreground bg-accent/40 border border-border/60 px-2.5 py-1 rounded-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[8rem_minmax(0,44rem)]">
          <aside className="hidden lg:block text-sm text-muted-foreground sticky top-24 self-start">
            <p className="eyebrow">On this page</p>
            <nav className="mt-5 grid gap-3">
              <a href="#overview" className="hover:text-primary transition-colors">
                Overview &amp; Purpose
              </a>
              <a href="#contribution" className="hover:text-primary transition-colors">
                My Role &amp; Contribution
              </a>
              <a href="#engineering-areas" className="hover:text-primary transition-colors">
                Engineering Areas
              </a>
              <a href="#challenges" className="hover:text-primary transition-colors">
                Challenges &amp; Solutions
              </a>
              <a href="#technologies" className="hover:text-primary transition-colors">
                Technologies Used
              </a>
              <a href="#learning" className="hover:text-primary transition-colors">
                Key Takeaway
              </a>
            </nav>
          </aside>

          <article className="max-w-3xl space-y-16">
            <section id="overview" className="scroll-mt-24">
              <h2 className="editorial-title text-2xl sm:text-3xl">Project Overview</h2>
              <p className="mt-5 text-base leading-8 text-muted-foreground">
                {project.overview}
              </p>
              <div className="mt-8 border-t border-border pt-6">
                <h3 className="text-xs font-semibold tracking-wider uppercase font-mono text-muted-foreground">
                  Problem &amp; Business Need
                </h3>
                <p className="mt-3 text-base leading-8 text-foreground/90">
                  {project.problem}
                </p>
              </div>
            </section>

            <section id="contribution" className="border-t border-border pt-10 scroll-mt-24">
              <h2 className="editorial-title text-2xl sm:text-3xl">My Role &amp; Contribution</h2>
              <p className="mt-5 text-base leading-8 text-foreground/90">
                {project.contribution}
              </p>
            </section>

            <section id="engineering-areas" className="border-t border-border pt-10 scroll-mt-24">
              <h2 className="editorial-title text-2xl sm:text-3xl">Selected Engineering Areas</h2>
              <div className="mt-8 grid gap-8">
                {project.engineeringAreas.map((area, index) => (
                  <div key={index} className="border border-border/80 bg-card/40 p-6 rounded-sm space-y-3">
                    <h3 className="text-base font-serif font-medium text-foreground flex items-center gap-2">
                      <span className="font-mono text-xs text-primary font-medium">0{index + 1}.</span>
                      <span>{area.title}</span>
                    </h3>
                    <ul className="space-y-2.5 pt-2">
                      {area.points.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2.5 text-sm leading-6 text-muted-foreground">
                          <span className="text-primary font-mono text-xs mt-1 shrink-0">—</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section id="challenges" className="border-t border-border pt-10 scroll-mt-24">
              <h2 className="editorial-title text-2xl sm:text-3xl">Technical Challenges &amp; Solutions</h2>
              <div className="mt-8 grid gap-6">
                {project.challenges.map((item, index) => (
                  <div
                    key={index}
                    className="border border-border/80 bg-card/40 p-5 rounded-sm space-y-2.5"
                  >
                    <h3 className="text-sm font-semibold text-foreground flex items-start gap-2">
                      <span className="font-mono text-xs text-primary mt-0.5">[{index + 1}]</span>
                      <span>{item.challenge}</span>
                    </h3>
                    <p className="text-sm leading-7 text-muted-foreground pl-6">
                      {item.solution}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section id="technologies" className="border-t border-border pt-10 scroll-mt-24">
              <h2 className="editorial-title text-2xl sm:text-3xl">Technologies Used</h2>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs text-foreground bg-accent/50 border border-border px-3 py-1.5 rounded-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </section>

            <section id="learning" className="border-t border-border pt-10 scroll-mt-24">
              <h2 className="editorial-title text-2xl sm:text-3xl">Key Engineering Takeaway</h2>
              <div className="mt-6 border-l-2 border-primary pl-5 py-2">
                <p className="text-base leading-8 text-foreground/90 italic">
                  &ldquo;{project.learned}&rdquo;
                </p>
              </div>
            </section>

            <div className="pt-8 border-t border-border flex flex-wrap items-center justify-between gap-4">
              <Link
                href="/projects"
                className="text-sm underline decoration-border underline-offset-4 hover:text-primary transition-colors inline-flex items-center gap-1"
              >
                <ArrowLeft className="size-3" aria-hidden="true" />
                <span>Return to selected work</span>
              </Link>
              <Link
                href="/contact"
                className="text-sm underline decoration-primary decoration-2 underline-offset-4 hover:text-primary transition-colors inline-flex items-center gap-1 font-medium"
              >
                <span>Discuss this project</span>
                <ArrowUpRight className="size-3" aria-hidden="true" />
              </Link>
            </div>
          </article>
        </div>
      </main>
    </SiteShell>
  )
}

