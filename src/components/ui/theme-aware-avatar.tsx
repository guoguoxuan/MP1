"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

// 主题感知的头像组件，根据当前主题显示不同图片
export type ThemeAwareAvatarProps = {
  lightSrc: string;
  darkSrc: string;
  alt?: string;
  size?: number;
};

export default function ThemeAwareAvatar({ 
  lightSrc, 
  darkSrc, 
  alt = "Profile avatar", 
  size = 300 
}: ThemeAwareAvatarProps) {
  const [scale, setScale] = useState(1);
  const { theme } = useTheme();

  useEffect(() => {
    // 创建呼吸效果动画
    const interval = setInterval(() => {
      setScale((prevScale) => 
        prevScale === 1 ? 1.05 : 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // 根据当前主题选择图片源
  const currentSrc = theme === "dark" ? darkSrc : lightSrc;

  return (
    <div 
      className="relative flex items-center justify-center"
      style={{ 
        width: `${size}px`, 
        height: `${size}px` 
      }}
    >
      {/* 动画背景光晕 - 移除了圆框 */}
      <div 
        className={`absolute inset-0 blur-lg transition-all duration-300`}
        style={{ 
          background: theme === "dark" 
            ? "linear-gradient(to-r, #6366f1, #8b5cf6)" 
            : "linear-gradient(to-r, #3b82f6, #60a5fa)",
          transform: `scale(${scale})`,
          transition: "transform 2s ease-in-out"
        }}
      />
      <div className="relative">
        {/* 将图片尺寸增大20% */}
        <Image
          src={currentSrc}
          alt={alt}
          width={size * 1.2}
          height={size * 1.2}
          className="object-cover"
          unoptimized
        />
      </div>
    </div>
  );
}