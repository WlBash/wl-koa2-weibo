/**
 * @description user API 路由
 * @author wulei
 */

const router = require('koa-router')()
const { isExist } = require('../../controller/user')
router.prefix('/api/user')

router.post('/register', async (ctx, next) => {
    await ctx.render('register', getLoginInfo(ctx))
})

router.post('/isExist', async (ctx, next) => {
    const { userName } = ctx.request.body
    ctx.body = await isExist(userName)
})

module.exports = router
