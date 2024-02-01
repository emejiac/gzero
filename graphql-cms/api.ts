export async function fetchGraphQL<T extends Record<string, any>>(
  query: string,
  variables: Record<string, unknown> = {}
): Promise<{ data: T }> {
  const space = process.env.CONTENTFUL_SPACE_ID
  const environment = process.env.CONTENTFUL_ENVIRONMENT
  const token = process.env.CONTENTFUL_ACCESS_TOKEN

  const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${space}/environments/${environment}`

  const fetchOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ query, variables }),
  }

  const resp = await fetch(fetchUrl, fetchOptions)
  const data = await resp.json()

  if (data.errors && data.errors.length > 0) {
    // This allows the query to be output in a way that is easy to copy, paste,
    // and debug in the GraphQL Playground.
    process.stdout.write(`query: ${query}\r\n`)
    process.stdout.write(`variables: ${JSON.stringify(variables)}\r\n`)

    data.errors.map((error: string) => {
      console.error(error)
    })

    throw new Error(
      'Could not fetch data from Contentful! See the above logs for the error.'
    )
  }

  return data
}
