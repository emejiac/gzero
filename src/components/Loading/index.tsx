/** @jsxImportSource theme-ui */
import React from 'react'
import { Box, Container, Flex, Spinner } from 'theme-ui'

interface Props {
  backgroundColor?: string
}

const Loading: React.FC<Props> = ({ backgroundColor }) => (
  <Container>
    <Flex
      sx={{
        flexDirection: 'column',
        marginBottom: ['1.5rem', null, '4.5rem'],
        marginTop: ['0', null, '42px'],
      }}
    >
      <Box
        sx={{
          textAlign: 'center',
          width: '100%',
          backgroundColor: backgroundColor || 'white',
          padding: ['10rem 1.25rem', '12rem 1.25rem'],
          marginRight: [null, '1rem'],
          marginBottom: ['1rem', null],
        }}
      >
        <Spinner size={50} />
      </Box>
    </Flex>
  </Container>
)

export default Loading
