const MarketModule = (() => {
    
    const armyArray = JSON.stringify(localStorage.getItem("army")) || [];

    const getArmy = () => {
        return structuredClone(armyArray);
    }

    const updateArmy = (newItem) => {
        armyArray.push(newItem);
        localStorage.setItem("army", JSON.stringify(armyArray));
    }

    return {
        getArmy,
        updateArmy,
    }

})();

export default MarketModule;