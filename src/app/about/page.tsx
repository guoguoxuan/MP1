import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { aboutMeHeadline, aboutParagraphs } from '@/config/infoConfig'
import { Container } from '@/components/layout/Container'

import portraitImage from '@/images/Ghiblistyle.png'
import SocialLinks from '@/components/about/SocialLinks'

export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Spencer Sharp. I live in New York City, where I design the future.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt="Portrait photo"
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="rotate-3 rounded-2xl object-contain"
            />
            <p className="mt-3 text-sm text-center text-zinc-600 dark:text-zinc-400 italic">Captured in Chicago, October 2024, and restyled with AI into a Studio Ghibli style.</p>
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
    </Container>
  )
}
