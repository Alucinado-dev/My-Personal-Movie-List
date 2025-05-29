import getMoviesFromSearch from './apiTmdb'
import listResults from './app'
import {listElementCrator} from './globalFunctions'

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






const updateMovieList = async (search, movieListElement = listResults) => {
  /* atualiza a lista de filmes mostrada na tela de acordo com a pesquisa */
  if (!isQueryble(search)) {
    console.error('a pesquisa contém caracteres não permitidos')
    customCard(
      'não são permitidos na pesquisa os seguinte caracteres : / \\ ? * % : | " < > .'
    )
  } else {
    try {
      const movieList = await getMoviesFromSearch(search) /* se a promise for concluída isso vai retornar um array de objetos, onde cada objeto é um filme */
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
