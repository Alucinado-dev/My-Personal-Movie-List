const loadTemplate = async (file,elementId) => {
    const response = await fetch(file);
    const template = await response.text();
    document.getElementById(elementId).innerHTML = template;
}

export default loadTemplate;