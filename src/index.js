let champions = [];
const championGridAlly = document.getElementById("champion-grid-ally");
const championGridEnemy = document.getElementById("champion-grid-enemy");
const championPickedAlly = document.getElementById("champion-picked-ally")
const championPickedEnemy = document.getElementById("champion-picked-enemy")
const matchupInformationFact = document.getElementById("matchup-information-fact")

function checkForMatchupInformation(idAlly, idEnemy, idList) {
    return idList.includes(idAlly) && idList.includes(idEnemy)
}

function disableChampionGridElement(championGridElement) {
    championGridElement.classList.remove("selected");
}

function enableChampionGridElement(championGridElement) {
    championGridElement.classList.add("selected");
}

function getChampionName(id) {
    if (championData[id].hasOwnProperty("name")) {
        return championData[id]["name"]
    } else {
        return id.charAt(0).toUpperCase() + id.slice(1);
    }
}

function getMatchupInformationFact(idAlly, idEnemy) {
    if (!idEnemy) {
        return "...";
    }
    const enemyData = championData[idEnemy];
    if (idAlly) {
        // Same character
        if (idAlly === idEnemy) {
            return "You are both playing the same champion.";
        }
        // Groups
        const matchupInformationSerie = [
            [
                ["ambessa", "mel"], "Ambessa is Mel's mother."
            ],
            [
                ["aatrox", "jax"], "Aatrox considers Jax a worthy vessel."
            ],
            [
                ["akali", "kayn"], "Akali finds Kayn hot."
            ],
            [
                ["anivia", "ornn", "volibear"], `${getChampionName(idAlly)} and ${getChampionName(idEnemy)} are siblings.`
            ],
            [
                ["aurelion_sol", "pantheon"], "Aurelion Sol once killed Pantheon."
            ],
            [
                ["aurora", "ornn"], `${getChampionName(idAlly)} and ${getChampionName(idEnemy)} are friends.`
            ],
            [
                ["azir", "sivir"], `${getChampionName(idAlly)} and ${getChampionName(idEnemy)} are related.`
            ],
            [
                ["belveth", "malzahar"], "Bel'Veth controls Malzahar."
            ],
            [
                ["blitzcrank", "karthus"], "#img/comics/blitzcrank_karthus.jpg"
            ],
            [
                ["blitzcrank", "viktor"], "Viktor created Blitzcrank."
            ],
            [
                ["brand", "ryze"], "Ryze was once Brand's mentor."
            ],
            [
                ["braum", "illaoi"], `Illaoi has a crush on Braum.`
            ],
            [
                ["briar", "talon"], "Briar considers Talon a friend."
            ],
            [
                ["cassiopeia", "katarina", "talon"], `${getChampionName(idAlly)} and ${getChampionName(idEnemy)} are from the same family.`
            ],
            [
                ["cassiopeia", "sivir"], "Cassiopeia tried to kill Sivir, causing the return of Azir."
            ],
            [
                ["darius", "draven"], `${getChampionName(idAlly)} and ${getChampionName(idEnemy)} are siblings.`
            ],
            [
                ["diana", "leona"], `${getChampionName(idAlly)} and ${getChampionName(idEnemy)} are lovers.`
            ],
            [
                ["dr_mundo", "heimerdinger"], "Dr. Mundo considers Heimerdinger a fellow genius."
            ],
            [
                ["ekko", "rell"], "Rell has a crush on Ekko."
            ],
            [
                ["evelynn", "vayne"], "Evelynn killed Vayne's parents."
            ],
            [
                ["ezreal", "lux"], "Ezreal has a crush on Lux."
            ],
            [
                ["ezreal", "ryze"], "The last rune Ryze is looking for is in Ezreal's glove."
            ],
            [
                ["ezreal", "zoe"], "Zoe has a crush on Ezreal."
            ],
            [
                ["fizz", "nautilus"], "Nautilus hates Fizz."
            ],
            [
                ["galio", "lux"], "Nautilus hates Fizz."
            ],
            [
                ["garen", "jarvan_iv"], `${getChampionName(idAlly)} and ${getChampionName(idEnemy)} are friends.`
            ],
            [
                ["garen", "katarina"], "Katarina has a crush on Garen."
            ],
            [
                ["garen", "kayle"], `Kayle is responsible for Garen's R.`
            ],
            [
                ["garen", "lux"], `${getChampionName(idAlly)} and ${getChampionName(idEnemy)} are siblings.`
            ],
            [
                ["garen", "teemo"], "@https://www.youtube.com/embed/A0NiYC6Oakg?si=aEq09Sts590mAoRs&amp;start=17"
            ],
            [
                ["gangplank", "miss_fortune"], "Gangplank killed Miss Fortune's parents."
            ],
            [
                ["gnar", "amumu"], "#img/comics/gnar_amumu.webp"
            ],
            [
                ["gnar", "cassiopeia"], "#img/comics/gnar_amumu.webp"
            ],
            [
                ["gnar", "cho_gath"], "#img/comics/gnar_cho_gath.webp"
            ],
            [
                ["gnar", "darius"], "#img/comics/gnar_nunu_and_willump.webp"
            ],
            [
                ["gnar", "karthus"], "#img/comics/gnar_karthus.webp"
            ],
            [
                ["gnar", "lee_sin"], "#img/comics/gnar_lee_sin.webp"
            ],
            [
                ["gnar", "leona"], "#img/comics/gnar_leona.webp"
            ],
            [
                ["gnar", "malzahar"], "#img/comics/gnar_rengar.webp"
            ],
            [
                ["gnar", "nocturne"], "#img/comics/gnar_nocturne.webp"
            ],
            [
                ["gnar", "nunu_and_willump"], "#img/comics/gnar_nunu_and_willump.webp"
            ],
            [
                ["gnar", "rengar"], "#img/comics/gnar_rengar.webp"
            ],
            [
                ["gnar", "twisted_fate"], "#img/comics/gnar_twisted_fate.webp"
            ],
            [
                ["graves", "twisted_fate"], `${getChampionName(idAlly)} and ${getChampionName(idEnemy)} are lovers.`
            ],
            [
                ["gwen", "senna"], `${getChampionName(idAlly)} and ${getChampionName(idEnemy)} both have a fragment of Isolde, Viego's wife.`
            ],
            [
                ["gwen", "viego"], "Gwen was made by Isolde, Viego's wife."
            ],
            [
                ["hecarim", "kalista"], `${getChampionName(idAlly)} and ${getChampionName(idEnemy)} were fiancés.`
            ],
            [
                ["irelia", "swain"], `Irelia cut off Swain's arm.`
            ],
            [
                ["jarvan_iv", "katarina"], `Katarina killed Jarvan IV's father.`
            ],
            [
                ["jarvan_iv", "shyvana"], `${getChampionName(idAlly)} and ${getChampionName(idEnemy)} are lovers.`
            ],
            [
                ["jarvan_iv", "sion"], `Sion killed Jarvan I.`
            ],
            [
                ["kaisa", "kassadin"], `${getChampionName(idAlly)} and ${getChampionName(idEnemy)} are friends.`
            ],
            [
                ["kalista", "viego"], `Despite being her uncle, Viego sees Kalista more as an older sister.`
            ],
            [
                ["khazix", "rengar"], `${getChampionName(idAlly)} and ${getChampionName(idEnemy)} are rivals.`
            ],
            [
                ["kindred", "jhin"], `${getChampionName(idAlly)} and ${getChampionName(idEnemy)} were made from the same champion concept.`
            ],
            [
                ["jinx", "vi"], `${getChampionName(idAlly)} and ${getChampionName(idEnemy)} are siblings.`
            ],
            [
                ["leona", "rell"], "Rell has a crush on Leona."
            ],
            [
                ["lucian", "senna"], `${getChampionName(idAlly)} and ${getChampionName(idEnemy)} are lovers.`
            ],
            [
                ["mordekaiser", "rell"], "Rell was trained by the Black Rose to defeat Mordekaiser."
            ],
            [
                ["mordekaiser", "veigar"], "Mordekaiser had Veigar imprisoned."
            ],
            [
                ["morgana", "kayle"], `${getChampionName(idAlly)} and ${getChampionName(idEnemy)} are siblings.`
            ],
            [
                ["nasus", "renekton"], `${getChampionName(idAlly)} and ${getChampionName(idEnemy)} are siblings.`
            ],
            [
                ["neeko", "nidalee"], "Neeko has a crush on Nidalee."
            ],
            [
                ["pyke", "rengar"], `${getChampionName(idAlly)} and ${getChampionName(idEnemy)} share a similar dance.`
            ],
            [
                ["rakan", "xayah"], `${getChampionName(idAlly)} and ${getChampionName(idEnemy)} are lovers.`
            ],
            [
                ["rumble", "warwick"], "Hyena Warwick can be seen in the background of Badlands Baron Rumble."
            ],
            [
                ["taliyah", "yasuo"], "Yasuo was Taliyah's mentor."
            ],
            [
                ["yasuo", "yone"], `${getChampionName(idAlly)} and ${getChampionName(idEnemy)} are siblings.`
            ],
        ]
        for (let i = 0; i < matchupInformationSerie.length; i++) {
            if (checkForMatchupInformation(idAlly, idEnemy, matchupInformationSerie[i][0])) {
                return matchupInformationSerie[i][1];
            }
        }
        // Copy data
        const allyData = championData[idAlly];
        // Nicknames
        if (allyData.hasOwnProperty("nicknames") && allyData["nicknames"].hasOwnProperty(idEnemy)) {
            return `${getChampionName(idEnemy)} calls ${getChampionName(idAlly)} '${allyData["nicknames"][idEnemy]}'.`
        }
        if (enemyData.hasOwnProperty("nicknames") && enemyData["nicknames"].hasOwnProperty(idAlly)) {
            return `${getChampionName(idAlly)} calls ${getChampionName(idEnemy)} '${enemyData["nicknames"][idAlly]}'.`
        }
        // Race
        const allyRace = allyData.hasOwnProperty("race") ? allyData["race"] : "";
        const enemyRace = enemyData.hasOwnProperty("race") ? enemyData["race"] : "";
        if (allyRace && (allyRace === enemyRace)) {
            return `${getChampionName(idAlly)} and ${getChampionName(idEnemy)} are both ${getRaceName(allyRace)}.`;
        }
    }
    const trivia = enemyData.hasOwnProperty("trivia") ? enemyData["trivia"] : "";
    if (trivia) {
        return trivia;
    }
    return "...";
}

function getRaceName(id) {
    switch (id) {
        case "void_born":
            return "Void Borns"
        default:
            return id.charAt(0).toUpperCase() + id.slice(1) + "s";
    }
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
        id = "";
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
    if (championGrid == championGridAlly) {
        setChampionPickedID(championPickedAlly, id)
    }
    if (championGrid == championGridEnemy) {
        setChampionPickedID(championPickedEnemy, id)
    }
}

function selectChampionGridElement(championGridElement) {
    let championGrid = championGridElement.parentNode;
    selectChampionGridChampion(championGrid, championGridElement.getAttribute("champion-id"))
}

function setChampionPickedID(championPicked, id) {
    championPicked.setAttribute("alt", id ? getChampionName(id) : "None")
    championPicked.setAttribute("src", `img/champions/icons/${id ? id : "default"}.webp`)
    updateMatchupInformationFact()
}

function updateMatchupInformationFact() {
    let content = getMatchupInformationFact(championGridAlly.getAttribute("champion-id"), championGridEnemy.getAttribute("champion-id"));
    if (content[0] == '@') {
        matchupInformationFact.innerHTML = `<iframe width="560" height="315" src="${content.slice(1)}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    } else if (content[0] == '#') {
        matchupInformationFact.innerHTML = `<img width="560" src="${content.slice(1)}"></img>`

    } else {
        matchupInformationFact.textContent = getMatchupInformationFact(championGridAlly.getAttribute("champion-id"), championGridEnemy.getAttribute("champion-id"))
    }
}

champions = Object.keys(championData)

const championGridAll = [championGridAlly, championGridEnemy];

championGridAll.forEach(
    function(championGrid, index) {
        makeChampionGrid(championGrid);
    }
);