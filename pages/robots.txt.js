import React from 'react'
export default class extends React.Component {
  static async getInitialProps ({ req, res }) {
    //res.writeHead(302, { Location: '/redirect' }) //sample how to response custom header
    res.write(`
      User-agent: Googlebot-Image
      Disallow: /

      User-Agent: *
      Disallow:

      Sitemap: https://noxxembir.com/static/sitemap.xml
    `)
    res.end()
  }
}
