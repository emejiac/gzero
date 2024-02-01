/* eslint-disable @typescript-eslint/no-explicit-any */
/** @jsxImportSource theme-ui */
import {
  documentToReactComponents,
  NodeRenderer,
} from '@contentful/rich-text-react-renderer'
import { Block, BLOCKS, Inline } from '@contentful/rich-text-types'
import { Document } from '@contentful/rich-text-types'
import { v4 as uuidv4 } from 'uuid'

interface Props {
  json: Document
}

const HeadingRenderer: NodeRenderer = (node, type) => {
  switch (type) {
    case 'h1':
      return node.content[0].nodeType === 'text' ? (
        <h1 key={uuidv4()}>{node.content[0]?.value}</h1>
      ) : (
        <></>
      )
    case 'h2':
      return node.content[0].nodeType === 'text' ? (
        <h2 key={uuidv4()}>{node.content[0]?.value}</h2>
      ) : (
        <></>
      )
    case 'h3':
      return node.content[0].nodeType === 'text' ? (
        <h3 key={uuidv4()}>{node.content[0]?.value}</h3>
      ) : (
        <></>
      )
    case 'h4':
      return node.content[0].nodeType === 'text' ? (
        <h4 key={uuidv4()}>{node.content[0]?.value}</h4>
      ) : (
        <></>
      )
    case 'h5':
      return node.content[0].nodeType === 'text' ? (
        <h5 key={uuidv4()}>{node.content[0]?.value}</h5>
      ) : (
        <></>
      )
    case 'h6':
      return node.content[0].nodeType === 'text' ? (
        <h6 key={uuidv4()}>{node.content[0]?.value}</h6>
      ) : (
        <></>
      )
  }
}

const TextRenderer: NodeRenderer = (node, children) => {
  return (
    <p key={uuidv4()} sx={{ marginTop: 0 }}>
      {children}
    </p>
  )
}

const renderOptions = {
  // Newlines do not produce linebreaks by default
  // https://github.com/contentful/rich-text/issues/96#issuecomment-511100434
  // https://www.npmjs.com/package/@contentful/rich-text-react-renderer
  renderText: (text: string) =>
    text.split('\n').reduce((children, textSegment, index) => {
      return [
        ...children,
        index > 0 ? <br key={index} /> : <></>,
        <>{textSegment}</>,
      ]
    }, [] as JSX.Element[]),
  renderNode: {
    [BLOCKS.PARAGRAPH]: TextRenderer,
    [BLOCKS.HEADING_1]: (node: Block | Inline) => HeadingRenderer(node, 'h1'),
    [BLOCKS.HEADING_2]: (node: Block | Inline) => HeadingRenderer(node, 'h2'),
    [BLOCKS.HEADING_3]: (node: Block | Inline) => HeadingRenderer(node, 'h3'),
    [BLOCKS.HEADING_4]: (node: Block | Inline) => HeadingRenderer(node, 'h4'),
    [BLOCKS.HEADING_5]: (node: Block | Inline) => HeadingRenderer(node, 'h5'),
    [BLOCKS.HEADING_6]: (node: Block | Inline) => HeadingRenderer(node, 'h6'),
  },
}

const ContentfulRichText: React.FC<Props> = ({ json }) => {
  return (
    json.content &&
    Array.isArray(json.content) && (
      <>{documentToReactComponents(json, renderOptions)}</>
    )
  )
}

export default ContentfulRichText
