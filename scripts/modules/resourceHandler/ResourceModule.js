const ResourceModule = (()=> {

    const resources = JSON.parse(localStorage.getItem("resources")) || { gold: 0, metal: 0, wood: 0 };

    const getResources = () => {
        return structuredClone(resources);
    }

    const updateResources = (newResources) => {
        resources.gold = newResources.gold;
        resources.metal = newResources.metal;
        resources.wood = newResources.wood;
        
        localStorage.setItem("resources", JSON.stringify(resources));;
    }

    return {
        getResources,
        updateResources,
    }


})();

export default ResourceModule;