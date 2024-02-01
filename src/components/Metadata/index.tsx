import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import config from '~/../site-config.js'

interface Props {
  title?: string
}

const Metadata: React.FC<Props> = ({
  title: metaTitle = config.siteMetadata.title,
}) => {
  const { pathname } = useRouter()
  const metaUrl = new URL(pathname, config.siteMetadata.siteUrl).toString()
  const metaImage = config.siteMetadata.image

  return (
    <Head>
      <title>{metaTitle}</title>
      <meta
        name="viewport"
        content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, maximum-scale=5.0"
      />
      <meta name="description" content={'GradoZero'} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={'GradoZero'} />
      <meta property="og:site_name" content={metaTitle} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:url" content={metaUrl} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default Metadata
