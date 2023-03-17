let Buttons = document.querySelectorAll(".selectSection button");

for (let button of Buttons) {
    button.addEventListener('click',(e) =>{
        const et = e.target;
        const active = document.querySelector(".active");
        if (active) {
            active.classList.remove("active");
        }
        et.classList.add("active");
        let allContent = document.querySelectorAll('.content');
        
        for (let content of allContent) {
           if (content.getAttribute('data-number') === button.getAttribute('data-number')) {
            content.style.display = "block";
           }
           else{
            content.style.display = 'none';
           }
        }
    });
}