const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2 node!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

router.get('/profile/:userName', async (ctx, next) => {
	const { userName } = ctx.params;
	console.log(`userName: ** ${userName}`);
	ctx.body = {
		content: `this is ${userName} profile page`,
		userName
	}
})

router.get('/loadmore/:userName/:pageIndex', async (ctx, next) => {
	const { userName, pageIndex} = ctx.params;
	ctx.body = {
		title: 'this is loadmore ',
		userName,
		pageIndex
	}
})

module.exports = router
