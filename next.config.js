module.exports = {
    trailingSlash: true,
  }
  module.exports = {
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'http://localhost:3080/:path*' // Proxy to Backend
        }
      ]
    }
  }