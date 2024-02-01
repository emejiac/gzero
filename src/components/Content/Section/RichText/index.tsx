import { IRichText } from 'graphql-cms/fragments/page'
import {
  Flex,
  Heading,
  Text,
  ThemeUICSSObject,
  ThemeUICSSProperties,
} from 'theme-ui'

// <title alignment>-<description alignment>
export type TextPositions =
  | 'left-left'
  | 'left-center'
  | 'left-right'
  | 'center-left'
  | 'center-center'
  | 'center-right'
  | 'right-left'
  | 'right-center'
  | 'right-right'

const getMarginX = (position: string) => {
  // default alignment `left`
  let styles: ThemeUICSSObject = {
    marginLeft: 0,
    marginRight: 0,
  }

  if (position === 'center') {
    styles = {
      marginLeft: 'auto',
      marginRight: 'auto',
    }
  }

  if (position === 'right') {
    styles = {
      marginLeft: 'auto',
      marginRight: 0,
    }
  }

  return styles as ThemeUICSSObject
}

const RichText: React.FC<IRichText> = ({
  title,
  description,
  textPosition,
  titleMaxWidth,
}) => {
  const [titleAlign, descriptionAlign] = textPosition.split('-')

  const titleSx = {
    maxWidth: titleMaxWidth,
    marginBottom: ['20px', null, '35px'],
    textAlign: ['center', null, titleAlign === 'right' ? 'left' : titleAlign],
    ...getMarginX(titleAlign),
    fontFamily: 'Mint Grotesk Display',
    fontSize: ['25px', null, '40px'],
    lineHeight: ['30px', null, 'normal'],
  } as ThemeUICSSProperties

  const descriptionSx = {
    maxWidth: 410,
    textAlign: [
      'center',
      null,
      descriptionAlign === 'right' ? 'left' : titleAlign,
    ],
    marginTop: ['20px', null, '35px'],
    ...getMarginX(descriptionAlign),
    fontFamily: 'Mint Grotesk Display Light',
    fontSize: ['15px', null, '19px'],
    lineHeight: ['22px', null, '32px'],
  } as ThemeUICSSProperties

  return (
    <Flex
      sx={{
        flexDirection: 'column',
        padding: ['50px 16px 20px', null, '60px 0px 30px'],
      }}
    >
      <Heading as="h1" sx={titleSx}>
        {title}
      </Heading>

      {description && (
        <Text as="div" sx={descriptionSx}>
          {description}
        </Text>
      )}
    </Flex>
  )
}

export default RichText
