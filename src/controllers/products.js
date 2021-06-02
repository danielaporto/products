const index = (request, response) => {
  return response.status(200).send('list in all products')
}

const show = (request, response) => {
  const { params: { id } } = request
  return response.status(200).send(`list for id product ${id}`)
}

module.exports = {
  index,
  show
}
