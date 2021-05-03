var navcontent = document.getElementsByClassName("nav-content");
let active = document.getElementById("slider");

for ( let i = 0; i < navcontent.length; i++) {
    navcontent[i].addEventListener("click", function(){
        document.querySelector(".active").classList.remove("active");
        this.classList.add("active");
        active.classList.add("sliding");
        setTimeout(function() {active.classList.remove("sliding")}, 100);
        scrollTo()
    });
}

function scrollTo() {
    var content = document.getElement

    for (let i = 0; i < content; i++) {
        console.log(this);
    }
}