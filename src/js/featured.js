import { listElementCrator } from './globalFunctions'
import { getPopularMovies, getUpcomingMovies } from '/src/js/apiTmdb'

const popularListCreator = async (listElement) => {
  try {
    const list = await getPopularMovies()
    const file = '/src/pages/template/featuredCard.html'
    listElementCrator(list, listElement, file)
  } catch (error) {
    console.error(error)
    throw error
  }
}

const upcomingListCreator = async (listElement) => {
  try {
    const list = await getUpcomingMovies()
    const file = '/src/pages/template/featuredCard.html'
    listElementCrator(list, listElement, file)
  } catch (error) {
    console.error(error)
    throw error
  }
}


export { popularListCreator, upcomingListCreator}