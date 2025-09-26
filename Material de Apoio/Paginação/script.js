const linhas = document.querySelectorAll("#tabela tr");
const porPagina = 10;
let paginaAtual = 1;

const totalPaginas = Math.ceil(linhas.length/porPagina);

function mostrarPagina(pagina) {
   linhas.forEach(l => l.style.display = "none");

   let inicio = (pagina -1) * porPagina;
   let fim = inicio + porPagina;

    for( let i = inicio; i < fim && i < linhas.length; i++){
        linhas[i].style.display ="table-row";
    }
    document.getElementById("page-info").innerText=
    ` ${paginaAtual} `; 
  }

  function showNumberPage() {
    forEach
  }

  function proximo() {
    if(paginaAtual < totalPaginas){
      paginaAtual++;
      mostrarPagina(paginaAtual);
    }
  }

  function anterior() {
    if (paginaAtual > 1) {
        paginaAtual--;
        mostrarPagina(paginaAtual);
    }
  }

  mostrarPagina(paginaAtual);


