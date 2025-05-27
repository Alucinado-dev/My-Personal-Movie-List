import 'dotenv/config'

const apiAccessToken = process.env.TMDB_API_ACCESS_TOKEN
const apiBaseUrl = 'https://api.themoviedb.org/3'


const options = {
  method: 'GET',

  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${apiAccessToken}`,
  },
}

const getMoviesFromSearch = async (
  query,
  apiParams = options,
  defaultUrl = apiBaseUrl
) => {
  const endpoint = `${defaultUrl}/search/movie?query=${query}&include_adult=false&language=pt-BR&page=1`

  try {
    // 1. espera a resposta da requisição HTTP
    const httpResponse = await fetch(endpoint, apiParams)
    // 2. espera pelos dados de fato da resposta
    const searchedMoviesInfo = await httpResponse.json()
    // 3. loga os dados
    console.log(searchedMoviesInfo)
    // 4. retorna os resultados
    return searchedMoviesInfo.results
  } catch (err) {
    console.error('Error during fetch operation:', err)
    throw err
  }
}


const getPopularMovies= async (
  apiParams = options,
  defaultUrl = apiBaseUrl
) => {
  const endpoint = `${defaultUrl}/movie/popular?language=pt-BR&page=1`

  try {
    // 1. espera a resposta da requisição HTTP
    const httpResponse = await fetch(endpoint, apiParams)
    // 2. espera pelos dados de fato da resposta
    const popularMoviesInfo = await httpResponse.json()
    // 3. loga os dados
    console.log(popularMoviesInfo)
    // 4. retorna os resultados
    return popularMoviesInfo.results
  } catch (err) {
    console.error('Error during fetch operation:', err)
    throw err
  }
}


const getUpcomingMovies = async (
  apiParams = options,
  defaultUrl = apiBaseUrl
) => {
  const endpoint = `${defaultUrl}/movie/upcoming?language=pt-BR&page=1`

  try {
    // 1. espera a resposta da requisição HTTP
    const httpResponse = await fetch(endpoint, apiParams)
    // 2. espera pelos dados de fato da resposta
    const upcomingMoviesInfo = await httpResponse.json()
    // 3. loga os dados
    console.log(upcomingMoviesInfo)
    // 4. retorna os resultados
    return upcomingMoviesInfo.results
  } catch (err) {
    console.error('Error during fetch operation:', err)
    throw err
  }
}

export { getMoviesFromSearch, getPopularMovies, getUpcomingMovies }

getMoviesFromSearch('ainda estou') /* teste de consumo da api bem sucedido */
getPopularMovies() /* teste de consumo da api bem sucedido */
getUpcomingMovies() /* teste de consumo da api bem sucedido */

