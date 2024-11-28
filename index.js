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

fightersWithWeapons.forEach(elem => {
    console.log(`%cIl fighter%c ${elem.name}`, "", "font-weight: bold; color: red;");
    console.log(`%cHa ricevuto l'arma%c ${elem.weapon.name}`, "", "font-weight: bold; color: orange;");
    console.log(`%c${elem.name}%c ha una potenza di %c${elem.power}`, "font-weight: bold; color: red;", "", "font-weight: bold; color: green;");
    console.log(`%c${elem.weapon.name}%c ha una potenza di %c${elem.weapon.power}`, "font-weight: bold; color:orange;", "", "font-weight: bold; color: purple;");
    console.log('');
});