'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { mobileNavItems } from '@/data/projects'

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="p-2 text-muted-foreground hover:text-foreground focus-visible:outline-hidden"
      >
        {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
      </button>

      {open && (
        <div className="absolute inset-x-0 top-16 border-b border-border bg-background/98 px-6 py-6 shadow-sm backdrop-blur-xs">
          <nav aria-label="Mobile navigation" className="flex flex-col gap-5">
            {mobileNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://drive.google.com/file/d/1AXwJXNvCBDAXIXP1yuVEsWtkkAZbbv-9/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-xs bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <span>Download Resume (PDF)</span>
              <span aria-hidden="true">↗</span>
            </a>
          </nav>
        </div>
      )}
    </div>
  )
}

