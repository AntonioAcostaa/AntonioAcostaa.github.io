import ResourceModule from "./modules/resourceHandler/ResourceModule.js";
import renderResource from "./resource.js";
const mineImage = document.querySelector("#mines-of-thiartha");
const woodsImage = document.querySelector("#woods-of-ghalduz");

const mineMetal = () => {
    // Generate a random number between 1 and 50.
    const random = Math.random();
    const randomResource = Math.floor(Math.random() * 50) + 1;

    // If the random number is less than 0.25, add gold to the resources
    if (random < 0.25) {
        const resources = ResourceModule.getResources();
        const newResources = {
            gold: resources.gold + randomResource,
            metal: resources.metal,
            wood: resources.wood,
        };
        ResourceModule.updateResources(newResources);
    } else {
        // Otherwise, add metal to the resources
        const resources = ResourceModule.getResources();
        const newResources = {
            gold: resources.gold,
            metal: resources.metal + randomResource,
            wood: resources.wood,
        };
        ResourceModule.updateResources(newResources);
        renderResource();
    }
};

const chopWood = () => {
    // Generate a random number between 1 and 10
    const random = Math.floor(Math.random() * 10) + 1;

    // Add the random amount of wood to the resources
    const resources = ResourceModule.getResources();
    const newResources = {
        gold: resources.gold,
        metal: resources.metal,
        wood: resources.wood + random,
    };
    ResourceModule.updateResources(newResources);
    renderResource();
};


const setEvents = () => {
    mineImage.addEventListener('click', mineMetal);
    woodsImage.addEventListener('click', chopWood);
}

(()=>{
    setEvents();
})();