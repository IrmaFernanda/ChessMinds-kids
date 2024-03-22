import { MainMenuItemType } from '@shared/models'
import { ComponentProps } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'
import { MainMenuItem } from './MainMenuItem'
import { mainMenuItems } from '@renderer/store'

type MainMenuProps = ComponentProps<'section'>

export const MainMenu = ({ className, ...props }: MainMenuProps) => {
  const navigate = useNavigate()
  const mainMenuItemStyles = `hover:bg-gray-100 dark:border-gray-700 dark:bg-cyan-700 dark:hover:bg-teal-600`

  const handleClick = (item: MainMenuItemType) => {
    navigate(`${item.path}`)
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
              {mainMenuItems.map((item) => (
                <Link key={item.id} to={`${item.path}`}>
                  <MainMenuItem className={mainMenuItemStyles} title={item.title} />
                </Link>
              ))}
              <button onClick={() => navigate(`/menu/practice/descubierta`)}>Ejemplo</button>
            </div>
          </section>
        </div>
      </section>
    </>
  )
}
