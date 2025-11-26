import { type Metadata } from 'next'

import { Card } from '@/components/shared/Card'
import { SimpleLayout } from '@/components/layout/SimpleLayout'
import { type BlogType, getAllBlogs } from '@/lib/blogs'
import { formatDate } from '@/lib/formatDate'
import { blogHeadLine, blogIntro } from '@/config/infoConfig'

export const runtime = process.env.NEXT_RUNTIME === 'edge' ? 'edge' : 'nodejs'

function Blog({ blog }: { blog: BlogType }) {
  return (
    <article className="md:grid md:grid-cols-5 md:items-start gap-6 hover:bg-transparent">
      {/* 左侧内容区域 */}
      <div className="md:col-span-2">
        <Card className="hover:bg-transparent">
          <Card.Title href={`/blogs/${blog.slug}`}>
            {blog.title}
          </Card.Title>
          <Card.Eyebrow
            as="time"
            dateTime={blog.date}
            className="md:hidden"
            decorate
          >
            {formatDate(blog.date)}
          </Card.Eyebrow>
          <Card.Description>{blog.description}</Card.Description>
          <Card.Cta>Read blog</Card.Cta>
        </Card>
      </div>
      
      {/* 右侧图片预留区域 */}
      <div className="hidden md:block md:col-span-2 bg-muted rounded-md flex items-center justify-center overflow-hidden h-40 hover:bg-muted">
        {blog.image ? (
          <img 
            src={blog.image} 
            alt={blog.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        ) : (
          <div className="h-full w-full bg-muted-foreground/10 flex items-center justify-center">
            <span className="text-muted-foreground/50 text-sm">Image</span>
          </div>
        )}
      </div>
      
      {/* 日期信息 */}
      <Card.Eyebrow
        as="time"
        dateTime={blog.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(blog.date)}
      </Card.Eyebrow>
    </article>
  )
}

export const metadata: Metadata = {
  title: 'Blogs',
  description:
    blogIntro
}

export default async function BlogsIndex() {
  let blogs = await getAllBlogs()

  return (
    <SimpleLayout
      title={blogHeadLine}
      intro={blogIntro}
    >
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {blogs.map((blog: BlogType) => (
            <Blog key={blog.slug} blog={blog} />
          ))}
        </div>
      </div>
    </SimpleLayout>
  )
}
