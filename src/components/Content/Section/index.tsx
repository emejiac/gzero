/** @jsxImportSource theme-ui */
import React from 'react'
import { Container, Flex, ThemeUICSSObject } from 'theme-ui'
import type { ISeccion } from 'graphql-cms/types'
import TextSection from './Text'

const ContenidoSeccion: React.FC<ISeccion> = (seccion) => {
  const { nombre, contenido } = seccion

  return <>sad</>
  // return (
    // <TextSection nombre={nombre} contenido={contenido} />
  // )
  // const { items: media } = section.mediaCollection
  const media = []

  // @TODO: This component assumes that all media items have the same type, even
  // though the Contentful type allows them to be mixed. From a content
  // standpoint, though, it might make sense to have it this way. Gotta figure
  // out the types a little bit.

  return (
    <Flex
      backgroundColor="background"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        '@media screen and (max-width: 52em)': {
          '[datatype="image-hero-mobile"]': {
            margin: '0 -5px',
            width: 'calc(100% + 10px)',
          },
          '[datatype="image-hero-mobile"] [datatype="text-container"]': {
            padding: '0 5px',
          },
        },
      }}
    >
      <Container
        sx={{
          padding: removeMobilePadding
            ? ['0px', null, '0px 64px']
            : media[0]?.__typename === 'MediaSlider' ||
              media[0]?.__typename === 'Hero'
            ? '0px !important'
            : ['0px 10px', null, '0px 64px'],
          ...sectionsContainerSx,
        }}
      >
        {media.length > 0 ? (
          <div>
            {/* <SectionMedia
              title={title}
              description={description}
              cta={cta}
              hideAct={hideAct}
              media={media}
            /> */}
          </div>
        ) : (
          <TextSection title={title} description={description} richDescription={richDescription} />
        )}
      </Container>
    </Flex>
  )
}

export default ContenidoSeccion