import { ComponentProps, useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'

type ImageProps = ComponentProps<'img'> & { lesson: string }

export const Image = ({ lesson, className, src, alt, height, width, ...props }: ImageProps) => {
  const [imageImg, setImageImg] = useState<string | void>('')

  useEffect(() => {
    const loadImage = async () => {
      try {
        console.log('import:', `../assets/${lesson}/${src}.png`)
        const module: string = await Promise.all([
          import(`../assets/${lesson}/${src}.png`)
            .then((module) => module.default)
            .catch((error) => console.error('Error loading image:', error))
        ]).then((module) => module[0])
        console.log('module:', module)
        setImageImg(module)
      } catch (error) {
        console.error('Error loading image:', error)
      }
    }

    loadImage()
  }, [])

  return (
    <img
      className={twMerge('', className)}
      src={imageImg ?? ''}
      alt={alt}
      height={height}
      width={width}
      {...props}
    />
  )
}

export default Image
