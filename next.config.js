// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//   // images: {
//   //   protocols: ["htt"],
//   //   domains: ["https://vignette.wikia.nocookie.net"],
//   // },
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'vignette.wikia.nocookie.net',
//       },
//     ],
//   },
// }

// module.exports = nextConfig
// // module.exports = {
// //   images: {
// //       domains: ['https://vignette.wikia.nocookie.net/'],
// //   },
// // }


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  experimental: {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'vignette.wikia.nocookie.net',
        },
      ],
    },
  },
}

module.exports = nextConfig