/** @jsxImportSource theme-ui */
import React from 'react'
import { Box, Container, Flex } from 'theme-ui'
import ResponsiveImage from '~/components/Generic/Image'
import type { IRecurso } from 'graphql-cms/types'
import { isMobileDevice } from '~/utils'

const Banner: React.FC<IRecurso> = (recurso) => {
  const isMobile = isMobileDevice()
  const recursoActivo = isMobile && recurso?.recursoMobile ? recurso.recursoMobile : recurso.recursoDesktop
  const recursoTipo = recursoActivo.contentType

  return (
    <Container
      datatype='image-hero-desktop'
      variant="fullWidth"
      sx={{
        display: 'block',
      }}
    >
      <Flex
        sx={{
          flexDirection: 'column',
          height: '100%',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '100%',
            maxHeight: '100%',
          }}
        >
          {(!recursoTipo.includes('video/') && recursoActivo) && (<ResponsiveImage image={recursoActivo} quality={90} />)}
          {(recursoTipo.includes('video/') && recursoActivo) && (<>video</>)}
        </Box>
      </Flex>
    </Container>
  )
}

export default Banner
