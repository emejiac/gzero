import { Document } from '@contentful/rich-text-types'
import { IMediaWithTextGrid } from 'graphql-cms/fragments/page'
import { IImage } from 'graphql-cms/types'
import { Box, Flex, Grid, Heading, Text, ThemeUICSSProperties } from 'theme-ui'
import ContentfulRichText from '~/components/Generic/ContentfulRichText'
import ResponsiveImage from '~/components/Generic/Image'

export interface GridMediaItem {
  sys: { id: string }
  index: number
  title: string
  description?: { json: Document }
  media: IImage
}

const MediaGridItem: React.FC<GridMediaItem> = ({
  index,
  title,
  description,
  media,
}) => {
  return (
    <Grid
      sx={{
        gridTemplateColumns: ['1fr', '1fr', '1fr 1fr 2fr'],
        gap: '30px',
        alignItems: 'flex-start',
        justifyItems: ['center', null, 'unset'],
        padding: ['30px 0px', '30px 0px', '40px 0px 100px'],
        borderTop: index === 0 ? '1px solid var(--black-one-off)' : 0,
        borderBottom: '1px solid var(--black-one-off)',
      }}
    >
      <Heading
        as="h2"
        sx={{
          maxWidth: '337px',
          fontFamily: 'Mint Grotesk Display',
          fontSize: ['20px', null, '30px'],
          lineHeight: 'normal',
        }}
      >
        {title}
      </Heading>

      {media.contentType.includes('video/') ? (
        <Box
          sx={{
            minHeight: ['98px', null, '147px'],
            width: '100%',
            position: 'relative',
          }}
        >
          <video
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              zIndex: 0,
            }}
            loop
            muted
            autoPlay
            playsInline
          >
            <source src={media.url} type="video/mp4"></source>
            Your browser does not support the video tag.
          </video>
        </Box>
      ) : (
        <ResponsiveImage
          image={media}
          containerProps={{
            sx: {
              minHeight: ['98px', null, '147px'],
              width: '100%',
              position: 'relative',
              img: {
                position: 'absolute',
                objectFit: 'contain',
                objectPosition: 'center',
              },
            },
          }}
        />
      )}

      {description && (
        <Text
          as="div"
          sx={{
            maxWidth: '90%',
            fontFamily: 'Mint Grotesk Display Light',
            fontSize: ['15px', null, '20px'],
            lineHeight: ['22px', null, '34px'],
          }}
        >
          <ContentfulRichText json={description.json} />
        </Text>
      )}
    </Grid>
  )
}

const MediaWithTextGrid: React.FC<IMediaWithTextGrid> = ({
  title,
  gridDescription,
  gridItemsCollection,
}) => {
  const titleSx = {
    gridColumn: ['1', '1/3'],
    maxWidth: 630,
    margin: ['0px auto 10px', null, '0px 0px 25px'],
    textAlign: ['center', null, 'left'],
    fontFamily: 'Graphik Wide',
    fontSize: ['30px', null, '85px'],
    lineHeight: ['35px', null, 'normal'],
    fontWeight: 'normal',
  } as ThemeUICSSProperties

  const gridDescriptionSx = {
    gridColumn: ['1', '2'],
    maxWidth: 480,
    textAlign: ['center', null, 'left'],
    margin: ['10px auto 0px', null, '35px 0px 0px 0'],
    fontFamily: 'Mint Grotesk Display Light',
    fontSize: ['15px', null, '17px'],
    lineHeight: ['22px', null, '28px'],
  } as ThemeUICSSProperties

  return (
    <Flex
      sx={{
        flexDirection: 'column',
        padding: '40px 0px 0px',
      }}
    >
      <Grid sx={{ gridTemplateColumns: ['1fr', '1fr 1fr'], gap: 0 }}>
        <Heading as="h1" sx={titleSx}>
          {title}
        </Heading>

        {gridDescription && (
          <Text as="div" sx={gridDescriptionSx}>
            <ContentfulRichText json={gridDescription.json} />
          </Text>
        )}
      </Grid>

      <Grid columns={1} paddingTop={['40px', '40px', '100px']}>
        {(gridItemsCollection.items || []).map((item, index) => (
          <MediaGridItem key={item.sys.id} {...item} index={index} />
        ))}
      </Grid>
    </Flex>
  )
}

export default MediaWithTextGrid
