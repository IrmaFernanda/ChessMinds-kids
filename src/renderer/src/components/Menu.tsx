import { MenuItemType } from '@shared/models'
import { MenuItem } from './MenuItem'
import { useNavigate } from 'react-router-dom'

type MenuProps = {
  title: string
  menuItems: MenuItemType[]
}

export const Menu = ({ title, menuItems }: MenuProps) => {
  const navigate = useNavigate()
  const menuItemStyles = `hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700`

  const handleClick = (lesson) => {
    console.log('lesson', lesson)
    navigate(`/teach/${lesson}`, { replace: true })
  }

  return (
    <>
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
