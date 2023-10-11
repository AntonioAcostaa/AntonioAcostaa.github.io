import WarriorModule from './modules/gatherWarriors/WarriorModule.js';
import WarMachinesModule from './modules/gatherWarriors/WarmachinesModule.js';
import AnimalsModule from './modules/gatherWarriors/AnimalsModule.js';
import renderResource from './resource.js';
const marketplaceOutput = document.querySelector('#marketplace-container');
const searchInput = document.querySelector('#search-input');
const searchButton = document.querySelector('#search-button');
const resetButton = document.querySelector('#reset-button');
const feedbackContainer = document.querySelector('#feedback-container');

let marketplaceItems = [];
let purchasedItems = JSON.parse(localStorage.getItem("purchasedItems")) || [];

const purchaseItem = (itemName) => {
    const itemToPurchase = marketplaceItems.find((item) => item.name === itemName);
    const resources = JSON.parse(localStorage.getItem('resources'));

    if (itemToPurchase.category === 'Machines') {
        if (itemToPurchase.priceMetal <= resources.metal && itemToPurchase.priceWood <= resources.wood && itemToPurchase.priceGold <= resources.gold) {
            resources.metal -= itemToPurchase.priceMetal;
            resources.wood -= itemToPurchase.priceWood;
            resources.gold -= itemToPurchase.priceGold;
            purchasedItems.push(itemToPurchase);
            localStorage.setItem('resources', JSON.stringify(resources));
            localStorage.setItem('purchasedItems', JSON.stringify(purchasedItems));
            feedbackContainer.innerHTML = `<p style="color: green;">You have purchased ${itemToPurchase.name}</p>`
            setTimeout(() => {
                feedbackContainer.innerHTML = '';
            }, 5000);
            renderResource();
            return;
        } else {
            feedbackContainer.innerHTML = `<p style="color: red;">You do not have enough resources to purchase this item</p>`
            setTimeout(() => {
                feedbackContainer.innerHTML = '';
            }, 5000);
        }
    } else  {
        if (itemToPurchase.price <= resources.gold) {
            resources.gold -= itemToPurchase.price;
            purchasedItems.push(itemToPurchase);
            localStorage.setItem('resources', JSON.stringify(resources));
            localStorage.setItem('purchasedItems', JSON.stringify(purchasedItems));
            feedbackContainer.innerHTML = `<p style="color: green;">You have purchased ${itemToPurchase.name}</p>`
            setTimeout(() => {
                feedbackContainer.innerHTML = '';
            }, 5000);
            renderResource();
            return;
        } else {
            feedbackContainer.innerHTML = `<p style="color: red;">You do not have enough resources to purchase this item</p>`
            setTimeout(() => {
                feedbackContainer.innerHTML = '';
            }, 5000);
        }
    }

};

const showAllMarketplaceItems = () => {
    const warriors = WarriorModule.getAllWarriors();
    const warMachines = WarMachinesModule.getAllWarMachines();
    const animals = AnimalsModule.getAllAnimals();

    marketplaceItems = [...warriors, ...warMachines, ...animals];

    let htmlText = '';

    marketplaceItems.forEach((item) => {
        htmlText += `
        <article class="col-12 col-md-6 col-lg-4 mb-3">
        <div class='border shadow p-3 rounded h-100 d-flex flex-column align-items-center p3'>
            <img class="img-fluid rounded" style="width: 150px; height: 150px; object-fit: contain;" src="images/${item.image}" alt="${item.name}">
            <div class='d-flex align-items-center flex-column justify-content-between mb-3 align-text-center' h-100>
                <h3>${item.name}</h3>
                <h5>Category: ${item.category}</h5>
                ${
                    item.priceMetal
                        ? `<p>Price gold: ${item.priceGold} metal: ${item.priceMetal} wood: ${item.priceWood}</p>`
                        : `<p>Price gold: ${item.price}</p>`
                }
                ${
                    item.priceMetal ?
                    `<button onClick="purchaseItem('${item.name}')" class='btn btn-secondary align-items-center'><div class=" d-flex align-items-center gap-2">Purchase! <img src="images/gold-coin.png" alt="gold-coin. Icon. PNG." style="width: 14px;"/><img src="images/metal.png" alt="metal. Icon. PNG." style="width: 14px;"/> <img src="images/wood.png" alt="wood. Icon. PNG." style="width: 14px;"/></div></button>`
                    :`<button onClick="purchaseItem('${item.name}')" class='btn btn-secondary align-items-center'><div class=" d-flex align-items-center gap-2">Purchase! <img src="images/gold-coin.png" alt="gold-coin. Icon. PNG." style="width: 14px;"/></div></button>`
                }
            </div>
        </div>
    </article>
        `;
    });
    marketplaceOutput.innerHTML += htmlText;
};

const showAllMarketplaceItemsByCategory = () => {
    const warriors = WarriorModule.getAllWarriors();
    const warMachines = WarMachinesModule.getAllWarMachines();
    const animals = AnimalsModule.getAllAnimals();
    const searchValue = searchInput.value.toLowerCase();

    marketplaceItems = [...warriors, ...warMachines, ...animals];

    const marketplaceItemsByCategory = marketplaceItems.filter((item) => item.category.toLowerCase().includes(searchValue));
    let htmlText = '';

    marketplaceOutput.innerHTML = '';


    marketplaceItemsByCategory.forEach((item) => {
            htmlText += `
            <article class="col-12 col-md-6 col-lg-4 mb-3">
            <div class='border shadow p-3 rounded h-100 d-flex flex-column align-items-center p3'>
                <img class="img-fluid rounded" style="width: 150px; height: 150px; object-fit: contain;" src="images/${item.image}" alt="${item.name}">
                <div class='d-flex align-items-center flex-column justify-content-between mb-3 align-text-center' h-100>
                    <h3>${item.name}</h3>
                    <h5>Category: ${item.category}</h5>
                    ${
                        item.priceMetal
                            ? `<p>Price gold: ${item.priceGold} metal: ${item.priceMetal} wood: ${item.priceWood}</p>`
                            : `<p>Price gold: ${item.price}</p>`
                    }
                    <button onClick="purchaseItem('${item.name}')" class='btn btn-dark align-items-center'><div class=" d-flex align-items-center gap-2">Purchase! <img src="images/gold-coin.png" alt="gold-coin. Icon. PNG." style="width: 14px;"/></div></button>
                </div>
            </div>
        </article>
            `;
        });
    marketplaceOutput.innerHTML += htmlText;
};
searchButton.addEventListener('click', showAllMarketplaceItemsByCategory);

const resetSearch = () => {
    searchInput.value = '';
    showAllMarketplaceItems();
}
resetButton.addEventListener('click', resetSearch);

// Exporting the function for the onclick on the button to the globalScope.
window.purchaseItem = purchaseItem;

(() => {
    showAllMarketplaceItems();
})();
