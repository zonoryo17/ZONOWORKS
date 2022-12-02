import Image from 'next/image'

const Images = (props) => (
  <Image
    src={props.img} // Route of the image file
    height={props.height} // Desired size with correct aspect ratio
    width={props.width} // Desired size with correct aspect ratio
    alt="Top Logo"
  />
)

export default Images
