const WarriorModule = (() => {

    const warriorArray = [
        {
            category: 'Warrior',
            name: 'Warrior Woman',
            image: 'warrior-1.jpg',
            price: 100,
        },
        {
            category: 'Warrior',
            name: 'Beast the giant',
            image: 'warrior-2.jpg',
            price: 500,
        },
        {
            category: 'Warrior',
            name: 'Warrior with big axe',
            image: 'warrior-3.jpg',
            price: 300,
        },
        {
            category: 'Warrior',
            name: 'Sneaky theif',
            image: 'warrior-4.jpg',
            price: 400,
        },
        {
            category: 'Warrior',
            name: 'George the tank',
            image: 'warrior-5.jpg',
            price: 500,
        },
        {
            category: 'Warrior',
            name: 'Andrei the Berserker',
            image: 'warrior-6.jpg',
            price: 600,
        }
    ];

    const getAllWarriors = () => {
        return structuredClone(warriorArray);
    }

    return {
        getAllWarriors,
    }

})();

export default WarriorModule;