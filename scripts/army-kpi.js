import WarriorModule from './modules/armyHandlers/WarriorModule.js';
import WarMachinesModule from './modules/armyHandlers/WarMachinesModule.js';
import AnimalsModule from './modules/armyHandlers/AnimalsModule.js';

const statisticsContainer = document.querySelector('#statistics-container');

const getArmyStats = () => {
    let htmlText = "";

    const totalArmy = JSON.parse(localStorage.getItem('purchasedItems')) || [];

    const totalWarriors = totalArmy.filter((item) => item.category === 'Warrior');
    const totalWarMachines = totalArmy.filter((item) => item.category === 'Machines');
    const totalAnimals = totalArmy.filter((item) => item.category === 'Animal');

    let woodCost = 0;
    let metalCost = 0;
    let goldCost = 0;

    totalArmy.forEach((item) => {
        if (item.category === 'Machines') {
            woodCost += item.priceWood;
            metalCost += item.priceMetal;
            goldCost += item.priceGold;
        } else {
            goldCost += item.price;
        }
    });
    if (totalArmy.length === 0) {
        htmlText = `
            <p>You have no army yet</p>
        `;
        statisticsContainer.innerHTML = htmlText;
    } else {
        htmlText = `
            <h3>Army statistics</h3>
            <hr>
            <p>Total army warriors: ${totalWarriors.length}</p>
            <p>Total war machines: ${totalWarMachines.length}</p>
            <p>Total animals: ${totalAnimals.length}</p>
            <p>Total army size: ${totalArmy.length}</p>
            <p>Total cost of your army: Gold: ${goldCost} Metal: ${metalCost} Wood: ${woodCost}</p>
        `;

        statisticsContainer.innerHTML = htmlText;
    }
}



(() => {
    getArmyStats();
})();






