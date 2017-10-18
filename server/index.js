const Koa                           = require('koa');
const route                         = require('koa-router');
const etag                          = require('koa-etag');
const conditional                   = require('koa-conditional-get');
const serve                         = require('koa-static');
const mount                         = require('koa-mount');
const compress                      = require('koa-compress');

const app = new Koa();
const router = route();

const CACHE_MAXAGE = 300000;

app
.use(compress({
    threshold: 2048
}))
.use(conditional())
.use(etag())
.use(mount('/dist', serve('./dist', {
    maxage : CACHE_MAXAGE
})))
.use(mount('/report', serve('./report', {
    maxage : CACHE_MAXAGE
})))
.use(mount('/', serve('./docs', {
    maxage : CACHE_MAXAGE
})))
.use(router.routes())
.use(router.allowedMethods())
.listen(80);

console.log('Monring UI document service started(port 80).');
