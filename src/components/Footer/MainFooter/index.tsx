/** @jsxImportSource theme-ui */
import React from 'react'
import Link from '~/components/Generic/Link'
import { Flex } from 'theme-ui'
import styles from './styles.module.css'
import { IMenuLink } from 'graphql-cms/fragments/menu'

interface Props {
  mainFooterFormated: IMenuLink[]
  expectedWidths?: []
}

const MainFooterConfig: React.FC<Props> = ({
  mainFooterFormated,
  expectedWidths = ['41%', '16%', '43%'],
}) => {
  if (!mainFooterFormated) {
    return <></>
  }

  return (
    <Flex
      className={styles.flexContainer}
      sx={{
        flexDirection: ['column', 'row'],
        flexFlow: ['column', 'row'],
        textAlign: ['center', 'left'],
        marginTop: ['60px', null],
      }}
    >
      {mainFooterFormated &&
        mainFooterFormated.map((item, key) => (
          <div key={key}>
            {item.isALink && (
              <Link
                className={styles.flexContainer__link}
                sx={{
                  width: ['100%', expectedWidths[key] ?? '100%'],
                  textAlign: ['center', 'left'],
                  marginTop: ['5px', null],
                }}
                key={key}
                href={`${item.slug}`}
              >
                {item.name}
              </Link>
            )}

            {!item.isALink && (
              <span
                key={key}
                className={styles.flexContainer__text}
                sx={{
                  width: ['100%', expectedWidths[key] ?? '100%'],
                  textAlign: ['center', 'left'],
                }}
              >
                {item.name}
              </span>
            )}
          </div>
        ))}
    </Flex>
  )
}

export default MainFooterConfig
