import { MainMenuItemType } from '@shared/models'
import { ComponentProps } from 'react'
import { useNavigate } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'
import { MainMenuItem } from './MainMenuItem'

type MainMenuProps = ComponentProps<'section'>

export const MainMenu = ({ className, ...props }: MainMenuProps) => {
  const navigate = useNavigate()
  const mainMenuItems: MainMenuItemType[] = [
    {
      id: `jugar`,
      title: `Jugar`,
      path: `play`
    },
    {
      id: `aprender`,
      title: `TUTORIA DE PIEZAS`,
      path: `learn`
    },
    {
      id: `ejercicios`,
      title: `TUTORIAL DE EJERCICIOS`,
      path: `exercises`
    },
    {
      id: `practicar`,
      title: `PRACTICA LO APRENDIDO`,
      path: `practice`
    }
  ]
  const mainMenuItemStyles = `hover:bg-gray-100 dark:border-gray-700 dark:bg-cyan-700 dark:hover:bg-teal-600`

  const handleClick = (path) => {
    navigate(path)
  }

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
                <MainMenuItem
                  className={mainMenuItemStyles}
                  key={id}
                  title={title}
                  path={path}
                  onClick={() => handleClick(path)}
                />
              ))}
            </div>
          </section>
        </div>
      </section>
    </>
  )
}
