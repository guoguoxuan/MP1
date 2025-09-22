"use client"

import React, { useState } from 'react'
import { ChevronLeft, ChevronRight, Circle, CircleDashed } from 'lucide-react'
import { Button } from './button'
import { cn } from '@/lib/utils'

interface ImageItem {
  src: string
  alt: string
  width: number
  height: number
}

interface ImageCarouselProps {
  images: ImageItem[]
  className?: string
  showIndicators?: boolean
  showButtons?: boolean
}

export default function ImageCarousel({
  images,
  className = '',
  showIndicators = true,
  showButtons = true,
}: ImageCarouselProps) {
  // 调试信息
  console.log('ImageCarousel received images:', images);
  const [currentIndex, setCurrentIndex] = useState(0)

  // 处理上一张图片
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  // 处理下一张图片
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  // 直接跳转到指定图片
  const handleGoTo = (index: number) => {
    setCurrentIndex(index)
  }

  // 如果没有图片，显示占位符
  if (!images || images.length === 0) {
    return (
      <div className="flex items-center justify-center h-64 w-full rounded-xl bg-muted">
        <p className="text-sm text-muted-foreground">没有图片可显示</p>
      </div>
    )
  }

  // 如果只有一张图片，直接显示该图片
  if (images.length === 1) {
    const image = images[0]
    return (
      <div className={cn('rounded-xl overflow-hidden', className)}>
        {/* 使用标准img标签代替Next.js Image组件 */}
        <img
          src={image.src.startsWith('/') ? image.src : `/${image.src}`}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className="object-contain w-full"
        />
      </div>
    )
  }

  return (
    <div className={cn('relative w-full max-w-md mx-auto overflow-hidden rounded-xl', className)}>
      {/* 主图片容器 */}
      <div className="relative aspect-square w-full bg-muted">
        {/* 当前显示的图片 */}
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            {/* 使用标准img标签代替Next.js Image组件 */}
            <img
              src={image.src.startsWith('/') ? image.src : `/${image.src}`}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="object-contain w-full h-full"
            />
            {/* 只有当前图片显示alt文本 */}
            {index === currentIndex && image.alt && (
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                <p className="text-white text-sm">{image.alt}</p>
              </div>
            )}
          </div>
        ))}

        {/* 导航按钮 */}
        {showButtons && (
          <>
            <Button
              onClick={handlePrev}
              variant="outline"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 rounded-full bg-background/70 backdrop-blur-sm text-muted-foreground hover:bg-background"
              aria-label="Previous image"
            >
              <ChevronLeft size={20} />
            </Button>
            <Button
              onClick={handleNext}
              variant="outline"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 rounded-full bg-background/70 backdrop-blur-sm text-muted-foreground hover:bg-background"
              aria-label="Next image"
            >
              <ChevronRight size={20} />
            </Button>
          </>
        )}
      </div>

      {/* 主图片容器结束 */}
      
      {/* 指示器和页数信息 - 移到图片下方 */}
      {showIndicators && (
        <div className="mt-4 flex flex-col items-center justify-center gap-2">
          {/* 页数信息 */}
          <p className="text-sm text-muted-foreground">
            {currentIndex + 1} / {images.length}
          </p>
          
          {/* 指示器小点 */}
          <div className="flex items-center space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => handleGoTo(index)}
                className={`${
                  index === currentIndex ? 'text-primary' : 'text-muted-foreground/60'
                } transition-colors hover:text-primary/80`}
                aria-label={`Go to image ${index + 1}`}
              >
                {index === currentIndex ? (
                  <Circle size={10} className="fill-current" />
                ) : (
                  <CircleDashed size={10} />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}