function populateList() {
   const data = Array.from({length:100})

   .map((_, i) => ` <div  class="item"> Item ${[i +1]} <div/>`)

   const list = document.querySelector('#paginate .list')
   list.innerHTML = data.join("")

   // console.log(data)

   return data
}

const data = populateList()

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
   totalPage:Math.ceil(data.length /perPage)
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
   }
}

console.log(state.page)
controls.goTo(90)
console.log(state.page)
// controls.next()
// console.log(state.page)
// controls.prev()
// console.log(state.page)

