import { useCallback } from 'react'
import { useIntl } from 'react-intl'

export const useTranslate = () => {
  const { formatMessage } = useIntl()
  return useCallback(
    (id: string, values?: Parameters<typeof formatMessage>[1]) =>
      formatMessage({ id }, values) as string,
    [formatMessage]
  )
}
