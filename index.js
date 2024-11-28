// Combattenti
const fighters = [
    {
        name: 'Freezer',
        power: 8000
    },
    {
        name: 'Vegeta',
        power: 8500
    },
    {
        name: 'Crilin',
        power: 500
    },
    {
        name: 'Mr Satan',
        power: 50
    },
    {
        name: 'Junior',
        power: 6000
    },
    {
        name: 'Goku',
        power: 9001
    },
    {
        name: 'Tensing',
        power: 450
    },
    {
        name: 'Videl',
        power: 300
    },
    {
        name: 'Bulma',
        power: 20
    },
    {
        name: 'C-18',
        power: 7800
    },
    {
        name: 'Gohan',
        power: 8900
    },
    {
        name: 'Trunks',
        power: 1250
    }
];
// Armi
const weapons = [
    { 
        name: "Ventaglio della Musa", 
        power: 15 
    },
    { 
        name: "Scouter", 
        power: 30 
    },
    { 
        name: "Bastone Roshi", 
        power: 60 
    },
    { 
        name: "Fagioli Magici", 
        power: 70 
    },
    { 
        name: "Katana di Yajirobei", 
        power: 85 
    },
    { 
        name: "Spada del Dragone Azzurro", 
        power: 115 
    },
    { 
        name: "Armatura Saiyan", 
        power: 145 
    },
    { 
        name: "Cannone da braccio", 
        power: 170 
    },
    { 
        name: "Nuvola d'oro", 
        power: 200 
    },
    { 
        name: "Bastone Nyoi", 
        power: 220
    },
    { 
        name: "Spada Z", 
        power: 235 
    },
    { 
        name: "Orecchini Potara", 
        power: 250 
    }
];

// Assegnamo l'arma
function assignWeaponsToFighters(fighters, weapons) {
    //Copiamo l'array originale per non modificarlo direttamente. 
    const availableWeapons = [...weapons];

    return fighters.map(fighter => {
        // Ci assicuriamo ci siano ancora armi.
        if (availableWeapons.length === 0) {
            console.warn("Le armi non bastano per tutti!");
        }
        // Generiamo un index random, con Math.Random * la lunghezza dell'array delle armi.
        // Math.floor lo trasforma in intero.
        const randomIndex = Math.floor(Math.random() * availableWeapons.length);
        
        // Splice,1 rimuove a quell'indice dato un 1 elemento restituendo un nuovo array anche se c'è un solo elemento.
        // Con la distrutturazione assegno alla variabile assignedWeapon questa arma.
        const [assignedWeapon] = availableWeapons.splice(randomIndex, 1);
        
        // Essendo che map cicla ogni elemento.
        // Assegno ad ogni fighter l'arma salvata nella costante assignedWeapon.
        // Che è stata gia rimossa dall'array di armi disponibili.
        return { ...fighter, weapon: assignedWeapon };
    });
}

// Assegnamo l'arma a una costante
const fightersWithWeapons = assignWeaponsToFighters(fighters, weapons);
// Logging
fightersWithWeapons.forEach(elem => {
    console.log(`%cIl combattente %c${elem.name} %criceve l'arma %c${elem.weapon.name}`,
        "", "font-weight: bold; color: red;","","font-weight: bold; color: orange;");
    console.log(`%c${elem.name}%c ha una potenza di %c${elem.power}`, 
        "font-weight: bold; color: red;", "", "font-weight: bold; color: green;");
    console.log(`%c${elem.weapon.name}%c ha una potenza di %c${elem.weapon.power}`, 
        "font-weight: bold; color:orange;", "", "font-weight: bold; color: yellow;");
    console.log('');
});

// Allenamento
console.log('I combattenti si allenano per il torneo!');

fightersWithWeapons.forEach(elem => {
    // Genero un numero random da 1 a 100 inclusi
    const workout = Math.floor(Math.random() * 100) + 1;
    // Moltiplico la forza per questo numero
    elem.power = elem.power * workout
    //Logging 
    console.log(`%c${elem.name} %craggiunge una potenza di %c${elem.power}`,
        "font-weight: bold; color: red;", '', 'font-weight: bold; color: green;');
});

console.log('');

// Qualificazione 
const qualifiedFighters = fightersWithWeapons.filter((elem) => {
    if (elem.power <= 2000) {
        console.log(`%cIl combattente %c${elem.name} %cviene %celiminato %cla sua potenza non ha raggiunto i 2000!`,
            "", "font-weight: bold; color: red;", "", "color:red;", ""
        );
        return false; // Exclude this fighter from the qualified list
    }
    return true; // Include this fighter in the qualified list
});
console.log('');

// Combattimento
function finalFighters(arr) {
    // Controllo se l'array è dispari
    if (arr.length % 2 !== 0) {
        console.log('I combattenti sono dispari, aggiungo un combattente al torneo!');
        
        const fighterRobot = {name: 'Robot', power: 4000};
        console.log(`%c${fighterRobot.name}%c, entra a far parte del torneo!`, 
            "font-weight: bold; color: red;", ""
        );
        
        // Ritorno un nuovo array con il robot che rende pari
        return [...arr, fighterRobot]
    }

    console.log('I combattenti sono pari, si può procedere al combattimento!');
    return arr
}


const battleFighters = finalFighters(qualifiedFighters);
console.log('');

function battle(arr) {
    // Creo copia dell'array
    let fighters = [...arr]; 

    // Finché l'array è lungo almeno 1 quindi ha due elementi 0 e 1
    while (fighters.length > 1) {
        // Assegno il primo combattente
        const prev = fighters[0];
        // Assegno il secondo combattente
        const curr = fighters[1]; 
        
        // Comparo la forza se il primo che gioca in casa è maggiore o uguale al secondo vince lui e l'altro viene rimosso
        if (prev.power >= curr.power) {
            // Loggo il risultato
            console.log(`%c${prev.name} %cbatte %c${curr.name}`, 
                "font-weight: bold; color: red;","", "font-weight: bold; color: red;");
            console.log(`%cCon una potenza di %c${prev.power} %ccontro %c${curr.power}%c!`, 
                "", "font-weight:bold; color: green", "", "font-weight:bold; color: green","");
            
            fighters.splice(1, 1);
        } else {
            // Faccio l'opposto dell'if
            console.log(`%c${prev.name} %cviene battuto da %c${curr.name}`, "font-weight: bold; color: red;","", "font-weight: bold; color: red;");
            console.log(`%cLa potenza di %c${prev.power} %ccontro %c${curr.power}%c non è abbastanza!`, 
                "", "font-weight:bold; color: green", "", "font-weight:bold; color: green","");
            fighters.splice(0, 1);
        }
    }

    console.log('');
    
    // Top fighters (winner included)
    const topFighters = [...arr].sort((a, b) => b.power - a.power).slice(0, 3);

    // Log the top three fighters
    topFighters.forEach((fighter, index) => {
        const colors = ["gold", "#AAAAAA", "#AA5500"]; // Colors for first, second, third place
        console.log(
            `%c${fighter.name}, %csi posiziona al %c${index + 1}° posto %ccon una potenza di %c${fighter.power}%c!`,
            `font-weight: bold; color: ${colors[index]};`,
            "",
            `font-weight: bold; color: ${colors[index]};`,
            "",
            "font-weight: bold; color: green;",
            ""
        );
    });

    console.log('');
    const winner = fighters[0];
    console.log(`%c${winner.name} %cvince!`, "font-weight:bold; color: red", "");
    return winner
}

console.log(battle(battleFighters));


