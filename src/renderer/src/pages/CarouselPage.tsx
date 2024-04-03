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
        <div>
          <button onClick={() => reactSwipeEl.next()}>Siguiente</button>
          <button onClick={() => reactSwipeEl.prev()}>Anterior</button>
        </div>
      </div>
    </section>
  )
}
