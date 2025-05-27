const loadTemplate = async (file) => {
    const response = await fetch(file);
    const template = await response.text();
    return template;
}

const cardCreator = (movie, count, file) => {
  /* cria um card para um filme */
  const movieElement = document.createElement('li')
  movieElement.innerHTML = loadTemplate(file)
  return movieElement
}

/* essa função vai pegar um array de objetos (movies), vai preencher um elemento html lista(movieListElement) com esses objetos  em cards seguindo o template(file) */
const listElementCrator = (movies, movieListElement, file) => {
  if (movies.length === 0) {
    customCard('nenhum filme encontrado')
  }

  let count = 0
  for (let movie of movies) {
    count++
    const movieCard = cardCreator(movie, count, file)
    movieListElement.appendChild(movieCard)
  }
}




export {loadTemplate, listElementCrator};