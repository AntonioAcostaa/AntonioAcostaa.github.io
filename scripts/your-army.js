
const armyContainer = document.querySelector('#army-container');
const warriorContainer = document.querySelector('#warrior-container');
const warmachineContainer = document.querySelector('#warmachine-container');
const animalContainer = document.querySelector('#animal-container');
const resetButton = document.querySelector('#reset-button');

const getArmy = () => {
    const army = JSON.parse(localStorage.getItem('purchasedItems')) || [];
    return army;
}

const viewArmyWarriors = () => {
    let warriors = [];
    warriors = getArmy().filter((item) => item.category === 'Warrior');

    let innerHTML = "";

    if (warriors.length === 0) {
        warriorContainer.innerHTML = `
        <p>You do not have any warriors</p>
        `;
    }
    warriorContainer.innerHTML = '';
    warriors.forEach((warrior) => {
        innerHTML += `
        <article class="col-12 col-md-4 col-lg-2 align-content-center">
        <div style="display: flex; flex-direction: column; align-items: center;">
            <h5>${warrior.name}</h5>
            <img src="images/${warrior.image}" alt="${warrior.name}" class="img-fluid rounded" style="width: 110px; height: 110px; object-fit: contain;">
            </div>  
        </article>
        `;
    });
    warriorContainer.innerHTML = innerHTML;

}

const viewWarMachines = () => {
    let innerHTML = "";
    let warMachines = [];
    warMachines = getArmy().filter((item) => item.category === 'Machines');

    if (warMachines.length === 0) {
        warmachineContainer.innerHTML = `
        <p>You do not have any war machines</p>
        `;
    }

    warmachineContainer.innerHTML = '';
    warMachines.forEach((machine) => {
        innerHTML += `
        <article class="col-12 col-md-4 col-lg-2 align-content-center">
        <div style="display: flex; flex-direction: column; align-items: center;">
            <h5>${machine.name}</h5>
            <img src="images/${machine.image}" alt="${machine.name}" class="img-fluid rounded" style="width: 110px; height: 110px; object-fit: contain;">
            </div>  
        </article>
        `;
    });
    warmachineContainer.innerHTML = innerHTML;

}

const viewArmyAnimals = () => {
    let innerHTML = "";
    let animals = [];  
    animals = getArmy().filter((item) => item.category === 'Animal');

    if (animals.length === 0) {
        animalContainer.innerHTML = `
        <p>You do not have any animals</p>
        `;
    }

    animalContainer.innerHTML = '';
    animals.forEach((animal) => {
        innerHTML += `
        <article class="col-12 col-md-4 col-lg-2 align-content-center">
        <div style="display: flex; flex-direction: column; align-items: center;">
            <h5>${animal.name}</h5>
            <img src="images/${animal.image}" alt="${animal.name}" class="img-fluid rounded" style="width: 110px; height: 110px; object-fit: contain;">
            </div>  
        </article>
        `;
    });
    animalContainer.innerHTML = innerHTML;

}

const resetArmiesOfZondar = () => {
    localStorage.clear();
    animalContainer.innerHTML = '';
    warmachineContainer.innerHTML = '';
    warriorContainer.innerHTML = '';
    window.location.reload();
    alert('You have reset your game progress ("Cleared localstorage")');
}
resetButton.addEventListener('click', resetArmiesOfZondar);


(() => {
    viewArmyWarriors();
    viewWarMachines();
    viewArmyAnimals();
})();