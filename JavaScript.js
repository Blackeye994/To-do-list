let input = document.querySelector("input");
let body = document.querySelector("body");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("pointerdown",function(){
    let li = document.createElement("li");
    li.innerText = input.value;
    ul.appendChild(li);
    input.value = "";

    let createdelete = document.createElement("button");
    createdelete.innerText = "remove";
    createdelete.classList.add("remove");
    li.appendChild(createdelete);
})

ul.addEventListener("pointerdown",function(event){
    if(event.target.nodeName == "BUTTON")
        {
            let rembtn = event.target.parentElement;
            rembtn.remove();
            console.log("deleted");
        }
})

/* Dynamic background images changes */
let images = [
    './image/image1.avif',
    './image/image3.avif',
    './image/image4.webp',
    './image/image5.avif',
    './image/image6.avif' 
];

let index = 0;

function changeBackground(){
    body.style.backgroundImage = `url('${images[index]}')`;
    index = (index + 1) % images.length;
}
 // Change background every 5 seconds
setInterval(changeBackground, 3000);
// Set the initial background
body.style.backgroundImage = `url('${images[0]}')`;