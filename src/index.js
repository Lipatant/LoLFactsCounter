const champions = [
    "aatrox", "ahri", "akali", "alistar", "ambessa", "amumu", "anivia", "annie", "aphelios", "aurelion_sol", "aurora", "azir",
    "bard", "belveth", "blitzcrank", "brand", "braum", "briar", "caitlyn", "camille", "cassiopeia", "chogath", "corki"
];
const championGridAlly = document.getElementById("champion-grid-ally");
const championGridEnemy = document.getElementById("champion-grid-enemy");

function disableChampionGridElement(championGridElement) {
    championGridElement.classList.remove("selected");
}

function enableChampionGridElement(championGridElement) {
    championGridElement.classList.add("selected");
}

function getChampionName(id) {
    return id.charAt(0).toUpperCase() + id.slice(1);
}

function makeChampionGrid(element) {
    champions.forEach(
        function(id, index) {
            element.appendChild(makeChampionGridElement(id));
        }
    );
    element.setAttribute("champion-id", "")
}

function makeChampionGridElement(id) {
    let element = document.createElement("li");
    let elementButton = document.createElement("button");
    elementButton.addEventListener("click", onChampionGridElementClick);
    elementButton.innerHTML = `<img alt="${getChampionName(id)}" src="img/champions/icons/${id}.webp"></img>`;
    element.appendChild(elementButton);
    element.setAttribute("champion-id", id);
    return element;
}

function onChampionGridElementClick(event) {
    let eventTarget = (event.target.nodeName == "BUTTON") ? event.target : event.target.parentNode;
    let championGridElement = eventTarget.parentNode;
    selectChampionGridElement(championGridElement);
}

function selectChampionGridChampion(championGrid, id) {
    let championGridChildren = championGrid.children;
    if (championGrid.getAttribute("champion-id") === id) {
        id = null;
    }
    for (let i = 0; i < championGridChildren.length; i++) {
        let championGridElement = championGridChildren[i];
        if (championGridElement.getAttribute("champion-id") === id) {
            enableChampionGridElement(championGridElement);
        } else {
            disableChampionGridElement(championGridElement);
        }
    }
    championGrid.setAttribute("champion-id", id);
}

function selectChampionGridElement(championGridElement) {
    let championGrid = championGridElement.parentNode;
    selectChampionGridChampion(championGrid, championGridElement.getAttribute("champion-id"))
}

const championGridAll = [championGridAlly, championGridEnemy];

championGridAll.forEach(
    function(championGrid, index) {
        makeChampionGrid(championGrid);
    }
);