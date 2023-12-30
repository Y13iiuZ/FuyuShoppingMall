const {createProxyMiddleware} =  require('http-proxy-middleware')

// @ts-ignore
module.exports = function (app) {
    app.use(
       '/api1',
        createProxyMiddleware({
            target: 'http://apis.juhe.cn',  
            changeOrigin: true,      // 默认值是false
            pathRewrite: { '^/api1': '' }
        }),
    ),
    app.use(
      '/api2',
        createProxyMiddleware({
            target: 'https://agcf9si6uw.us.aircode.run',  
            changeOrigin: true,      // 默认值是false
            pathRewrite: { '^/api2': '' }
        })
    );
}
