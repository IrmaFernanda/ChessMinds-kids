import Image from '@renderer/components/Image'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ReactSwipe from 'react-swipe'

export const CarouselPage = () => {
  const { topic } = useParams()
  const [images, setImages] = useState<string[]>([])
  let reactSwipeEl
  const nameImages = ['wk', 'wq', 'wr', 'wb', 'wn', 'wp']

  useEffect(() => {
    const loadImage = async () => {
      try {
        const module: string[] = await Promise.all(
          nameImages.map((image) =>
            import(`@/assets/pieces/${image}.png`)
              .then((module) => module.default)
              .catch((error) => console.error('Error loading image:', error))
          )
        )
        setImages(module)
      } catch (error) {
        console.error('Error loading image:', error)
      }
    }

    loadImage()
  }, [])

  return (
    <section className="h-full flex items-center">
      <div className="w-full">
        <ReactSwipe
          childCount={images.length}
          ref={(el) => (reactSwipeEl = el)}
          swipeOptions={{ continuous: false }}
        >
          {images.map((image, i) => (
            <div key={i} className="w-full h-full flex items-center justify-center">
              <Image
                key={image}
                className={'h-full'}
                src={image}
                alt="slider-1"
                height={400}
                width={710}
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
