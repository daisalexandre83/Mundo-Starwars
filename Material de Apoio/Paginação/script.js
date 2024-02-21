// pagination-numberconst paginationNumbers = document.getElementById("pagination-numbers");
const paginatedList = document.getElementById("paginated-list");
const listItems =paginatedList.querySelectorAll("li");
// const nextButton = document.getElementById("next-button");
// const prevButton = document.getElementById("prev-button");

// const nextButton = document.getElementById("next-button");
// nextButton.addEventListener("click,")
function showPage2(){
  document.querySelectorAll(".itens-page1").style.display="none";
  document.querySelectorAll(".itens-page2").style.display="block";
  console.log('olá');
  // let ul = document.getElementById("paginated-listed");
  //  let listItems = document.getElementsByTagName('li');

  //  let arrayItems = Array.from(listItems);

  //  let page1 = arrayItems.slice(0,9);
   // for ( itens1 = 0; itens1 <=9; itens1 ++)

}

// const paginationLimit = 10;
// const pageCount = Math.ceil(listItems.length / paginationLimit);
// let currentPage = 1;

// const disableButton = (button) =>{
//     button.classList.add("disabled");
//     button.setAttribute("disabled",true);
// };

// const enableButton = (button) =>{
//     button.classList.remove("disabled");
//     button.removeAttribute("disabled");
// };

// const handlePageButtonsStatus = () =>{
//     if(currentPage === 1){
//         disableButton(prevButton);
//     }else{
//         enableButton(prevButton);
//     }

//     if(pageCount === currentPage){
//         disableButton(nextButton);
//     }else{
//         enableButton(nextButton);
//     }
// };

// const handleActivePageNumber = () =>{
//     document.querySelectorAll(".pagination-number").forEach((button)=>{
//         button.classList.remove("active");
//         const pageIndex = Number(button.getAttribute("page-index"));
//         if (pageIndex == currentPage) {
//             button.classList.add("active");
//         }
//     });
// };

// const appendPageNumber = (index) =>{
//     const pageNumber = document.createElement("button");
//     pageNumber.className = "pagination-number";
//     pageNumber.innerHTML = index;
//     pageNumber.setAttribute("page-index",index);
//     pageNumber.setAttribute("arial-label","Page" + index);
//     paginationNumbers.appendChild(pageNumber);
// };

// const getPaginationNumbers = () =>{
//     for (let i = 1; i <= pageCount; i++) {
//         appendPageNumber(i);
//     }
// };

// const setCurrentPage = (pageNum) =>{
//     currentPage = pageNum;

//     handleActivePageNumber();
//     handlePageButtonsStatus();

//     const prevRange = (pageNum - 1) * paginationLimit;
//     const currRange = pageNum * paginationLimit;

//     listItems.forEach((item,index) =>{
//         item.classList.add("hidden");
//         if (index >= prevRange && index < currRange) {
//             item.classList.remove("hidden");
//         }
//     });
// };

// window.addEventListener("load",() =>{
//     getPaginationNumbers();
//     setCurrentPage(1);

//     prevButton.addEventListener("click", () =>{
//         setCurrentPage(currentPage -1);
//     });

//     nextButton.addEventListener("click", () =>{
//         setCurrentPage(currentPage + 1);
//     });

//     document.querySelectorAll(".pagination-number").forEach((button) =>{
//         const pageIndex = Number(button.getAttribute("page-index"));

//         if (pageIndex) {
//             button.addEventListener("click",() =>{
//                 setCurrentPage(pageIndex);
//             });
//         }
//     })
// })