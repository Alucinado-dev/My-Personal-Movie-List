const apiKey =
	"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMGQzZmY5MTNjZDY0MjdmM2JlMjgwMGM2M2ViYzAxNSIsIm5iZiI6MTc0NzYwNjU2NS44MTEsInN1YiI6IjY4MmE1YzI1N2Q1Y2ZiZTk2YjBiZDU4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.li8PpIKErHiaYiGeYX7F-GvAypsaIpcO2e1L_zKfAa0";
const apiUrl = "https://api.themoviedb.org/3";

const getMovies = async (query) => {
	const url = `${apiUrl}/search/movie?api_key=${apiKey}&query=${query}&include_adult=false&language=pt-BR&page=1`;
	const options = {
		method: "GET",
		headers: {
			accept: "application/json",
			Authorization: `Bearer ${apiKey}`,
		},
	};

	try {
		// 1. Aguarde a resposta da requisição HTTP
		const httpResponse = await fetch(url, options);

		// 2. Verifique se a requisição foi bem-sucedida (status HTTP 200-299)
		if (!httpResponse.ok) {
			// Se não foi, logue o erro e o status.
			console.error(
				`HTTP error! status: ${httpResponse.status}`
			);
			// Você pode querer ler a mensagem de erro do corpo da resposta também:
			const errorText = await httpResponse.text();
			console.error("Error response body:", errorText);
			// Decida o que retornar em caso de erro (array vazio, undefined, ou lançar um erro)
			throw new Error(
				`API request failed with status ${httpResponse.status}`
			);
		}

		// 3. Se a resposta foi OK, converta o corpo da resposta para JSON
		const data = await httpResponse.json();

		// 4. Logue os dados (opcional, mas você tinha isso antes)
		console.log(data);

		// 5. Retorne os resultados
		return data.results;
	} catch (err) {
		// Este bloco catch lida com erros de rede ou outros problemas com a chamada fetch em si
		// (por exemplo, se o servidor estiver inacessível ou houver um problema na conversão para JSON)
		console.error("Error during fetch operation:", err);
		// Novamente, decida o que retornar ou se deve relançar o erro
		throw err;
	}
};

export { getMovies };

// getMovies("ainda estou"); /* teste de consumo da api bem sucedido */
