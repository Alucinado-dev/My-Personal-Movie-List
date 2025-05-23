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

const getMovies = async (
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

export { getMovies }

getMovies('ainda estou') /* teste de consumo da api bem sucedido */
