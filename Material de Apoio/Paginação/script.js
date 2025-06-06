const data = Array.from({length:100})
   // .map((_, i) => `Item ${[i +1]} `)
   .map((_, i) => `Item ${(i +1)} `)

// function populateList() {
//   const data = Array.from({length:100})
//   .map((_,i) =>`<div class="item">Item ${(i + 1)}</div>`)

//    const list = document.querySelector('#paginate .list')
//    list.innerHTML = data.join("")

//    // console.log(data)

//    return data
// }

//  const data = populateList()
//**********************

//Exemplo
// let perPage = 3
// const state = {
//    page:1,
//    perPage,
//    totalPage:data.length / perPage
// }

let perPage = 5;
const state = {
   page:1,
   perPage,
   totalPage: Math.ceil(data.length / perPage),
   maxVisibleButtons:5
}

const html = {
   get(element){
    return document.querySelector(element)
   }
}

console.log(state.totalPage)

const controls = {
   next() {
      state.page++;

      const lastPage = state.page > state.totalPage
      if (lastPage) {
         state.page--;
      }
   },
   prev() {
      state.page--

      if (state.page < 1) {
         state.page++
      }
   },
   goTo(page) {
      if (page < 1) {
         page = 1
      }
      
      state.page = page

      if (page > state.totalPage) {
         state.page = state.totalPage
      }
   },
   createListeners(){
      html.get('.first').addEventListener('click',() =>{
         controls.goTo(1)
         update()
      })

      html.get('.last').addEventListener('click',() =>{
         controls.goTo(state.totalPage)
         update()
      })

      html.get('.next').addEventListener('click',() =>{
         controls.next()
         update()
      })

      html.get('.prev').addEventListener('click',() =>{
         controls.prev()
         update()
      })
   }
}

// const list = document.querySelector('#paginate .list');
// list.innerHTML = data.join("");

const list = {
   create(item) {
      const div = document.createElement('div')
      div.classList.add('item')
      div.innerHTML = item

      html.get('.list').appendChild(div)
   },
   update() {
      html.get(".list").innerHTML = "";

      let page = state.page - 1;
      let start = page  * state.perPage;
      let end  = start + state.perPage;

      const paginatedItems = data.slice(start,end)

      paginatedItems.forEach(list.create)
   }
}

const buttons = {
   element: html.get('.pagination .numbers'),
   create(number) {
      const button = document.createElement('div')

      button.innerHTML = number;

      if (state.page == number) {
         button.classList.add('active')
      }

      button.addEventListener('click', (event) => {
         const page = event.target.innerText
         
         controls.goTo(page)
         update()
      })

      buttons.element.appendChild(button)

   },
   update() {
      //html.get('.pagination .numbers').innerHTML="";
      buttons.element.innerHTML = "";
      const {maxLeft,maxRight} = buttons.calculateMaxVisible()

      // console.log(maxLeft,maxRight)
      for (let page = maxLeft; page <= maxRight; page ++) {
         console.log('button')
         buttons.create(page)
      }
   },
   calculateMaxVisible(){
      const {maxVisibleButtons} = state
      let maxLeft = (state.page - Math.floor(maxVisibleButtons/2))
      let maxRight = (state.page + Math.floor(maxVisibleButtons/2))

      if (maxLeft < 1) {
         maxLeft = 1
         maxRight = maxVisibleButtons
      }

      if (maxRight > state.totalPage) {
         maxLeft = state.totalPage - (maxVisibleButtons -1)
         maxRight = state.totalPage

         if (maxLeft < 1) maxLeft =1
      }

      return (maxLeft,maxRight)
   }
}

function update() {
   list.update()
   buttons.update
}

function init() {
  update() 
  controls.createListeners()
}

init()

controls.createListeners()

// function update() {
//    console.log(state.page)
// }
// console.log(state.page)
// controls.goTo(90)
// console.log(state.page)
// controls.next()
// console.log(state.page)
// controls.prev()
// console.log(state.page)

