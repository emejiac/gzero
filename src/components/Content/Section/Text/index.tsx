/* eslint-disable @typescript-eslint/no-explicit-any */
/** @jsxImportSource theme-ui */
import React from 'react'
import { Flex, Heading } from 'theme-ui'
import RichText from '~/components/Generic/RichText'

interface Props {
  nombre?: React.ReactNode
  contenido?: {
    json: string
  } | null,
  children?: React.ReactNode
}

const TextSection: React.FC<Props> = ({ nombre, contenido, children }) => {
  return (
    <Flex
      sx={{
        flexDirection: 'column',
        width: ['100%', '90%'],
        margin: 'auto',
        marginTop: ['24px', '24px', '96px'],
        marginBottom: ['24px', '24px', '96px'],
        '& img': {
          maxWidth: '100%',
        },
        '[data-section="richtext-container"]':{
          'ol > li > p > b' :{
            fontFamily: 'Graphik Wide',
            fontSize: '20px',
            lineHeight: 'normal',
            textAlign: 'left',
            marginTop: '40px',
            display: 'block',
            marginBottom: '17px',
          },
          'ol > li > p > b ~ b' :{
            fontSize: '17px',
            fontFamily: 'Mint Grotesk Display',
            display: 'inline-block'
          },
          'ol ol b':{
            fontSize: '17px !important',
          },
          'p': {
            maxWidth: 'unset',
            margin: 0,
            marginBottom: '20px',
            fontFamily: 'Mint Grotesk Display Light',
            fontSize: ['15px', '17px'],
            lineHeight: 'normal',
            textAlign: 'left',
            "b":{
              fontFamily: 'Mint Grotesk Display',
            }
          },
        },
      }}
    >
      {nombre && (
        <Heading
          as="h2"
          sx={{
            fontFamily: 'Graphik Wide',
            textAlign: 'center',
            color: '#141414',
            variant: ['text.h3', 'text.h3', 'text.h2'],
            marginTop: ['16px', '16px', '0.67em'],
            marginBottom: ['16px', null, '0.67em'],
            fontSize: ['25px', '40px'],
            lineHeight: 'normal',
          }}
        >
          {nombre}
        </Heading>
      )}
      {contenido && (
          <RichText
            RichText={contenido}
          />
        )}
      {children}
    </Flex>
  )
}

export default TextSection
