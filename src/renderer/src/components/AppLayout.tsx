import { ComponentProps, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

export const RootLayout = ({ children, className, ...props }: ComponentProps<'main'>) => {
  return (
    <main className={twMerge('flex flex-row h-screen', className)} {...props}>
      {children}
    </main>
  )
}

export const Header = ({ children, className, ...props }: ComponentProps<'header'>) => {
  return (
    <header className="absolute inset-0 h-8 bg-transparent" {...props}>
      {children}
    </header>
  )
}

export const Sidebar = ({ className, children, ...props }: ComponentProps<'aside'>) => {
  return (
    <aside
      className={twMerge(
        'fixed top-0 z-40 h-screen p-4 overflow-y-auto overflow-visible translate-x-full w-64 duration-1000 transition-transform',
        className
      )}
      {...props}
    >
      {children}
    </aside>
  )
}

export const Content = forwardRef<HTMLDivElement, ComponentProps<'section'>>(
  ({ className, children, ...props }, ref) => (
    <section ref={ref} className={twMerge('flex-1 overflow-auto', className)} {...props}>
      {children}
    </section>
  )
)

Content.displayName = 'Content'
