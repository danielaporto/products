const { Router } = require('express')
const { productsController } = require('../controllers')

const router = Router()

router.get('/', productsController.index)

router.get('/:id', productsController.show)

module.exports = router
