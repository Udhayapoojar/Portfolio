import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '@/data/projects'

type ProjectIndexProps = {
  projects: Project[]
  compact?: boolean
}

export function ProjectIndex({ projects, compact = false }: ProjectIndexProps) {
  return (
    <div className="border-y border-border">
      {projects.map((project, index) => {
        const featured = index === 0 && !compact
        return (
          <article
            key={project.slug}
            className={`grid gap-6 border-b border-border py-8 last:border-b-0 sm:grid-cols-[4rem_minmax(0,1fr)_11.5rem] sm:gap-8 ${
              featured ? 'bg-accent/25 py-10 pl-4 sm:py-12 sm:pl-6 rounded-sm' : ''
            }`}
          >
            <p className={`font-mono text-xs ${featured ? 'text-primary font-bold' : 'text-muted-foreground'}`}>
              {String(index + 1).padStart(2, '0')}
            </p>
            <div className={featured ? 'max-w-3xl' : 'max-w-2xl'}>
              <p className="eyebrow">{project.focus}{featured && ' / Featured'}</p>
              <h3 className={`editorial-title mt-3 text-foreground ${featured ? 'text-2xl sm:text-4xl' : 'text-xl sm:text-2xl'}`}>
                {project.title}
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
                {project.summary}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.slice(0, featured ? 5 : 4).map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[11px] text-muted-foreground bg-accent/40 border border-border/60 px-2 py-0.5 rounded-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3 self-end sm:flex-col sm:items-end sm:justify-center sm:self-center">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-xs bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground hover:bg-primary/90 transition-colors shadow-xs"
                >
                  <span>View Live Demo</span>
                  <ArrowUpRight className="size-3.5" aria-hidden="true" />
                </a>
              )}
              <Link
                href={`/projects/${project.slug}`}
                className="text-sm font-medium text-foreground underline decoration-border underline-offset-4 transition-[text-decoration-color,color] hover:text-primary hover:decoration-primary inline-flex items-center gap-1"
              >
                <span>Case study</span>
                <ArrowUpRight className="size-3.5" aria-hidden="true" />
              </Link>
            </div>
          </article>
        )
      })}
    </div>
  )
}

