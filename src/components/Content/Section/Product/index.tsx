/** @jsxImportSource theme-ui */
import React from 'react'
import { Flex, Heading, Link, Text } from 'theme-ui'
import ReactMarkdown from 'react-markdown'
import type { IProduct } from 'graphql-cms/types'
import styles from './styles.module.css'

interface Props {
  title: React.ReactNode
  description?: string
  products: IProduct[]
  hideActButton?: boolean
}

const ProductSection: React.FC<Props> = ({
  title,
  description,
  hideActButton = false,
}) => {
  return (
    <Flex
      sx={{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: ['100px', '60px', '60px'],
        textAlign: 'center',
      }}
    >
      {title && (
        <Heading
          as="h1"
          variant="h1"
          sx={{
            textAlign: 'center',
            color: 'primary',
            variant: ['text.h2', 'text.h2', 'text.h1'],
            marginTop: ['4px', null, '4px'],
            marginBottom: ['8px', null, '32px'],
          }}
        >
          {title}
        </Heading>
      )}
      {description && (
        <Text
          sx={{
            variant: 'text.link',
            color: 'primary',
            textAlign: 'center',
            paddingBottom: '1rem',
          }}
        >
          <ReactMarkdown>{description}</ReactMarkdown>
        </Text>
      )}

      {!hideActButton && (
        <Link className={styles.seeAllCollectionLink} href="/collections">
          SEE ALL <span> COLLECTION</span>
        </Link>
      )}
    </Flex>
  )
}

export default ProductSection
