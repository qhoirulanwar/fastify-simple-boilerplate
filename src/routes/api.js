module.exports = (fastify, opts, next) => {

    // api
    fastify.get('/', require('../controllers/index').index)

    // // auth Login & Register
    // fastify.post('/auth/login', require('../controllers/auth/login').login)
    // fastify.post('/auth/register', require('../controllers/auth/register').register)

    // // Layanan
    // fastify.get('/layanan/kategori/:idkategori', require('../controllers/layanan/layanan').layananByKategori)

    // // kategori
    // fastify.get('/layanan/kategori', require('../controllers/layanan/kategori').kategori)
    // fastify.get('/layanan/kategori/group/:idkategori', require('../controllers/layanan/kategori').grupKetegori)

    // // grup
    // fastify.get('/layanan/grup/:idLayanan', require('../controllers/layanan/grup').grupByLayanan)

    next()
}