const homeService = require('../service/home')
module.exports ={
    index:
        async(ctx,next)=>{
            // ctx.response.body = `<h1>index page</h1>`
            await ctx.render('home/index',{
                title:"Aday 欢迎你"
            })
        },
    home:
        async(ctx,next)=>{
            ctx.response.body=`<div>home page</div>`
        },
    user:
        async(ctx,next)=>{
            // ctx.response.body = 
            // `<form action="/user/login" method="post">
            // <input name="name" type="text" placeholder="请输入用户名：chen"/> 
            // <br/>
            // <input name="pass" type="password" placeholder="请输入密码：12345"/>
            // <br/> 
            // <button>login</button>
            // </form>`
            await ctx.render('home/user')
        },
    login:
        async(ctx,next)=>{
            let params = ctx.request.body
            console.log('params: ',params)
            let data = await homeService.login(params.name,params.pass)
            console.log('data: ',data)
            if(resizeBy.status == "-1"){
                await ctx.render('home/user',{
                    userName: `${data}`
                })
            }else{
            await ctx.render('home/login',{
                userName: `${data}`
            })
        }
        }
}