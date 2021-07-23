const csvtojson = require('csvtojson')
const path = require('path')

const readDatabase = async () => {
  const pathFile = path.resolve(process.cwd(), 'src', 'database', 'products.csv')
  return await csvtojson().fromFile(pathFile)
}

const getAllProducts = async () =>
  readDatabase()

const getProductById = async (productId) =>
  readDatabase().then(products => products.find(({ id }) => id === productId))

module.exports = {
  getAllProducts,
  getProductById
}
