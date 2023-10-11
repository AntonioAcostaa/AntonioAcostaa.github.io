const WarMachinesModule = (() => {

    const machinesArray = [
        {
            category: 'Machines',
            name: 'Thomas the canon',
            image: 'cannon.png',
            priceGold: 1500,
            priceMetal: 300,
            priceWood: 50,
        },
        {
            category: 'Machines',
            name: 'Catapult',
            image: 'catapult.png',
            priceGold: 1000,
            priceMetal: 200,
            priceWood: 300,
        }
    ];

    const getAllWarMachines = () => {
        return structuredClone(machinesArray);
    }

    return {
        getAllWarMachines,
    }

})();

export default WarMachinesModule;