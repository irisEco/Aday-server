const Koa = require('koa')
const app = new Koa()
const path = require('path')
const bodyParser = require('koa-bodyparser')
const router = require('./router')
const nunjucks = require('koa-nunjucks-2')
const staticFiles = require('koa-static')

app.use(staticFiles(path.resolve(__dirname,"./public")))
app.use(nunjucks({
    ext:'html',
    path: path.join(__dirname,'views'),
    nunjucksConfig:{
        trimBlocks: true
    }
}))
app.use(bodyParser())
router(app)
app.listen(3000, () => {
    console.log('server is run in http://127.0.0.1:3000')
})  