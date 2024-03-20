import { MenuItemType } from '@shared/models'
import { useNavigate, useParams } from 'react-router-dom'
import { BackButton } from '../Button/BackButton'
import { MenuItem } from './MenuItem'
import { useEffect, useState } from 'react'
import { mainMenuItems } from '@renderer/store'

type MenuProps = {
  title: string
  menuItems: MenuItemType[]
}

export const Menu = () => {
  const [title, setTitle] = useState('')
  const [menuItems, setMenuItems] = useState<MenuItemType[]>([])
  const { menu } = useParams()
  const navigate = useNavigate()
  const menuItemStyles = `hover:bg-gray-100 dark:border-gray-700 dark:bg-cyan-700 dark:hover:bg-teal-600`

  useEffect(() => {
    const item = mainMenuItems.find((item) => item.path === menu)
    setTitle(item?.title || '')
    setMenuItems(item?.menuItems || [])
  }, [menu])

  const handleClick = (lesson) => {
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
