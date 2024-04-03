import Image from '@renderer/components/Image'
import importAllImages from '@renderer/utils/importImages'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ReactSwipe from 'react-swipe'


export const CarouselPage = () => {
  const { lesson } = useParams()
  const [numberImages, setNumberImages] = useState<number>(0)
  const [images, setImages] = useState<string[]>([])
  let reactSwipeEl

  useEffect(() => {
    const loadImages = async () => {
      console.log('Nombre carpeta:', lesson)
      const importedImages = await importAllImages(lesson)
      console.log(importedImages.length)
      console.log(importedImages)
      setImages(importedImages)
      setNumberImages(importedImages.length)
      console.log(importedImages.length)
    }
    loadImages()
  }, [lesson])

  return (
    <section className="h-full flex items-center">
      <div className="w-full">
        <ReactSwipe
          childCount={numberImages}
          ref={(el) => (reactSwipeEl = el)}
          swipeOptions={{ continuous: false }}
        >
          {images.map((_, i) => (
            <div key={i} className="w-full h-full flex items-center justify-center">
              <Image
                className={'h-full'}
                src={String(i + 1)}
                alt="slider-1"
                height={400}
                width={710}
                lesson={lesson ?? ''}
              />
            </div>
          ))}
        </ReactSwipe>
        <div className='inline-flex w-full justify-center'>
          <div className="inline-flex w-full justify-center rounded-md bg-cyan-600 px-6 py-4 text-xl font-semibold text-white shadow-sm hover:bg-teal-500 sm:ml-0 sm:w-1/4">
            <button onClick={() => reactSwipeEl.prev()}>ANTERIOR</button>         
          </div>
          <div className="inline-flex w-frll justify-center rounded-md bg-cyan-600 px-6 py-4 text-xl font-semibold text-white shadow-sm hover:bg-teal-500 sm:ml-9 sm:w-1/4">
            <button onClick={() => reactSwipeEl.next()}>SIGUIENTE</button>
          </div>
        </div>
      </div>
    </section>
  )  
}
