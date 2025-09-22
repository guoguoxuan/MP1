"use client"

import { ArrowRightIcon, HashIcon } from 'lucide-react'
import Image from 'next/image'
import { ArrowUpRight } from '@phosphor-icons/react'
import { ProjectItemType } from '@/config/projects'
import { utm_source } from '@/config/siteConfig'
import Link from 'next/link'
import { useState } from 'react';

export function ProjectCard({ project, titleAs }: { project: ProjectItemType, titleAs?: keyof JSX.IntrinsicElements }) {
  // 正确处理链接，如果已有协议则不添加https://
  const baseUrl = project.link.href.startsWith('http') ? project.link.href : `https://${project.link.href}`;
  const utmLink = `${baseUrl}?utm_source=${utm_source}`
  let Component = titleAs ?? 'h2'
  
  // 使用状态管理来处理favicon加载失败的情况
  const [faviconError, setFaviconError] = useState(false);
  
  // 改进的favicon获取逻辑，增加稳定性
  const getFaviconUrl = (urlString: string): string => {
    try {
      const url = new URL(urlString.startsWith('http') ? urlString : `https://${urlString}`);
      // 使用Google的favicon服务，增加参数确保获取固定大小的图标
      return `https://www.google.com/s2/favicons?domain=${url.hostname}&sz=64&domain_url=${encodeURIComponent(url.origin)}`;
    } catch (error) {
      return '';
    }
  };
  
  // 处理favicon加载错误
  const handleFaviconError = () => {
    setFaviconError(true);
  };
  
  return (
    <li className='group relative flex flex-col items-start h-full'>
      <div className="relative flex flex-col justify-between h-full w-full p-4 rounded-2xl border border-muted-foreground/20 shadow-sm transition-all group-hover:scale-[1.03] group-hover:shadow-md group-hover:bg-muted/5">
        <div className=''>
          <div className='flex flex-col sm:flex-row justify-center sm:justify-start items-start sm:items-center gap-4'>
            <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full">
              {/* 使用简单的img标签和Google的favicon服务，避免Promise相关问题 */}
              {project.link.href && !faviconError ? (
                <img 
                  src={getFaviconUrl(project.link.href)} 
                  alt={`${project.name} favicon`}
                  className="h-16 w-16 rounded-full object-contain"
                  onError={handleFaviconError}
                />
              ) : (
                <div className="h-16 w-16 rounded-full bg-muted/30 flex items-center justify-center">
                  <ArrowRightIcon size={24} className="text-muted-foreground" />
                </div>
              )}
            </div>
            <Component className="text-base font-semibold">
              {project.name}
            </Component>
          </div>
          <p className="relative z-10 mt-2 text-sm text-muted-foreground ml-2">
            {project.description}
          </p>
        </div>

        <div className="relative z-10 mt-auto pt-4 ml-1">
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-x-2 items-center">
              {project.tags.map((tag, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center space-x-0.5 group"
                >
                  <HashIcon className="w-3 h-3 text-muted-foreground icon-scale" />
                  <span className="text-xs text-muted-foreground tracking-tighter">
                    {tag}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
        <Link
          href={utmLink}
          target='_blank'
          rel='noopener noreferrer'
          className='absolute inset-0 z-20'>
          <ArrowUpRight size={32} weight="duotone" className="absolute top-4 right-4 h-4 w-4 group-hover:text-primary group-hover:cursor-pointer" />
        </Link>
      </div>
    </li>
  )
}