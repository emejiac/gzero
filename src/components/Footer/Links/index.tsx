/** @jsxImportSource theme-ui */
import React from 'react'
import Link from '~/components/Generic/Link'
import { Flex, Text } from 'theme-ui'
import styles from './styles.module.css'

interface Props {
  title?: string
  links?: {
    name: string
    slug: string
  }[]
}

const FooterConfig: React.FC<Props> = ({ title, links }) => {
  return (
    <Flex
      sx={{
        flexDirection: ['column', 'row'],
        textAlign: ['center', 'left'],
        width: ['100%', null, '16%'],
      }}
    >
      <Flex
        sx={{
          marginTop: '27px',
          lineHeight: ['35px', 'inherit'],
          padding: ['1.5rem 0', null, '0'],
          width: '100%',
          flexDirection: 'column',
        }}
      >
        {title && (
          <Text
            variant="link"
            className={styles.footerColumnTitle}
            sx={{ marginBottom: '1rem' }}
          >
            {title}
          </Text>
        )}
        <Text sx={{ marginBottom: '0.25rem', listStyle: 'none' }}>
          {links &&
            links.map((_link, index) => (
              <li key={index}>
                <Link
                  href={`${_link.slug}`}
                  className={styles.footerColumnLink}
                  sx={{
                    ':hover': { textDecoration: 'none', listStyle: 'none' },
                  }}
                >
                  {_link.name}
                </Link>
              </li>
            ))}
        </Text>
      </Flex>
    </Flex>
  )
}

export default FooterConfig
