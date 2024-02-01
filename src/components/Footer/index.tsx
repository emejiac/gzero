/** @jsxImportSource theme-ui */
import React, { useEffect, useState } from 'react'
import { Box, Container, Flex } from 'theme-ui'
import FooterConfig from '~/components/Footer/Links'
import FooterNewsletterSignup from '~/components/Footer/NewsletterSignup'
import { getMenu } from 'graphql-cms/queries/menu'
import { IMenuLink } from 'graphql-cms/types'
import styles from './styles.module.css'
import MainFooterConfig from './MainFooter'
import theme from '~/theme'

type Props = {
  isProductPage?: boolean
}

export const Footer: React.FC<Props> = ({ isProductPage = false}) => {
  const [footerFormated, setFooterFormated] = useState<React.JSX.Element[]>([])
  const [mainFooterFormated, setMainFooterFormated] = useState<IMenuLink[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    async function getAllMenu() {
      setIsLoaded(true)
      const menuConfig = await getMenu()
      const { footerConfigCollection, mainFooterCollection } = menuConfig
      const _footerFormated = footerConfigCollection?.items?.map(
        (column, index) => {
          if (column.type[0] === 'Menu') {
            return (
              <FooterConfig
                key={index}
                title={column.title}
                links={column?.linksCollection?.items || []}
              />
            )
          } else if (column.type[0] === 'Custom') {
            return <FooterNewsletterSignup key={index} />
          }
        }
      )

      setFooterFormated(_footerFormated)
      setMainFooterFormated(mainFooterCollection?.items || [])
    }
    if (!isLoaded) getAllMenu()
  })

  const csMarginBottom = isProductPage ? '20%' : '0px'

  return (
    <Box as="footer" className={styles.footer} sx={{ marginBottom: csMarginBottom }}>
      <Container
        sx={{
          maxWidth: 'unset',
          padding: ['0px 10px', '0px 10px', '0px 64px'],
        }}
      >
        <Flex
          sx={{
            flexDirection: 'column',
            paddingTop: '40px',
            marginTop: '40px',
            paddingBottom: '40px',
            marginBottom: '40px',
            borderTop: [`1px solid ${theme.colors.grayMedium}`, 'none'],
            borderBottom: `1px solid ${theme.colors.grayMedium}`,
            alignContent: ['flex-start', 'center'],
          }}
        >
          {/* <span className={styles.textUs}>TEXT US ######</span> */}
        </Flex>

        <Flex
          sx={{
            flexDirection: ['column', 'row'],
            paddingBottom: [null, '130px'],
            justifyContent: 'flex-start',
            maxWidth: ['100%', '100%'],
          }}
        >
          {footerFormated}
        </Flex>
      </Container>

      <Container
        sx={{
          maxWidth: 'unset',
          padding: ['0px 10px', '0px 10px', '0px 64px'],
        }}
      >
        <MainFooterConfig mainFooterFormated={mainFooterFormated} />
      </Container>
    </Box>
  )
}

export default Footer
