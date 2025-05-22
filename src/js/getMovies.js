import "dotenv/config";

const apiAccessToken = process.env.TMDB_API_ACCESS_TOKEN;
const apiBaseUrl = "https://api.themoviedb.org/3";
const options = {
	method: "GET",

	headers: {
		accept: "application/json",
		Authorization: `Bearer ${apiAccessToken}`,
	},
};

const isQueryble = (search) => {
	/* verifica se um certo string é queryble, se não há caracteres poribidos em uma query.. etc*/
	const forbiddenChars = [
		"/",
		"\\",
		"?",
		"%",
		"*",
		":",
		"|",
		'"',
		"<",
		">",
		".",
	];

	if (
		search === undefined ||
		search === null ||
		search.length === 0
	) {
		return false;
	}

	for (let char of forbiddenChars) {
		if (search.includes(char)) {
			return false;
		}
	}

	return true;
};




const getMovies = async (query,	apiParams = options, defaultUrl = apiBaseUrl) => {

	const endpoint = `${defaultUrl}/search/movie?query=${query}&include_adult=false&language=pt-BR&page=1`;

	if (!isQueryble(query)) {
		console.error('a pesquisa contém caracteres não permitidos')
		customAlert('não são permitidos na pesquisa os seguinte caracteres : / \\ ? * % : | " < > .')
	} else {
		
		try {
			// 1. espera a resposta da requisição HTTP
			const httpResponse = await fetch(endpoint, apiParams);
			// 2. espera pelos dados de fato da resposta
			const searchedMoviesInfo = await httpResponse.json();
			// 3. loga os dados 
			console.log(searchedMoviesInfo);
			// 4. retorna os resultados
			return searchedMoviesInfo.results;
		} catch (err) {
			console.error("Error during fetch operation:", err);
			throw err;
		}
	}
	
};

export { getMovies };

getMovies("ainda estou"); /* teste de consumo da api bem sucedido */
