import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { navItems, socials, currentYear, footerTagline } from '@/data/projects'
import { MobileNav } from './mobile-nav'

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/95 backdrop-blur-xs">
      <div className="section-shell flex min-h-16 items-center justify-between gap-6">
        <Link href="/" className="font-serif text-lg tracking-tight text-foreground hover:text-primary">
          Udhaya Pooja R<span className="text-primary">.</span>
        </Link>
        <nav aria-label="Primary navigation" className="hidden items-center gap-7 md:flex">
          {navItems
            .filter((item) => item.label !== 'Home')
            .map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
        </nav>
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="text-sm font-medium text-foreground underline decoration-border underline-offset-4 transition-[text-decoration-color,color] hover:text-primary hover:decoration-primary"
          >
            Contact <ArrowUpRight className="inline size-3" aria-hidden="true" />
          </Link>
        </div>
        <MobileNav />
      </div>
    </header>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="section-shell flex flex-col gap-5 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-serif text-lg text-foreground">
            Udhaya Pooja R<span className="text-primary">.</span>
          </p>
          <p className="mt-1 text-xs text-muted-foreground">{footerTagline}</p>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <a
            href={socials.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors font-medium text-foreground"
          >
            Resume (PDF)
          </a>
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={socials.email}
            className="hover:text-foreground transition-colors"
          >
            Email
          </a>
          <span className="font-mono text-xs">© {currentYear}</span>
        </div>
      </div>
    </footer>
  )
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  )
}

export function PageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description: string
}) {
  return (
    <div className="section-shell pt-12 pb-10 sm:pt-16 sm:pb-12">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="editorial-title mt-4 max-w-3xl text-balance text-4xl sm:text-6xl">
        {title}
      </h1>
      <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
        {description}
      </p>
    </div>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  href,
  linkLabel,
}: {
  eyebrow: string
  title: string
  description?: string
  href?: string
  linkLabel?: string
}) {
  return (
    <div className="flex items-end justify-between gap-6">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="editorial-title mt-3 text-3xl sm:text-4xl">{title}</h2>
        {description && (
          <p className="mt-4 max-w-2xl text-sm leading-6 text-muted-foreground">
            {description}
          </p>
        )}
      </div>
      {href && (
        <Link
          href={href}
          className="hidden shrink-0 text-sm underline decoration-border underline-offset-4 hover:text-primary sm:block"
        >
          {linkLabel} <ArrowUpRight className="inline size-3" aria-hidden="true" />
        </Link>
      )}
    </div>
  )
}

export function Tag({ children }: { children: React.ReactNode }) {
  return <span className="font-mono text-xs text-muted-foreground">{children}</span>
}

export function ArrowLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="text-sm text-foreground underline decoration-border underline-offset-4 hover:text-primary"
    >
      {children} <ArrowUpRight className="inline size-3" aria-hidden="true" />
    </Link>
  )
}

export function Rule() {
  return <div className="h-px w-full bg-border" />
}

