const AnimalsModule = (() => {

    const animalsArray = [
        {
            category: 'Animal',
            name: 'Dumbo the elephant',
            image: 'elephant.png',
            price: 800,
        },
        {
            category: 'Animal',
            name: 'Lightning the horse',
            image: 'horse.png',
            price: 900,
        }
    ];

    const getAllAnimals = () => {
        return structuredClone(animalsArray);
    }

    return {
        getAllAnimals,
    }

})();

export default AnimalsModule;