const filterElement = document.getElementById("search-no");
const cards = document.querySelectorAll(".nada");

filterElement.addEventListener("input", filterNameCards);

function filterNameCards() {
    if (filterElement.value !== "") {
        for (let card of cards) {
            let title = card.querySelector(".name-no h3");
            title = title.textContent.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
            let filterText = filterElement.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
            if (!title.includes(filterText)) {
                card.style.display = "none";
            } else {
                card.style.display = "block";
            }
        }
    } else {
        for (let card of cards) {
            card.style.display = "block";
        }
    }
}

function goBack() {
    window.history.back();
}

    const formatdata = document.getElementsByClassName("date-format");
    for(i = 0; i < formatdata.length; i++) {
    const formatdata = document.getElementsByClassName("date-format")[i];
    const formated = formatdata.innerHTML.split("-");
    const dateFormated = formated.reverse();
    formatdata.innerHTML = `${dateFormated[0]}/${dateFormated[1]}/${dateFormated[2]}`;
    }