export * from './projects'
export * from './education'
export * from './career'

// personal info
export const name = 'Shangjin Li'
export const headline = 'Ph.D. in Neuroscience.'
export const introduction =
  "¡Hola amigos! My name is Shangjin Li. I am from Henan province, China, and I am an alumnus of CAU, NTU, and THU. "
export const email = 'shangjinli0610@foxmail.com'
export const githubUsername = 'guoguoxuan'

// about page
export const aboutMeHeadline = 'About Me'
export const aboutParagraphs = [
  "I graduated from China Agricultural University with a bachelor's degree in Biological Sciences. I then completed my Ph.D., specializing in Neuroscience, at Tsinghua University.",
  'I have a lot of hobbies, such as playing badminton, travelling, photography, watching movies and so on.',
  "I started this blog to share the insights I learn every day. Most blogs focus on neuroscience and general biological science, while others share the daily life.",
]

// blog
export const blogHeadLine = "What I've thinking about."
export const blogIntro =
  "I've written something about neuroscience and life."

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
