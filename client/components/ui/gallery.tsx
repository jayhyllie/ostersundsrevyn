import { cn } from '@/lib/utils'

type GalleryImage = {
  src: string
  alt: string
}

type GallerySection = {
  type?: string
  images: GalleryImage[]
}

const Gallery = ({ sections }: { sections: GallerySection[] }) => {
  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          {sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className={cn({ 'grid grid-cols-3 gap-6': section.type === 'grid' })}>
              {section.images.map((image, imageIndex) => (
                <img key={imageIndex} src={image.src} alt={image.alt} className='rounded-lg object-cover' />
              ))}
            </div>
          ))}
      </div>
    </section>
  )
}

export default Gallery
