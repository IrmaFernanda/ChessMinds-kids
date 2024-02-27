import { MenuItemType } from '@shared/models'
import { ComponentProps, useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'

type MenuItemProps = Partial<MenuItemType> & ComponentProps<'article'>

export const MenuItem = ({ title, description, image, className, ...props }: MenuItemProps) => {
  const [imageImg, setImageImg] = useState<string | null>(null)

  useEffect(() => {
    const loadImage = async () => {
      try {
        const module = await import(`@/assets/pieces/${image}.png`)
        setImageImg(module.default)
      } catch (error) {
        console.error('Error loading image:', error)
      }
    }

    loadImage()
  }, [image])

  return (
    <article
      className={twMerge(
        'flex flex-col md:flex-row items-center rounded-md shadow hover:scale-105 duration-500 cursor-pointer',
        className
      )}
      {...props}
    >
      <img
        className="object-cover  rounded-t-lg h-auto w-24 md:rounded-none md:rounded-s-lg"
        src={imageImg}
        alt=""
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
      </div>
    </article>
  )
}
