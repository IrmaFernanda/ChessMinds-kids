import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
import { MainMenuItem } from './MainMenuItem'
import { MainMenuItemType } from '@shared/models'

type MainMenuProps = ComponentProps<'section'>

export const MainMenu = ({ className, ...props }: MainMenuProps) => {
  const mainMenuItems: MainMenuItemType[] = [
    {
      id: `aprender`,
      title: `Aprender`,
      path: `aprender`
    },
    {
      id: `ejercicios`,
      title: `Ejercicios`,
      path: `ejercicios`
    },
    {
      id: `practicar`,
      title: `Practicar`,
      path: `practicar`
    }
  ]
  const mainMenuItemStyles = `hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700`

  return (
    <>
      <section
        className={twMerge('min-h-lvh flex items-center justify-center', className)}
        {...props}
      >
        <div className=" flex flex-col md:flex-row w-full items-center justify-between md:max-w-[1220px]">
          <section className="w-1/2 flex justify-center">Logo</section>
          <section className="w-1/2 flex justify-center">
            <div className={`grid grid-cols-1 gap-5 w-full sm:w-fit `}>
              {mainMenuItems.map(({ id, title, path }) => (
                <MainMenuItem className={mainMenuItemStyles} key={id} title={title} path={path} />
              ))}
            </div>
          </section>
        </div>
      </section>
    </>
  )
}
