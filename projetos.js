const mangasPorPagina = 12;
const totalPaginas = 20;
let paginaAtual = 1;
let generoSelecionado = "";

const mangaExemplo = {
  titulo: "Título do Mangá",
  capa: "capa.jpg",
  avaliacao: "☆☆☆☆☆",
  capitulos: 10,
  genero: ["Aventura", "Shounen"]
};

function gerarListaMangas() {
  const generos = [
    "Aventura", "Comédia", "Drama", "Esporte", "Slice of Life", "Mecha", "Yuri",
    "Seinen", "Shounen", "Shoujo", "Josei", "Sobrenatural", "Psicológico",
    "Mistério", "Artes Marciais", "Yaoi", "+18"
  ];
  const lista = [];
  for (let i = 0; i < mangasPorPagina * totalPaginas; i++) {
    const generoAleatorio = [generos[i % generos.length]];
    lista.push({
      ...mangaExemplo,
      titulo: `${mangaExemplo.titulo} ${i + 1}`,
      capitulos: mangaExemplo.capitulos + i,
      genero: generoAleatorio
    });
  }
  return lista;
}

const todosMangas = gerarListaMangas();

function filtrarMangas(mangas, genero) {
  if (!genero) return mangas;
  return mangas.filter(m => m.genero.includes(genero));
}

function renderMangas(pagina) {
  const grid = document.querySelector('.grid-mangas');
  grid.innerHTML = "";

  const mangasFiltrados = filtrarMangas(todosMangas, generoSelecionado);
  const inicio = (pagina - 1) * mangasPorPagina;
  const fim = inicio + mangasPorPagina;
  const mangasPagina = mangasFiltrados.slice(inicio, fim);

  mangasPagina.forEach(manga => {
    const card = document.createElement('div');
    card.className = "manga-card";
    
    card.innerHTML = `
      <img src="${manga.capa}" alt="Capa do mangá">
      <h2>${manga.titulo}</h2>
      <div class="avaliacao">${manga.avaliacao}</div>
      <div class="capitulos">${manga.capitulos} Capítulos</div>
      <div class="genero">${manga.genero.join(", ")}</div>
    `;
    
    grid.appendChild(card);
  });
}

function renderPaginacao() {
  const container = document.querySelector('.paginacao');
  container.innerHTML = "";

  const mangasFiltrados = filtrarMangas(todosMangas, generoSelecionado);
  const paginasFiltradas = Math.ceil(mangasFiltrados.length / mangasPorPagina);

  function criarBotao(num) {
    const btn = document.createElement('button');
    btn.textContent = num;
    btn.onclick = () => {
      paginaAtual = num;
      renderMangas(paginaAtual);
      renderPaginacao();
    };
    if (paginaAtual === num) btn.classList.add('ativo');
    return btn;
  }

  const limite = Math.min(10, paginasFiltradas);
  for (let i = 1; i <= limite; i++) {
    container.appendChild(criarBotao(i));
  }

  if (paginasFiltradas > 10) {
    const pontinhos = document.createElement('button');
    pontinhos.textContent = "...";
    pontinhos.onclick = () => {
      container.innerHTML = "";
      for (let i = 11; i <= paginasFiltradas; i++) {
        container.appendChild(criarBotao(i));
      }
      const voltar = document.createElement('button');
      voltar.textContent = "«";
      voltar.onclick = renderPaginacao;
      container.insertBefore(voltar, container.firstChild);
    };
    container.appendChild(pontinhos);
  }
}

// Evento do filtro de gênero
document.getElementById("filtro-genero").addEventListener("change", (e) => {
  generoSelecionado = e.target.value;
  paginaAtual = 1;
  renderMangas(paginaAtual);
  renderPaginacao();
});

renderMangas(paginaAtual);
renderPaginacao();
