
const resourceContainer = document.querySelector('#resource-container');

const renderResource = () => {
    const resources = JSON.parse(localStorage.getItem("resources")) || { gold: 0, metal: 0, wood: 0 };
    const innerHTML = `
    <span class="resourceIconsInnerContainer">
        <img src="images/gold-coin.png" alt="Icon for gold. Image -PNG." class="resourceIcon">
        <span id="gold-amount">${resources.gold}</span>
    </span>
    <span class="resourceIconsInnerContainer">
        <img src="images/metal.png" alt="Icon for metal. Image -PNG." class="resourceIcon">
        <span id="metal-amount">${resources.metal}</span>
    </span>
    <span class="resourceIconsInnerContainer">
        <img src="images/wood.png" alt="Icon for wood. Image -PNG." class="resourceIcon">
        <span id="wood-amount">${resources.wood}</span>
    </span>
    `;

    resourceContainer.innerHTML = innerHTML;
};

window.addEventListener('storage', () => {
    renderResource();
});

(() => {
    renderResource();
})();

export default renderResource;