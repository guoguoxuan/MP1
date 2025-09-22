import { Metadata } from 'next'
import { Container } from '@/components/layout/Container'
import AboutContent from './AboutContent'

export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Spencer Sharp. I live in New York City, where I design the future.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <AboutContent />
    </Container>
  )
}
