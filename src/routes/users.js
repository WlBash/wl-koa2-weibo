const router = require('koa-router')()

router.prefix('/users')

router.get('/', function (ctx, next) {
    ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
    ctx.body = 'this is a users/bar response'
})

router.post('/login', function (ctx, next) {
    const { userName, passWord } = ctx.request.body
    ctx.body = {
        userName,
        passWord
    }
})

module.exports = router
