let menu = document.getElementById("menu-btn")
let exit = document.getElementById("exit-btn")
let nav = document.getElementById("nav")



menu.addEventListener("click", ()=>{
  nav.classList.add("open-nav")
})

exit.addEventListener("click", ()=>{
    nav.classList.remove("open-nav")
})