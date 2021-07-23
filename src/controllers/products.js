const { productsRepository } = require('../repositories')

const index = async (_request, response) => {
  const allProducts = await productsRepository.getAllProducts()
  return response.status(200).send(allProducts)
}

const show = async (request, response) => {
  try {
    const { params: { id } } = request
    const product = await productsRepository.getProductById(id)
    if (product) return response.status(200).send(product)
    return response.status(404).send({ message: 'Não encontrado' })
  } catch (error) {
    return response.status(500).send({ message: 'Erro interno' })
  }
}

module.exports = {
  index,
  show
}
