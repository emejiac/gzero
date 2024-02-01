import React from 'react'
import {
  GetStaticProps,
  NextPage,
  GetServerSideProps,
  InferGetStaticPropsType,
  InferGetServerSidePropsType,
} from 'next'

/**
 * InferNextPage is a utility type that is to be used to automatically type page
 * level components in Next.js by passing in the type of the data loading
 * function for the page.
 *
 * @example
 *
 * ```typescript
 * import { InferNextPage } from '~/types'
 *
 * const getStaticProps = async () => {
 *   return {
 *     props: {
 *       a: 1,
 *       b: 2,
 *       c: 3
 *     }
 *   }
 * }
 *
 * // All of the types for props are inferred from the loader function.
 * const Page: InferNextPage<typeof getStaticProps> = ({ a, b, c }) => {
 *   return <pre>{JSON.stringify({ a, b, c }, null, 2)}</pre>
 * }
 * ```
 */
export type InferNextPage<Loader extends GetStaticProps | GetServerSideProps> =
  NextPage<
    Loader extends GetStaticProps
      ? InferGetStaticPropsType<Loader>
      : InferGetServerSidePropsType<Loader>
  >

/**
 * PropsOnlyChildren is a utility type that is to be used to automatically type
 * React components that only accept children as props.
 */
export type PropsOnlyChildren = {
  children: React.ReactNode
}
