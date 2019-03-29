const router = require('koa-router')()
const homeControllr = require('./controller/home')
module.exports = (app) => {
    router.get('/', homeControllr.index)
    router.get('/user',homeControllr.user )
    router.post('/user/login',homeControllr.login)
    app.use(router.routes())
       .use(router.allowedMethods())


}