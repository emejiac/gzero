/* eslint-disable @typescript-eslint/no-var-requires */
const dotenv = require('dotenv')
const path = require('path')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

dotenv.config()

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  env: {
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
    CONTENTFUL_PERSONAL_ACCESS_TOKEN: process.env.CONTENTFUL_PERSONAL_ACCESS_TOKEN,
    CONTENTFUL_ENVIRONMENT: process.env.CONTENTFUL_ENVIRONMENT,
  },
  trailingSlash: true,
  productionBrowserSourceMaps: true,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  images: {
    domains: [
      'images.ctfassets.net'
    ],
    deviceSizes: [320, 640, 660, 768, 1024, 1600],
  },
  compiler: {
    styledComponents: true,
  },
  webpack: (config, { webpack }) => {
    config.resolve.alias['~'] = path.resolve(__dirname, 'src')

    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: 'preset-default',
                  params: {
                    overrides: {
                      cleanupIds: false,
                      removeViewBox: false,
                    },
                  },
                },
                'removeXMLNS',
              ],
            },
          },
        },
      ],
    })

    config.plugins.push(
      // Ignore tests and mocks
      new webpack.IgnorePlugin({ resourceRegExp: /\.test.[tj]sx?$/ }),
      new webpack.IgnorePlugin({ resourceRegExp: /\/__mocks__\// })
    )

    return config
  },
  reactStrictMode: true,
}

module.exports = withBundleAnalyzer(nextConfig)
