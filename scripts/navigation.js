const pageHeader = document.querySelector('#page-header');


const navigation = () => {

    const innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand" href="#">ArmiesOfZondar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="/gathering-army.html">Marketplace</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/getting-resources.html">Gather resources</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/your-army.html">View your army</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/army-kpi.html">Army statistics</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    `;
    pageHeader.innerHTML = innerHTML;
}

(() => {
    navigation();
})();