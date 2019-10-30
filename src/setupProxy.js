const proxy = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    proxy({
      target: 'https://api.chucknorris.io',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/',
      },
      secure: true,
    }),
  );
};
