import { getMovies } from "./getMovies";

const isQueryble = (search) => {
    /* verifica se um certo string é queryble, se não há caracteres poribidos em uma query.. etc*/
    const forbiddenChars = ["/", "\\", "?", "%", "*", ":", "|", '"', "<", ">", "."]

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

const listElementCrator = (movies, movieListElement) =>{
    if (movies.length === 0) {
			movieListElement.innerHTML = "<p>Nenhum filme encontrado</p>";
		}
	
    for (let movie of movies) {
		const movieElement = document.createElement("li")
		movieElement.innerHTML = 
        `
                // TODO criar um card bonitinho pra cada filme listado
            <img src="${movie.Poster}" alt="${movie.Title}">
            <p>${movie.Title}</p>
        `;
			movieListElement.appendChild(movieElement);
	}
}

const updateMovieList = async (search, movieListElement) => {
    /* atualiza a lista de filmes mostrada na tela de acordo com a pesquisa */
    if (isQueryble(search)) {
        const movies = await getMovies(search)
        movieListElement.innerHTML = ""

        listElementCrator(movies,movieListElement)
        
    } else {
        movieListElement.innerHTML = "<p>Pesquisa inválida</p>"
    }
}

export { updateMovieList }
