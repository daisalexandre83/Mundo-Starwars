function setLanguage(prop) {
    if(prop == "ar")

    document.querySelector("#title").innerHTML = "لوحة التحكم";
    document
    .querySelector(".search-container input")
    .setAttribute("placeholder","أكتب شيء");
    document
    .querySelector(".control-panel")
    .setAttribute("style","direction:rtl");
}

if(prop == "en"){
    document.querySelector("#title").textContext ="Control panel";
    
}