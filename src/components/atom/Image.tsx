interface ImageProps {
  src: string
  alt: string
  className?: string
  width?: number | string
  height?: number | string
}

function Image({ src, alt, className, width, height }: ImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={{ width, height }}
    />
  )
}

export default Image