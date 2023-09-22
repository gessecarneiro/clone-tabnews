function status(request, response) {
  response.status(200).json({
    "ola":"amigos",
  })
}

export default status;