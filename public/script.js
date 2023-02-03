const filterElement = document.getElementById("search-no");
const cards = document.querySelectorAll(".nada");

filterElement.addEventListener("input", filterNameCards);

function filterNameCards() {
    if (filterElement.value !== "") {
        for (let card of cards) {
            let title = card.querySelector(".name-no h3");
            title = title.textContent.toLowerCase();
            let filterText = filterElement.value.toLowerCase();
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