import { mainMenuItems } from '@renderer/store'
import { MenuItemType } from '@shared/models'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { MenuItem } from './MenuItem'

type MenuProps = {
  title: string
  menuItems: MenuItemType[]
}

export const Menu = () => {
  const [title, setTitle] = useState('')
  const [menuItems, setMenuItems] = useState<MenuItemType[]>([])
  const { menu } = useParams()
  const menuItemStyles = `hover:bg-gray-100 dark:border-gray-700 dark:bg-cyan-700 dark:hover:bg-teal-600`

  useEffect(() => {
    const item = mainMenuItems.find((item) => item.path === menu)
    setTitle(item?.title || '')
    setMenuItems(item?.menuItems || [])
  }, [menu])

  return (
    <>
      <section className="min-h-lvh w-full flex flex-col items-center justify-center gap-10">
        <h1 className="text-4xl">{title}</h1>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-5 w-full md:max-w-[1220px] md:px-5 overflow-hidden">
          {menuItems.map(({ id, title, description, image, lesson }) => (
            <Link key={id} to={menu === 'practice' ? `/submenu/${lesson}` : `/carousel/${lesson}`}>
              <MenuItem
                className={menuItemStyles}
                title={title}
                description={description}
                image={image}
              />
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
