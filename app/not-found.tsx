import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 text-foreground">
      <div className="max-w-md space-y-6">
        <p className="font-mono text-xs text-primary font-medium tracking-wider uppercase">
          404 / Not Found
        </p>
        <h1 className="editorial-title text-4xl sm:text-5xl">
          That page does not exist.
        </h1>
        <p className="text-base text-muted-foreground leading-7">
          The link may be outdated, moved, or the address might have been mistyped.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xs bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          <ArrowLeft className="size-3.5" aria-hidden="true" />
          <span>Return home</span>
        </Link>
      </div>
    </main>
  )
}

