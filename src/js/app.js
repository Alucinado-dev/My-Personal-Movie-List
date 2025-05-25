import "dotenv/config";
import loadTemplate from "./domFunctions";

const header = document.getElementById("header");
loadTemplate("/src/pages/header.html", header);

const footer = document.getElementById("footer");
loadTemplate("/src/pages/footer.html", footer);
