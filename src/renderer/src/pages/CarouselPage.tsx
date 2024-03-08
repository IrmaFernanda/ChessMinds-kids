import Image from '@renderer/components/Image'
import { Carousel } from 'keep-react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const CarouselPage = () => {
  const { lesson } = useParams()
  const [imageImg, setImageImg] = useState<string | null>(null)

  useEffect(() => {
    const loadImage = async () => {
      try {
        const module = await import(`@/assets/pieces/wk.png`)
        setImageImg(module.default)
      } catch (error) {
        console.error('Error loading image:', error)
      }
    }

    loadImage()
  }, [])

  return (
    <section>
      <Carousel slideInterval={5000} showControls={true} indicators={true}>
        <Image src={imageImg} alt="slider-1" height={400} width={910} />
      </Carousel>
    </section>
  )
}
