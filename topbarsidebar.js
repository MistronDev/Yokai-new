document.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.querySelector('.search-btn');
    const menuBtn = document.querySelector('.menu-btn');
    const searchBar = document.getElementById('search-bar');
    const sideMenu = document.getElementById('side-menu');

    searchBtn.addEventListener('click', toggleSearch);
    menuBtn.addEventListener('click', toggleMenu);
    document.body.addEventListener('click', closeMenu);

    function toggleSearch(event) {
        event.stopPropagation();
        if (searchBar.style.opacity === "0" || searchBar.style.opacity === "") {
            searchBar.style.display = "block";
            setTimeout(() => {
                searchBar.style.opacity = "1";
            }, 10);
        } else {
            searchBar.style.opacity = "0";
            setTimeout(() => {
                searchBar.style.display = "none";
            }, 300);
        }
    }

    function toggleMenu(event) {
        event.stopPropagation();
        if (sideMenu.style.left === "-250px" || sideMenu.style.left === "") {
            sideMenu.style.left = "0";
        } else {
            sideMenu.style.left = "-250px";
        }
    }

    function closeMenu(event) {
        if (!sideMenu.contains(event.target) &&
            !menuBtn.contains(event.target) &&
            sideMenu.style.left === "0px") {
            sideMenu.style.left = "-250px";
        }
    }
});

// Função de pesquisa simulada
function searchManga() {
    const query = document.getElementById('search-input').value;
    console.log('Pesquisando:', query);
}
