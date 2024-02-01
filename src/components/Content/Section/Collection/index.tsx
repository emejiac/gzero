/** @jsxImportSource theme-ui */
import React from 'react'
import { Box, Flex, Grid, Heading, Text } from 'theme-ui'
import ReactMarkdown from 'react-markdown'
import { ICollectionSection } from 'graphql-cms/types'

interface Props {
  title: React.ReactNode
  description?: string
  collections: ICollectionSection[]
}

const CollectionSection: React.FC<Props> = ({
  title,
  description,
  collections,
}) => {
  return (
    <Flex sx={{ flexDirection: 'column' }}>
      <Box
        sx={{
          width: ['100%', '80%', '70%'],
          marginBottom: '60px',
        }}
      >
        <Heading
          as="h1"
          variant="h1"
          sx={{
            textAlign: 'center',
            color: 'primary',
            variant: ['text.h2', 'text.h2', 'text.h1'],
            marginTop: ['16px', null, '36px'],
            marginBottom: ['8px', null, '32px'],
          }}
        >
          {title}
        </Heading>
        {description && (
          <Text
            sx={{
              variant: 'text.link',
              color: 'primary',
              textAlign: 'center',
            }}
          >
            <ReactMarkdown>{description}</ReactMarkdown>
          </Text>
        )}
      </Box>

      <Grid
        columns={[1, 2]}
        gap={['12px', '25px']}
        p={['0 1.5rem 2rem 1.5rem', '0 1 0 1']}
      >
        {/* {collections.map((collection) => (
          <CollectionCard key={collection.sys.id} collection={collection} />
        ))} */}
      </Grid>
    </Flex>
  )
}

export default CollectionSection
