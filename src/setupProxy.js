const {createProxyMiddleware} =  require('http-proxy-middleware')

// @ts-ignore
module.exports = function (app) {
    app.use(
       '/api1',
        createProxyMiddleware({
            target: 'http://apis.juhe.cn',  
            changeOrigin: true,      // 默认值是false
            pathRewrite: { '^/api1': '' }
        })
    )
}
