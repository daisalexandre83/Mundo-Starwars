function setLanguage(prop) {
    if(prop == "ar")

    document.querySelector("#title").innerHTML = "لوحة التحكم";
    document
    .querySelector(".search-container input")
    .setAttribute("placeholder","أكتب شيء");
    document
    .querySelector(".control-panel")
    .setAttribute("style","direction:rtl");

    if(prop == "en"){
        document.querySelector("#title").textContext ="Control panel";
        document.querySelector("#title").textContent="Control panel";
        document
        .querySelector(".search-container input")
        .setAttribute("placeholder",'Type something');
        document
        .querySelector(".control-panel")
        .setAttribute("style", "direction:ltr");
    
    }
}

function toggleDark() {
    document.querySelector(".control-panel").classList.toggle("dark");
    if (document.querySelector(".control-panel").classList.contains("dark")) {
        document.querySelector("#dark-icon").innerHTML="light_mode";
    }else{
        document.querySelector("#dark-icon").innerHTML="dark_mode";
    }
}

