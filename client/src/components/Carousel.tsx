'use client'

import React, { useCallback, useEffect, useState, ReactNode, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import AutoHeight from 'embla-carousel-auto-height'
import { ChevronLeftIcon } from '@/components/icons/ChevronLeft'
import { ChevronRightIcon } from '@/components/icons/ChevronRight'

interface EmblaSliderProps {
  classNameEmbla?: string
  classNameContainer?: string
  children: ReactNode
  autoplayDelay?: number
  buttons?: boolean
  dots?: boolean
}

export function EmblaSlider({ children, autoplayDelay = 4000, buttons = true, dots = true, classNameEmbla, classNameContainer }: EmblaSliderProps) {
  const autoPlay = useRef(Autoplay({ delay: autoplayDelay, stopOnInteraction: false }))
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoPlay.current, AutoHeight()])

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [totalSlides, setTotalSlides] = useState(0)

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
  }, [emblaApi])
  const scrollNext = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    setTotalSlides(emblaApi.scrollSnapList().length)

    emblaApi.on('select', onSelect)
    onSelect()

    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    console.log('AutoHeight plugin applied:', emblaApi.plugins())

    emblaApi.on('init', () => console.log('Embla initialized'))
    emblaApi.on('resize', () => console.log('Embla resized'))
  }, [emblaApi])

  return (
    <div className='relative flex flex-col items-center'>
      <div className={`overflow-hidden max-w-xl rounded-xl mx-2 ${classNameEmbla}`} ref={emblaRef}>
        <div className={`flex items-center ${classNameContainer}`}>{children}</div>

        {buttons && (
          <>
            <button className='absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full' onClick={scrollPrev}>
              <ChevronLeftIcon />
            </button>

            <button className='absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full' onClick={scrollNext}>
              <ChevronRightIcon />
            </button>
          </>
        )}
      </div>

      {dots && (
        <div className='flex space-x-2 mt-3'>
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${index === selectedIndex ? 'bg-black w-5' : 'bg-gray-300 hover:bg-black/50'}`}
              onClick={() => emblaApi?.scrollTo(index)}
            />
          ))}
        </div>
      )}
    </div>
  )
}
