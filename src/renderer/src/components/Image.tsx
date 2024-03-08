type ImageComponentProps = {
  src: string
  alt: string
  height: number
  width: number
}

export const Image = ({ src, alt, height, width }: ImageComponentProps) => {
  return <img src={src ?? null} alt={alt} height={height} width={width} />
}

export default Image
