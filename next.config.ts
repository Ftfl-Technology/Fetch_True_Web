// // /** @type {import('next').NextConfig} */
// // const nextConfig = {
// //   images: {
// //     remotePatterns: [
// //       {
// //         protocol: "https",
// //         hostname: "ik.imagekit.io",
// //       },
// //     ],
// //   },
// // };

// // module.exports = nextConfig;



// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "ik.imagekit.io",
//       },
//     ],
//   },
//   async rewrites() {
//     return [
//       {
//         source: '/api/provider/:path*',
//         destination: 'https://api.fetchtrue.com/api/provider/:path*',
//       },
//        {
//         source: '/api/packages',
//         destination: 'https://api.fetchtrue.com/api/packages',
//       },
//     ];
//   },
// };

// module.exports = nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
      },
    ],
  },
  
  async rewrites() {
    return [
      {
        source: '/api/provider/:path*',
        destination: 'https://api.fetchtrue.com/api/provider/:path*',
      },
      {
        source: '/api/packages',
        destination: 'https://api.fetchtrue.com/api/packages',
      },
    ];
  },

  // Turbopack configuration (replaces webpack)
  experimental: {
    largePageDataBytes: 128 * 100000, // 12.8MB
    turbo: {
      // Turbopack-specific configuration
      rules: {
        // Add any Turbopack rules here if needed
      },
      resolveAlias: {
        // Add any aliases here if needed
      },
    },
  },
  
 
  
  compress: true,
  generateEtags: true,
  staticPageGenerationTimeout: 120,
};

module.exports = nextConfig;