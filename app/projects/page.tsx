import type { Metadata } from 'next'
import { PageIntro, SiteShell } from '@/components/site-shell'
import { ProjectIndex } from '@/components/project-index'
import { projectIntro, projects } from '@/data/projects'

export const metadata: Metadata = {
  title: 'Selected Work',
  description: projectIntro,
}

export default function ProjectsPage() {
  return (
    <SiteShell>
      <main>
        <PageIntro
          eyebrow="Selected work"
          title="Projects built around real operational workflows."
          description={projectIntro}
        />
        <section className="section-shell pb-24">
          <ProjectIndex projects={projects} />
        </section>
      </main>
    </SiteShell>
  )
}

