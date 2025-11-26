'use client'
import { useState, useEffect } from 'react';
import { BlogCard } from './BlogCard';
import { type BlogType } from '@/lib/blogs';

interface BlogCarouselProps {
  blogs: BlogType[]
}

export default function BlogCarousel({ blogs }: BlogCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [maxSlideIndex, setMaxSlideIndex] = useState(0);

  // 更新最大索引（每个页面只显示一组博客）
  useEffect(() => {
    setMaxSlideIndex(Math.max(0, blogs.length - 1));
    // 重置当前幻灯片位置，确保不会超出范围
    setCurrentSlide(prev => Math.min(prev, Math.max(0, blogs.length - 1)));
  }, [blogs.length]);

  const nextSlide = () => {
    if (currentSlide < maxSlideIndex) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Only show the carousel if there are blogs
  if (!blogs || blogs.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-lg text-muted-foreground">没有找到博客文章</p>
      </div>
    );
  }

  // 移除这里的重复定义，已经在useEffect中设置了状态变量

  return (
    <div className="relative w-full overflow-hidden">
      {/* 轮播容器 */}
      <div className="relative">
        <div
          className="flex transition-transform duration-300 ease-out h-full"
          style={{
            // 每个页面只显示一组博客，每次滑动100%
            transform: `translateX(-${currentSlide * 100}%)`,
            width: `${blogs.length * 100}%`,
          }}
        >
          {blogs.map((blog) => (
            <div 
              key={blog.slug} 
              className="flex-shrink-0 w-full p-0"
            >
              <BlogCard blog={blog} titleAs="h3" />
            </div>
          ))}
        </div>
      </div>

      {/* 轮播下方控制区域 */}
      {blogs.length > 1 && (
        <div className="mt-1 mb-2 flex items-center justify-center z-20">
          {/* 左侧箭头按钮 */}
          <button
            onClick={prevSlide}
            className="bg-white/80 dark:bg-black/80 p-2 rounded-full shadow-md z-10 mr-4"
            disabled={currentSlide === 0}
            aria-label="Previous slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          
          {/* 指示器（点）- 每个博客对应一个指示器 */}
          <div className="flex justify-center space-x-2 pb-4">
            {blogs.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${currentSlide === index ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600'}`}
                aria-label={`Go to blog ${index + 1}`}
              />
            ))}
          </div>
          
          {/* 右侧箭头按钮 */}
          <button
            onClick={nextSlide}
            className="bg-white/80 dark:bg-black/80 p-2 rounded-full shadow-md z-10 ml-4"
            disabled={currentSlide >= maxSlideIndex}
            aria-label="Next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}