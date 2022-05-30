const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function(app){
  app.use(
    createProxyMiddleware("/api",{
      target:"http://localhost:3001",
      changeOrigin:true,
    })
  )

  app.use(
    createProxyMiddleware("/signup",{
      target:"http://localhost:3001",
      changeOrigin:true,
    })
  )
}