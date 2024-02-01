/** @jsxImportSource theme-ui */
import React from 'react'
import { Box } from 'theme-ui'
import styles from './styles.module.css'

const FooterNewsletterSignup: React.FC = () => {
  return (
    <Box
      sx={{
        paddingBottom: ['2rem', '2.75rem', '0'],
        borderBottom: ['none', '1px solid', 'none'],
        textAlign: ['center', null, 'left'],
        width: ['100%', null, '48%'],
      }}
    >
      <Box sx={{ width: ['100%', null, '100%'] }}>
        <div className={styles.klaviyo_form_cs}>
          <div className={`klaviyo-form-W3peWJ`}></div>
        </div>
      </Box>
    </Box>
  )
}

export default FooterNewsletterSignup
