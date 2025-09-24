import { useEffect, useState } from 'react'
import Image from './atom/Image'
import './MovingImages.css'
import { MOVING_IMAGES_CONFIG } from './utility/Constants'

interface MovingImagesProps {
  images: string[]
  texts?: string[]
  speed?: number
}

function MovingImages({ images, texts = [], speed = MOVING_IMAGES_CONFIG.DEFAULT_SPEED }: MovingImagesProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length)
    }, speed)

    return () => clearInterval(interval)
  }, [speed, images.length])

  const currentImage = images[currentIndex]
  const currentText = texts[currentIndex] || ''

  return (
    <div className="moving-images-container">
      <div className="image-content">
        <div className="image-text">
          {currentText && <h2>{currentText}</h2>}
        </div>
        <div className="image-slider">
          <Image
            src={currentImage}
            alt={`Image ${currentIndex + 1}`}
            className="slider-image current"
          />
        </div>
      </div>
    </div>
  )
}

export default MovingImages