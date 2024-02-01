/** @jsxImportSource theme-ui */
import React from 'react'
import { Box, Container, Heading } from 'theme-ui'
import ReactMarkdown from 'react-markdown'
import ContentFaqQuestion from '~/components/Content/Faq/Question'
import type { IFAQ, IPage } from 'graphql-cms/types'

interface Props {
  faq: IFAQ
  page: IPage
}

const ContentFaq: React.FC<Props> = ({ faq, page }) => {
  const { items: sections } = page.sectionsCollection
  const { items: questions } = faq.questionsCollection

  return (
    <Box
      color="primary"
      sx={{
        backgroundColor: 'background',
        padding: ['2.5rem 0', null, '6rem 0'],
      }}
    >
      <Container sx={{ textAlign: 'center' }}>
        {sections.map((section, index) => {
          return (
            <Box
              key={`${section.sys.id}-${index}`}
              sx={{ marginBottom: '4rem' }}
            >
              <Heading as="h1" variant="h1">
                {section.title}
              </Heading>
              <Box
                sx={{
                  margin: '0 auto',
                  maxWidth: '650px',
                  '& a': {
                    color: 'accent',
                    textDecoration: 'underline',
                    ':hover': { color: 'primary' },
                  },
                  variant: 'text.subhead',
                }}
              >
                <ReactMarkdown>{section.description}</ReactMarkdown>
              </Box>
            </Box>
          )
        })}
      </Container>
      <Container sx={{ maxWidth: '1200px' }}>
        {questions.map((question, index) => (
          <ContentFaqQuestion
            key={`${index}-${question.sys.id}`}
            faq={question}
          />
        ))}
      </Container>
    </Box>
  )
}

export default ContentFaq
