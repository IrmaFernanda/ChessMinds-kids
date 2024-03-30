const importAllImages = async (folder) => {
  const allImages = import.meta.glob('@/assets/**/*.{png,jpg,jpeg,gif,bmp,svg}', { eager: true })
  console.log(allImages)
  const filteredImages = Object.entries(allImages).filter(([key]) => key.includes(`/${folder}/`))
  console.log(filteredImages)
  return filteredImages.map(([src]) => src)
}

export default importAllImages
