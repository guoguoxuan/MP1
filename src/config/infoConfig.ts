export * from './projects'
export * from './education'
export * from './career'

// personal info
export const name = 'Shangjin'
export const headline = 'Ph.D. in Neuroscience.'
export const introduction =
  "¡Hola amigos! My name is Shangjin Li. I am from Henan province, China, and I am an alumnus of CAU, NTU, and THU. "
export const email = 'shangjinli0610@foxmail.com'
export const githubUsername = 'guoguoxuan'

// about page
export const aboutMeHeadline = 'About Me'
export const aboutParagraphs = [
  "I grew up in Henan, a province in the heart of China where history whispers from every corner. My academic journey began at China Agricultural University, where I earned my bachelor's degree in Biological Sciences. I then went on to specialize in Neuroscience, completing my Ph.D. at Tsinghua University.",
  "Welcome to my corner of the internet! I started this blog as a way to share the lessons and ideas that shape my life every day. While many posts dive into my professional passions—like neuroscience, life sciences, and health—you'll also find a lot about the world of academia and general biology.",
  "But my research isn't confined to the lab. Outside of my scientific pursuits, I love to explore the world through my other passions. I find joy in capturing moments through my photography, exploring new landscapes while hiking and traveling, and relaxing with a good movie or a game of badminton. This blog is a place where my intellectual and personal worlds intersect, offering a complete picture of my journey and interests.",
]

// blog
export const blogHeadLine = "What's On My Mind."
export const blogIntro =
  " My blogs cover the life sciences and academic life."

// social links
export type SocialLinkType = {
  name: string
  ariaLabel?: string
  icon: string
  href: string
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'Tiktok',
    icon: 'tiktok',
    href: 'https://www.tiktok.com/@tsinghua_university',
  },
  {
    name: 'Bilibili',
    icon: 'bilibili',
    href: 'https://space.bilibili.com/349721082',
  },
]

// https://simpleicons.org/
export const techIcons = [
  'typescript',
  'javascript',
  'supabase',
  'cloudflare',
  'java',
  'oracle',
  'mysql',
  'react',
  'nodedotjs',
  'nextdotjs',
  'prisma',
  'postgresql',
  'nginx',
  'vercel',
  'docker',
  'git',
  'github',
  'visualstudiocode',
  'androidstudio',
  'ios',
  'apple',
  'wechat',
]
