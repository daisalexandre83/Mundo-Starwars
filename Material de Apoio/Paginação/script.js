// pagination-numberconst paginationNumbers = document.getElementById("pagination-numbers");
// const paginatedList = document.getElementById("paginated-list");
// const listItems =paginatedList.querySelectorAll("li");
// const nextButton = document.getElementById("next-button");
// const prevButton = document.getElementById("prev-button");

// const nextButton = document.getElementById("next-button");
// nextButton.addEventListener("click,")
// function showPage1(){
//   document.querySelector('.listed-page2').style.display="none";
//   document.getElementById("prev-button").style.display="block";
//   document.getElementById("next-button1").style.display="block";
//   document.getElementById("prev-button1").style.display="none";
//   document.getElementById("next-button3").style.display="none";
//   document.getElementById("page2").style.display="none";
//   document.getElementById("page1").style.display="block";
//   document.querySelector('.listed-page1').style.display="block";
// }

// function showPage2(){
//   document.getElementById("prev-button").style.display="none";
//   document.getElementById("next-button1").style.display="none";
//   document.getElementById("prev-button1").style.display="block";
//   document.getElementById("prev-button2").style.display="none";
//   document.getElementById("next-button4").style.display="none";
//   document.querySelector(".listed-page1").style.display="none";
//   document.getElementById("next-button3").style.display="block";
//   document.querySelector(".listed-page2").style.display="block";
//   document.querySelector(".listed-page3").style.display="none";
//   document.getElementById("page2").style.display="block";
//   document.getElementById("page1").style.display="none";
//   document.getElementById("page3").style.display="none";
// }

// function showPage3() {
//   document.getElementById("page2").style.display="none";
//   document.getElementById("page3").style.display="block";
//   document.querySelector(".listed-page2").style.display="none";
//   document.querySelector(".listed-page3").style.display="block";
//   document.getElementById("prev-button1").style.display="none";
//   document.getElementById("prev-button2").style.display="block";
//   document.getElementById("next-button3").style.display="none";
//   document.getElementById("next-button4").style.display="block";
// }

const linhas = document.querySelectorAll("#tabela tr");
  const porPagina = 10;
  let paginaAtual = 1;
  const totalPaginas = Math.ceil(linhas.length / porPagina);

  function mostrarPagina(pagina) {
    // Esconde tudo
    linhas.forEach(l => l.style.display = "none");

    // Calcula início e fim
    let inicio = (pagina - 1) * porPagina;
    let fim = inicio + porPagina;

    // Mostra apenas as linhas daquela "página"
    for (let i = inicio; i < fim && i < linhas.length; i++) {
      linhas[i].style.display = "table-row";
    }
  }

  function proximo() {
    if (paginaAtual < totalPaginas) {
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
