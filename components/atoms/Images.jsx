import Image from 'next/image';

const Images = () => (
  <Image
    src="/images/zonoworks2.jpg" // Route of the image file
    height={50} // Desired size with correct aspect ratio
    width={230} // Desired size with correct aspect ratio
    alt="Top Logo"
  />
);

export default Images;