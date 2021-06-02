const { Router } = require('express')

const healthCheckRouter = require('./health-check')
const product = require('./products')

const router = Router()

router.use('/health-check', healthCheckRouter)
router.use('/products', product)

module.exports = router
