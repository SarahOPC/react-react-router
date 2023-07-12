const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://s3-eu-west-1.amazonaws.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/course.oc-static.com/projects/Front-End+V2/P9+React+1',
      },
    })
  );
};
// use of a proxy server to bypass the CORS restriction
// This configuration sets up a proxy server for requests starting with /api 
// and redirects them to the target URL, while allowing cross-origin requests.