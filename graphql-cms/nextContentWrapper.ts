import type {
  GetStaticProps,
  GetStaticPropsContext,
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticPropsResult,
  GetServerSidePropsResult,
} from 'next'

type ContentWrapperProps<T> = T

const createNextContentWrapper = () => {
  /**
   * Higher order wrapper function for Next.js's `getStaticProps` that inserts
   * data needed for the application site wide.
   */
  function getStaticProps<T extends Record<string, unknown>>(
    callback: GetStaticProps<T>
  ): GetStaticProps<ContentWrapperProps<T>> {
    const wrapped = async (
      ctx: GetStaticPropsContext
    ): Promise<GetStaticPropsResult<ContentWrapperProps<T>>> => {
      const returnedValue = await callback(ctx)

      if (!('props' in returnedValue)) {
        return returnedValue
      }

      return {
        ...returnedValue,
        props: {
          ...returnedValue.props
        },
      }
    }

    return wrapped
  }

  /**
   * Higher order wrapper function for Next.js's `getServerSideProps` that
   * inserts data needed for the application site wide.
   */
  function getServerSideProps<T extends Record<string, unknown>>(
    callback: GetServerSideProps<T>
  ): GetServerSideProps<ContentWrapperProps<T>> {
    const wrapped = async (
      ctx: GetServerSidePropsContext
    ): Promise<GetServerSidePropsResult<ContentWrapperProps<T>>> => {
      const returnedValue = await callback(ctx)

      if (!('props' in returnedValue)) {
        return returnedValue
      }

      const props = await returnedValue.props

      return {
        ...returnedValue,
        props: {
          ...props
        },
      }
    }

    return wrapped
  }

  return { getStaticProps, getServerSideProps }
}

/**
 * nextContentWrapper provides higher order wrapper functions for Next.js's data
 * fetching methods. These methods are helpful when you have a component that is
 * on all pages and needs the same props across the site.
 *
 * By default, these methods are used to insert Notifications from Contentful
 * into all pages across the site. Feel free to update these methods to include
 * similar data across your application.
 */
const nextContentWrapper = createNextContentWrapper()

export default nextContentWrapper
