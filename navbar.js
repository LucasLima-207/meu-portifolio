const navHamburguer = document.querySelector(".btn-menu");
const links = document.querySelector(".nav-slider");

navHamburguer.addEventListener("click", function(){
    links.classList.toggle("mostra-links");
})

const moreFormy = document.querySelector(".more-my");
const skills = document.querySelector(".my-skills");

moreFormy.addEventListener("click", function(){
    skills.classList.toggle("mostra");
});