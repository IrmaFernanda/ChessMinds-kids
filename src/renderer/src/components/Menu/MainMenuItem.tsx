import { MainMenuItemType } from '@shared/models'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type MainMenuItemProps = Partial<MainMenuItemType> & ComponentProps<'article'>

export const MainMenuItem = ({ title, className, ...props }: MainMenuItemProps) => {
  return (
    <article
      className={twMerge(
        'flex items-center justify-center max-w-sm p-6 bg-white shadow hover:scale-105 rounded-md cursor-pointer duration-500 hover',
        className
      )}
      {...props}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
    </article>
  )
}
