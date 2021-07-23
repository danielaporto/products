const { Router } = require('express')

const healthCheckRouter = require('./health-check')
const productsRouter = require('./products')

const router = Router()

router.use('/health-check', healthCheckRouter)
router.use('/products', productsRouter)

module.exports = router
