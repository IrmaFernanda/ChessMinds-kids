import { MenuItemType } from '@shared/models'
import { useNavigate } from 'react-router-dom'
import { BackButton } from '../Button/BackButton'
import { MenuItem } from './MenuItem'

type MenuProps = {
  title: string
  menuItems: MenuItemType[]
}

export const Menu = ({ title, menuItems }: MenuProps) => {
  const navigate = useNavigate()
  const menuItemStyles = `hover:bg-gray-100 dark:border-gray-700 dark:bg-cyan-700 dark:hover:bg-teal-600`

  const handleClick = (lesson) => {
    navigate(`/teach/${lesson}`, { replace: true })
  }

  return (
    <>
      <BackButton className="mb-4 absolute top-7 left-8"/>
      <section className="min-h-lvh w-full flex flex-col items-center justify-center gap-10">
        <h1 className="text-4xl">{title}</h1>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-5 w-full md:max-w-[1220px] md:px-5 overflow-hidden">
          {menuItems.map(({ id, title, description, image, lesson }) => (
            <MenuItem
              className={menuItemStyles}
              key={id}
              title={title}
              description={description}
              image={image}
              onClick={() => handleClick(lesson)}
            />
          ))}
        </div>
      </section>
    </>
  )
}
