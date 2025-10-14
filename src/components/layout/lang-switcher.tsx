'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { i18n, type Locale } from '@/lib/i18n-config'
import { Button } from '@/components/ui/button'

export default function LocaleSwitcher() {
  const pathName = usePathname()

  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <div className="flex items-center gap-1">
      {i18n.locales.map(locale => {
        const isActive = pathName.startsWith(`/${locale}`);
        return (
          <Button
            key={locale}
            asChild
            variant={isActive ? 'ghost' : 'ghost'}
            size="sm"
            className={`text-xs uppercase ${isActive ? 'font-bold text-primary' : 'font-normal text-primary/80'}`}
          >
            <Link href={redirectedPathName(locale)}>{locale}</Link>
          </Button>
        )
      })}
    </div>
  )
}
