import { MenuItemType } from '@shared/models'
import { MenuItem } from './MenuItem'

type MenuProps = {
  title: string
  menuItems: MenuItemType[]
}

export const Menu = ({ title, menuItems }: MenuProps) => {
  const menuItemStyles = `hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700`

  return (
    <>
      <section className="min-h-lvh w-full flex flex-col items-center justify-center gap-10">
        <h1 className="text-4xl">{title}</h1>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-5 w-full md:max-w-[1220px] md:px-5 overflow-hidden">
          {menuItems.map(({ id, title, description, image }) => (
            <MenuItem
              className={menuItemStyles}
              key={id}
              title={title}
              description={description}
              image={image}
            />
          ))}
        </div>
      </section>
    </>
  )
}
