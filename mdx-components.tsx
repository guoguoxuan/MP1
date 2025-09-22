import { type MDXComponents } from 'mdx/types'
import Image, { type ImageProps } from 'next/image'
import ImageCarousel from './src/components/ui/ImageCarousel'

export function useMDXComponents(components: MDXComponents) {
  return {
    ...components,
    Image: (props: ImageProps) => <Image {...props} />,
    ImageCarousel,
  }
}
