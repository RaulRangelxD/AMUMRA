'use client'

import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { DefaultButton } from '@/components/buttons/DefaultButton'
import { ChevronLeftIcon } from '@/components/icons/ChevronLeft'
import { ChevronRightIcon } from '@/components/icons/ChevronRight'
import Image from 'next/image'

interface EmblaCarouselProps {
  images: { src: string; alt: string }[]
  w?: number
  h?: number
  size?: number
  buttons?: boolean
  dots?: boolean
}

export function EmblaCarousel({ images, w = 0, h = 0, size = 100, buttons = true, dots = true }: EmblaCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const flexImage = `flex-[0_0_${size}%]`

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    emblaApi.on('select', onSelect)
    onSelect()

    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi])

  return (
    <div className='relative flex flex-col items-center'>
      <div className='relative overflow-hidden max-w-xl rounded-xl mx-2' ref={emblaRef}>
        <div className='flex'>
          {images.map((image, index) => (
            <div key={index} className={flexImage}>
              <Image className='w-full h-auto' src={image.src} alt={image.alt} width={w} height={h} sizes='100vw' priority />
            </div>
          ))}
        </div>
        {buttons && (
          <>
            <DefaultButton color='btn-transparent' className='absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/15 hover:bg-black/50 rounded-full' onClick={scrollPrev}>
              <ChevronLeftIcon />
            </DefaultButton>

            <DefaultButton color='btn-transparent' className='absolute top-1/2 right-2 transform -translate-y-1/2 p-2 bg-black/15 hover:bg-black/50 rounded-full' onClick={scrollNext}>
              <ChevronRightIcon />
            </DefaultButton>
          </>
        )}
      </div>
      {dots && (
        <div className='flex space-x-2 mt-3'>
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-4 h-4 rounded-full transition-all duration-300 hover:bg-black/80 ${index === selectedIndex ? 'bg-black w-5' : 'bg-gray-300 hover:bg-black/50'}`}
              onClick={() => emblaApi?.scrollTo(index)}
            />
          ))}
        </div>
      )}
    </div>
  )
}
