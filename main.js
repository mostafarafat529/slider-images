
// first video 

// get slider items | array.from(Es6 feature)
let sliderimages = Array.from(document.querySelectorAll(".slider-container img"));
let countimages = sliderimages.length ;
let current = 1 ;
let slidenumber = document.querySelector(".slide-number") ;
let prevbutton = document.querySelector("#previous")
let nextbutton = document.querySelector("#next")

// second video 
// create ul li  ........ 

let paginationelement =document.createElement("ul") ;
paginationelement.setAttribute("id" , "pagination") ;
// to get the numbers of li ..
for(let i = 1 ; i<= countimages ; i++){
    let paginationitem = document.createElement("li") ;
    paginationitem.setAttribute("data-index" , i);
    let textpagination = document.createTextNode(i) ;
    paginationitem.appendChild(textpagination);
    paginationelement.appendChild(paginationitem) ;
}
document.getElementById("indicators").appendChild(paginationelement)
let paginationcreateul = document.getElementById("pagination");
let bullets = Array.from(document.querySelectorAll("#pagination li")) ;
for(let i = 0 ; i< bullets.length ; i++){
    bullets[i].onclick =function(){
        current = parseInt(this.getAttribute("data-index"))
checker()
    }
}
// third video ...........
checker()
function checker()
{
    slidenumber.textContent = "slide #"+ current + " of " + countimages;
    removeall()
    sliderimages[current - 1].classList.add("active") ;
    paginationcreateul.children[current - 1].classList.add("active")   
    if(current == 1){
        prevbutton.classList.add("disapled")
}else{
    prevbutton.classList.remove("disapled")
}
if(current == countimages){
    nextbutton.classList.add("disapled")
}else{
    nextbutton.classList.remove("disapled")
}
}
function removeall(){
    sliderimages.forEach(function(img){
        img.classList.remove("active") ;
    });
    bullets.forEach(function(bullet){
        bullet.classList.remove("active")
    })
}
    function nextslide(){
        if(nextbutton.classList.contains("disapled")){
            return false ;
        }else{
            current++;
            checker()
        }
    }
    function prevslide(){
        if(prevbutton.classList.contains("disapled")){
            return false ;
        }else{
            current--;
            checker()
        }
    }