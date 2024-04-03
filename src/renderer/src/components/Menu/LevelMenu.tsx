import { Exercise, Level } from '@shared/models'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MenuItem } from './MenuItem'

type LevelMenuProps = { level: Level; exercisesByType: Exercise[] }

export default function LevelMenu({ level, exercisesByType }: LevelMenuProps) {
  const [imageImg, setImageImg] = React.useState<string>('')
  const menuItemStyles = `hover:bg-gray-100 dark:border-gray-700 dark:bg-cyan-700 dark:hover:bg-teal-600`

  useEffect(() => {
    const loadImage = async () => {
      try {
        const module: string = await Promise.all([
          import(`../../assets/pictures/${level.image}.png`)
            .then((module) => module.default)
            .catch((error) => console.error('Error loading image:', error))
        ]).then((module) => module[0])
        setImageImg(module)
      } catch (error) {
        console.error('Error loading image:', error)
      }
    }

    loadImage()
  }, [level])

  return (
    <section key={level.id} className="min-h-lvh w-1/3 flex flex-col items-start justify-center">
      <div className="transform scale-75">
        <div className="flex flex-col items-center justify-center w-full">
          <img src={imageImg} />
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-5 w-full md:max-w-[1220px] md:px-3 overflow-hidden">
            {exercisesByType.map(({ id, code, name, level: lev }) => {
              if (level.id === lev.id) {
                return (
                  <Link key={code} to={`/play/${id}`}>
                    <MenuItem className={menuItemStyles} key={code} title={name} />
                  </Link>
                )
              }
              return null
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
