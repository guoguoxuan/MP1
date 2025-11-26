import { Card } from '@/components/shared/Card'
import Link from 'next/link'
import { formatDate } from '@/lib/formatDate'
import { type BlogType } from '@/lib/blogs'
import Image from 'next/image'

export function BlogCard({ blog, titleAs }: { blog: BlogType, titleAs?: keyof JSX.IntrinsicElements }) {
  const as = titleAs ?? 'h2'
  return (
    <Link href={`/blogs/${blog.slug}`} className="block hover:no-underline">
      <Card as="article" className="cursor-pointer overflow-hidden">
        <div className="p-1">
          {/* 响应式布局：移动端上下布局，桌面端左右布局 */}
          <div className="flex flex-col md:flex-row gap-1 items-start">
            {/* 内容区域 - 左侧，控制最大宽度确保文本不会过宽 */}
            <div className="flex-1 max-w-lg">
              <div className="space-y-1">
                <Card.Eyebrow as="time" dateTime={blog.date} decorate>
                  {formatDate(blog.date)}
                </Card.Eyebrow>
                <Card.Title as={as} style={{ wordWrap: 'break-word', hyphens: 'auto', lineHeight: 1.3 }}>
                  {blog.title}
                </Card.Title>
                <Card.Description style={{ wordWrap: 'break-word', hyphens: 'auto', lineHeight: 1.4 }}>
                  {blog.description}
                </Card.Description>
                <Card.Cta className="mt-2">Read blog</Card.Cta>
              </div>
            </div>
            
            {/* 图片区域 - 右侧，响应式调整宽度 */}
            <div className="w-full md:w-1/3 lg:w-1/4 flex-shrink-0">
              {blog.image ? (
                <div className="aspect-video bg-muted rounded-md overflow-hidden">
                  <Image 
                    src={blog.image} 
                    alt={blog.title}
                    width={400}
                    height={225}
                    className="w-full h-full object-cover"
                    priority={false}
                  />
                </div>
              ) : (
                <div className="aspect-video bg-muted-foreground/10 rounded-md flex items-center justify-center">
                  <span className="text-muted-foreground/50 text-sm">Image</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </Card>
    </Link>
  )
}
