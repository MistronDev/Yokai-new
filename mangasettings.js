// Função para mostrar/ocultar barra de pesquisa
function toggleSearch(event) {
    event.stopPropagation(); // Impede o clique no body de fechar a barra de pesquisa
    const searchBar = document.getElementById('search-bar');
    if (searchBar.style.display === "none" || searchBar.style.display === "") {
        searchBar.style.display = "block";
        searchBar.style.transform = "translateX(0)";
    } else {
        searchBar.style.transform = "translateX(-100%)";
        setTimeout(() => searchBar.style.display = "none", 300); // Atraso para transição
    }
}

// Função para mostrar/ocultar menu lateral
function toggleMenu(event) {
    event.stopPropagation(); // Impede o clique no body de fechar o menu lateral
    const sideMenu = document.getElementById('side-menu');
    if (sideMenu.style.left === "-250px" || sideMenu.style.left === "") {
        sideMenu.style.left = "0";
    } else {
        sideMenu.style.left = "-250px";
    }
}

// Função para fechar o menu lateral ao clicar fora
function closeMenu(event) {
    const sideMenu = document.getElementById('side-menu');
    if (!sideMenu.contains(event.target) && sideMenu.style.left === "0px") {
        sideMenu.style.left = "-250px";
    }
}

// Função de pesquisa (simulada)
function searchManga() {
    const query = document.getElementById('search-input').value;
    console.log('Pesquisando:', query);
}
