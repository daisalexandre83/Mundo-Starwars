function populateList() {
   const data = Array.from({length:100})

   .map((_, i) => ` <div  class="item"> Item ${[i +1]} <div/>`)

   const list = document.querySelector('#paginate .list')
   list.innerHTML = data.join("")

   // console.log(data)
}

populateList()