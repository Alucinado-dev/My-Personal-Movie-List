// import { popularListCreator, upcomingListCreator } from "./featured.js";
import { applyTemplateToElement } from "./globalFunctions.js";

const body = document.body



const  loadHomePageElements = async () => {
    await applyTemplateToElement("header", "/src/pages/template/header.html");
    await applyTemplateToElement("footer", "/src/pages/template/footer.html");
}

/* fazer com que a pagina só apareça ao usuário quando todos os elementos dela estiverem carregados */

const loadPage = async () => {
    await loadHomePageElements()
    body.style.opacity = '1'
}

loadPage()





// upcomingListCreator()
// popularListCreator()