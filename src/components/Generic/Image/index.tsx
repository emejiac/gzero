/** @jsxImportSource theme-ui */
import React from 'react'
import NextImage, { ImageLoader } from 'next/image'
import { Box, BoxProps } from 'theme-ui'
import type { IImage } from 'graphql-cms/types'
import styles from './styles.module.css'

export interface ResponseImageProps {
  image: IImage | Pick<IImage, 'url' | 'title' | 'height' | 'width'>
  quality?: number
  containerProps?: BoxProps
  width?: number
}

const contentfulImageLoader: ImageLoader = ({ src, width, quality }) => {
  const url = new URL(src)
  url.searchParams.set('fm', 'webp')
  url.searchParams.set('w', width.toString())

  if (quality) {
    url.searchParams.set('q', quality.toString())
  }

  return url.toString()
}

const ResponsiveImage: React.FC<ResponseImageProps> = ({
  image,
  width: widthOverride,
  quality = 75,
  containerProps = {},
}) => {
  const { url, title, width: originalWidth, height: originalHeight } = image
  const placeholder = 'placeholder' in image ? image.placeholder : undefined
  const loader = image.url.includes('images.ctfassets.net')
    ? contentfulImageLoader
    : undefined
  let width = originalWidth
  let height = originalHeight

  if (widthOverride && loader) {
    const aspectRatio = originalWidth / originalHeight
    width = widthOverride
    height = width / aspectRatio
  }

  return (
    <Box {...containerProps}>
      <NextImage
        alt={title}
        src={url}
        blurDataURL={placeholder}
        placeholder={placeholder ? 'blur' : 'empty'}
        width={width}
        height={height}
        quality={quality}
        loader={loader}
        className={styles.cust_img}
      />
    </Box>
  )
}

export default ResponsiveImage
