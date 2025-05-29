const loadTemplate = async (file) => {
  const response = await fetch(file)

  if (!response.ok) {
    throw new Error(
      `Erro ao carregar o template ${file}: ${response.statusText}`
    )
  }

  const template = await response.text()
  return template
}

const applyTemplateToElement = async (elementId, templatePath) => {
  const element = document.getElementById(elementId)
  if (element) {
    try {
      const htmlContent = await loadTemplate(templatePath)
      element.innerHTML = htmlContent
    } catch (error) {
      console.error(`Erro ao carregar o template ${templatePath}:`, error)
    }
  } else {
    console.warn(`Elemento com ID "${elementId}" não encontrado.`)
  }
}

const customCard = (message, movieListElement = listResults) => {
  /* cria um card customizado para um filme */
  movieListElement.innerHTML = ''
  const movieElement = document.createElement('li')
  movieElement.innerHTML = `
        <h5>${message}</h5>
    `
  movieListElement.appendChild(movieElement)
}

const cardCreator = async (movie, count, file) => {
  /* cria um card para um filme */
  const movieElement = document.createElement('li')
  try {
    const templateString = await loadTemplate(file)
    // TODO: Implement logic to inject 'movie' data into the templateString if needed.
    // For now, assuming the template is static or will be populated with movie data
    // by a more sophisticated templating mechanism within the template string itself.
    movieElement.innerHTML = templateString
  } catch (error) {
    console.error(`Erro ao carregar o template ${file}:`, error)
  }
  return movieElement
}

/* essa função vai pegar um array de objetos (movies), vai preencher um elemento html lista(movieListElement) com esses objetos  em cards seguindo o template(file) */
const listElementCrator = async (movies, movieListElement, file) => {
  if (movies.length === 0) {
    customCard('nenhum filme encontrado')
  }

  movieListElement.innerHTML = ''
  let count = 0
  for (let movie of movies) {
    count++
    const movieCard = await cardCreator(movie, count, file)
    movieListElement.appendChild(movieCard)
  }
}

export { loadTemplate, listElementCrator, applyTemplateToElement }
