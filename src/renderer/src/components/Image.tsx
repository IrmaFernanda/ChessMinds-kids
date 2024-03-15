import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export const Image = ({ className, src, alt, height, width, ...props }: ComponentProps<'img'>) => {
  console.log('src:', src)

  return (
    <img
      className={twMerge('', className)}
      src={src}
      alt={alt}
      height={height}
      width={width}
      {...props}
    />
  )
}

export default Image
