const proxy = require('http-proxy-middleware');
​
module.exports = function (app: any) {
    app.use(
        proxy('/', {
            target: 'http://apis.juhe.cn/',  
            changeOrigin: true,      // 默认值是false
            pathRewrite: { '^/api1': '' }  
        })
    )
}
