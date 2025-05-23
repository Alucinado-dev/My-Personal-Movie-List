import { getMovies } from './getMoviesFromTMDB'
import listResults from './app'

const isQueryble = (search) => {
  /* verifica se um certo string é queryble, se não há caracteres poribidos em uma query.. etc*/
  const forbiddenChars = [
    '/',
    '\\',
    '?',
    '%',
    '*',
    ':',
    '|',
    '"',
    '<',
    '>',
    '.',
  ]

  if (search === undefined || search === null || search.length === 0) {
    return false
  }

  for (let char of forbiddenChars) {
    if (search.includes(char)) {
      return false
    }
  }

  return true
}

const cardCreator = (movie) => {
  /* cria um card para um filme */
  const movieElement = document.createElement('li')
  movieElement.innerHTML = `
        <img src="${
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : 'https://via.placeholder.com/150'
        }" alt="${movie.title}">
        <p>${movie.title}</p>
    `
  return movieElement
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

const listElementCrator = (movies, movieListElement) => {
  if (movies.length === 0) {
    customCard('nenhum filme encontrado')
  }

  for (let movie of movies) {
    const movieCard = cardCreator(movie)
    movieListElement.appendChild(movieCard)
  }
}

const updateMovieList = async (search, movieListElement = listResults) => {
  /* atualiza a lista de filmes mostrada na tela de acordo com a pesquisa */
  if (!isQueryble(search)) {
    console.error('a pesquisa contém caracteres não permitidos')
    customCard(
      'não são permitidos na pesquisa os seguinte caracteres : / \\ ? * % : | " < > .'
    )
  } else {
    try {
      const movieList = await getMovies(
        search
      ) /* se a promise for concluída isso vai retornar um array de objetos, onde cada objeto é um filme */
      console.log(movieList)
      /* não precisa fazer destructuring pq o listElementCreator vai usar as inforamções separadamentes pra criar os cards */
      listElementCrator(movieList, movieListElement)
    } catch (error) {
      console.error(error)
      customCard('não foi possível obter filmes da base de dados')
    }
  }
}

export { updateMovieList }
