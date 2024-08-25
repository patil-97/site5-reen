let icon = document.getElementById("searchIcon");
let input = document.getElementById("input");



let visibility = false;
const inputToggle = () => {
    if(!visibility){
        input.style.transform = "scale(1)";
        icon.style.color="red";
        icon.style.scale = "1.2";
        visibility = true;
    }else{
        input.style.transform = "scale(0)";
        icon.style.color = "blue";
        icon.style.scale = "1";
        visibility = false;
    }
}

const mouseHover = () => {
    input.style.transform = "scale(1)";
  
}

const mouseLeave = () => {
    input.style.transform = "scale(0)";
   
}




icon.addEventListener("mouseenter", mouseHover);
icon.addEventListener("mouseleave", mouseLeave);
icon.addEventListener("click", inputToggle);