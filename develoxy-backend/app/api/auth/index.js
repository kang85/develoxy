const Router = require('koa-router');

const router = new Router();

const controller = require('./auth.controller');


router.get('/login/google', controller.googleLogin);
router.get('/google/callback', controller.googleCallback);

// router.post('/login/:provider', (ctx, next) => {
//     console.log(ctx.request);
//     ctx.body = {
//         provider: ctx.params.provider
//     };
// });

module.exports = router;