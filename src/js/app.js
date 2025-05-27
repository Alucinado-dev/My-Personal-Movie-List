import "dotenv/config";
import loadTemplate from "./globalFunctions";
import { popularListCreator, upcomingListCreator } from "./featured";


const header = document.getElementById("header");
loadTemplate("/src/pages/template/header.html", header);

const footer = document.getElementById("footer");
loadTemplate("/src/pages/template/footer.html", footer);

// upcomingListCreator()
// popularListCreator()