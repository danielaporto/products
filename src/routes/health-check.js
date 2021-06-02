const { Router } = require('express')

const router = Router()

router.get('/', (request, response) => {
  response.status(200).send('OK')
})

module.exports = router
