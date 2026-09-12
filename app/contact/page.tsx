import { ArrowUpRight, Mail } from 'lucide-react'
import { PageIntro, SiteShell } from '@/components/site-shell'
import { contactCopy, email, formNote, socials } from '@/data/projects'

export const metadata = {
  title: 'Contact',
  description: contactCopy.body,
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.2a1.64 1.64 0 0 0-1.66 1.64c0 .9.74 1.63 1.66 1.63a1.63 1.63 0 0 0 1.64-1.63c0-.9-.73-1.64-1.64-1.64Z" />
    </svg>
  )
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function ResumeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  )
}

const contactLinks = [
  {
    label: 'Resume (PDF)',
    value: 'Download / View Resume',
    href: socials.resume,
    icon: ResumeIcon,
    isExternal: true,
  },
  {
    label: 'Email',
    value: email,
    href: socials.email,
    icon: Mail,
    isExternal: false,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/udhayapooja3',
    href: socials.linkedin,
    icon: LinkedInIcon,
    isExternal: true,
  },
  {
    label: 'GitHub',
    value: 'github.com/Udhayapoojar',
    href: socials.github,
    icon: GitHubIcon,
    isExternal: true,
  },
]


export default function ContactPage() {
  return (
    <SiteShell>
      <main>
        <PageIntro
          eyebrow="Contact"
          title={contactCopy.heading}
          description={contactCopy.body}
        />
        <section className="section-shell grid gap-12 pb-20 sm:pb-24 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="eyebrow">Connect &amp; Profiles</p>
            <div className="mt-4 border-y border-border">
              {contactLinks.map(({ label, value, href, icon: Icon, isExternal }) => (
                <a
                  key={label}
                  href={href}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  className="group flex items-center justify-between gap-4 border-b border-border/70 py-5 last:border-b-0 hover:bg-accent/20 px-2 -mx-2 rounded-xs transition-colors"
                >
                  <span className="flex items-center gap-3 text-sm font-medium text-foreground">
                    <Icon className="size-4 text-primary" aria-hidden="true" />
                    {label}
                  </span>
                  <span className="flex items-center gap-1.5 text-right font-mono text-xs text-muted-foreground group-hover:text-primary transition-colors">
                    <span>{value}</span>
                    <ArrowUpRight className="size-3" aria-hidden="true" />
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-10 border-t border-border pt-6">
              <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Direct Email</p>
              <p className="mt-2 text-sm text-foreground">
                <a
                  href={`mailto:${email}`}
                  className="font-medium underline decoration-border hover:decoration-primary hover:text-primary transition-colors"
                >
                  {email}
                </a>
              </p>
            </div>
          </div>

          <form
            action={`mailto:${email}`}
            method="post"
            encType="text/plain"
            className="border-t border-border pt-5 lg:border-t-0 lg:pt-0"
          >
            <p className="eyebrow">Send a note</p>
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm text-foreground">
                <span className="font-mono text-xs text-muted-foreground">Name</span>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="border-b border-input bg-transparent px-0 py-2.5 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary transition-colors"
                />
              </label>
              <label className="grid gap-2 text-sm text-foreground">
                <span className="font-mono text-xs text-muted-foreground">Email</span>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className="border-b border-input bg-transparent px-0 py-2.5 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary transition-colors"
                />
              </label>
            </div>
            <label className="mt-6 grid gap-2 text-sm text-foreground">
              <span className="font-mono text-xs text-muted-foreground">Message</span>
              <textarea
                name="message"
                required
                rows={6}
                placeholder="What project, role, or engineering problem would you like to discuss?"
                className="resize-y border-b border-input bg-transparent px-0 py-2.5 text-sm leading-6 text-foreground outline-none placeholder:text-muted-foreground focus:border-primary transition-colors"
              />
            </label>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 w-fit border-b border-foreground pb-1 text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-colors cursor-pointer"
              >
                <span>Open email draft</span>
                <ArrowUpRight className="size-3.5" aria-hidden="true" />
              </button>
              <p className="text-xs leading-5 text-muted-foreground max-w-sm">
                {formNote}
              </p>
            </div>
          </form>
        </section>
      </main>
    </SiteShell>
  )
}

