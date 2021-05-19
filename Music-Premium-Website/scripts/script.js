const btnCredits = document.getElementById("creditsbtn")
const btnCreditsClose = document.getElementById("overlay-close")


btnCredits.addEventListener("click", () =>{
     document.getElementById("overlay").style.display = "block";
})

btnCreditsClose.addEventListener("click", () =>{
    document.getElementById("overlay").style.display = "none";
})