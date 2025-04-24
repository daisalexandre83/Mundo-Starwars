const data = Array.from({length:100})
   .map((_, i) => `Item ${[i +1]} `)


// function populateList() {


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
//    totalPage:Math.ceil(data.length /perPage)
// }

let perPage = 5
const state = {
   page:1,
   perPage,
   totalPage: Math.ceil(data.length / perPage)
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

const list = {
   create(item) {},
   update() {
      console.log("entrei");
      html.get(".list").innerHTML = "";

      let page = state.page - 1;
      let start = page  * state.perPage;
      let end  = start +  state.perPage


      console.log(data.slice(0,5))
   }
}

function update() {
   console.log(state.page)
}

function init() {
   list.update()
   controls.createListeners()
}

init()

controls.createListeners()

function update() {
   console.log(state.page)
}
// console.log(state.page)
// controls.goTo(90)
// console.log(state.page)
// controls.next()
// console.log(state.page)
// controls.prev()
// console.log(state.page)

