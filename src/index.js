const champions = [
    "aatrox", "ahri", "akali", "alistar", "ambessa", "amumu", "anivia", "annie", "aphelios", "aurelion_sol", "aurora", "azir",
    "bard", "belveth", "blitzcrank", "brand", "braum", "briar", "caitlyn", "camille", "cassiopeia", "chogath", "corki"
];
const championGridAlly = document.getElementById("champion-grid-ally");
const championGridEnemy = document.getElementById("champion-grid-enemy");

function getChampionName(id) {
    return id.charAt(0).toUpperCase() + id.slice(1);
}

function makeChampionGrid(element) {
    champions.forEach(
        function (id, index) {
            element.appendChild(makeChampionGridElement(id));
        }
    );
}

function makeChampionGridElement(id) {
    let element = document.createElement("li");
    element.innerHTML =  `<img src="img/champions/${id}.webp" alt="${getChampionName(id)}"></img>`;
    return element;
}

makeChampionGrid(championGridAlly);
makeChampionGrid(championGridEnemy);