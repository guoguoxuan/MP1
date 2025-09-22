'use client'

import Image from 'next/image'
import clsx from 'clsx'
import { useState } from 'react'
import { aboutMeHeadline, aboutParagraphs } from '@/config/infoConfig'
import SocialLinks from '@/components/about/SocialLinks'

import portraitImage from '@/images/Ghiblistyle.png'
import chicagoOriginalImage from '@/images/chicagooriginal.jpg'

export default function AboutContent() {
  // 状态管理当前显示的图片
  const [showOriginalImage, setShowOriginalImage] = useState(false)
  
  // 点击图片切换显示
  const handleImageClick = () => {
    setShowOriginalImage(prev => !prev)
  }
  
  // 获取当前要显示的图片
  const currentImage = showOriginalImage ? chicagoOriginalImage : portraitImage
  const currentAlt = showOriginalImage ? 'Original Chicago photo' : 'Portrait photo'
  const currentCaption = showOriginalImage 
    ? 'Original photo' 
    : 'Captured in Chicago, October 2024, and restyled with AI into a Studio Ghibli style.'

  return (
    <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
      <div className="lg:pl-20">
        <div className="max-w-xs px-2.5 lg:max-w-none">
          <Image
            src={currentImage}
            alt={currentAlt}
            sizes="(min-width: 1024px) 32rem, 20rem"
            className="rotate-3 rounded-2xl object-contain cursor-pointer transition-transform hover:scale-[1.02]"
            onClick={handleImageClick}
          />
          <p className="mt-6 text-sm text-center text-zinc-600 dark:text-zinc-400 italic">{currentCaption}</p>
            <p className="mt-2 text-xs text-center text-zinc-500 dark:text-zinc-500">
              Click the image to switch {showOriginalImage ? '' : ''}
            </p>
        </div>
      </div>
      <div className="lg:order-first lg:row-span-2">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          {aboutMeHeadline}
        </h1>
        <div className="mt-6 space-y-7 text-xl text-zinc-700 dark:text-zinc-300">
          {aboutParagraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
      <div className="lg:pl-20">
        <SocialLinks />
      </div>
    </div>
  )
}