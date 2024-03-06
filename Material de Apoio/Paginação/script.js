// pagination-numberconst paginationNumbers = document.getElementById("pagination-numbers");
// const paginatedList = document.getElementById("paginated-list");
// const listItems =paginatedList.querySelectorAll("li");
// const nextButton = document.getElementById("next-button");
// const prevButton = document.getElementById("prev-button");

// const nextButton = document.getElementById("next-button");
// nextButton.addEventListener("click,")
function showPage1(){
  document.querySelector('.listed-page2').style.display="none";
  document.getElementById("prev-button").style.display="block";
  document.getElementById("next-button1").style.display="block";
  document.getElementById("prev-button1").style.display="none";
  document.getElementById("next-button3").style.display="none";
  document.getElementById("page2").style.display="none";
  document.getElementById("page1").style.display="block";
  document.querySelector('.listed-page1').style.display="block";
}

function showPage2(){
  document.getElementById("prev-button").style.display="none";
  document.getElementById("next-button1").style.display="none";
  document.getElementById("prev-button1").style.display="block";
  document.querySelector(".listed-page1").style.display="none";
  document.getElementById("next-button3").style.display="block";
  document.querySelector(".listed-page2").style.display="block";
  document.getElementById("page2").style.display="block";
  document.getElementById("page1").style.display="none";
  document.getElementById("page3").style.display="none";
}

function showPage3() {
  document.getElementById("page2").style.display="none";
  document.getElementById("page3").style.display="block";
  document.querySelector(".listed-page2").style.display="none";
  document.querySelector(".listed-page3").style.display="block";
  document.getElementById("prev-button1").style.display="none";
  document.getElementById("prev-button2").style.display="block";
  document.getElementById("next-button3").style.display="none";
  document.getElementById("next-button4").style.display="block";
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