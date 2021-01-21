//menu
var items = document.querySelectorAll(".item");
var port  = document.querySelectorAll(".port_item");
var line1 = document.querySelectorAll(".line1");
var line2 = document.querySelectorAll(".line2");
function changeColor(list,color1,color2,line) {
    list.forEach(ele => {
        ele.addEventListener('click', () => {
            for( var j = 0; j< list.length ; j++) {
                list[j].style.color = color1;
                line[j].style.width = "0%";
                if(line[j].id === ele.getAttribute('name')){
                    line[j].style.width = "calc(100% + 10px)";
                }

            }
            ele.style.color = color2 ;
        })
    })
}
changeColor(port,"black","green",line2);
changeColor(items,"black","green",line1);
//home

var aniText = document.querySelectorAll('.animation_text');
var i = 0;
setInterval(function() {
    for(var j = 0; j < aniText.length; j++){
        aniText[j].style.display = "none";
    }
    aniText[i].style.display = "inline-block";
    i++;
    if(i === 3){
        i = 0;
    }
},1000)

//navbar 
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("Navbar");
var sticky = 0;

function myFunction() {
if (window.pageYOffset > sticky) {
navbar.classList.add("sticky")
} else {
navbar.classList.remove("sticky");
}
}
// counterUP
var counters = document.querySelectorAll(".num");
counters.forEach(myFunctions);
function myFunctions(item){
var updateCount = () =>{

    var number = +item.getAttribute('data-target');
    var count = +item.innerText;
    if(count < number){
        item.innerText = count + 1 ;
        setTimeout(updateCount,1);
    }
    else {
        count.innerText = number;
    }
}
updateCount ();
}
// lọc ảnh 
var port_item = document.querySelectorAll(".port_item");
        var imgs = document.querySelectorAll(".img");
        console.log(imgs)
        port_item.forEach(event  => {
            event.addEventListener("click", () =>{
                for ( var j =0 ; j < imgs.length; j++) {
                    imgs[j].style.display = "none"
                    imgs[j].classList.remove("zoom1");
                    imgs[j].classList.remove("zoom2");
                    if(event.getAttribute('name') === imgs[j].getAttribute('data-target')) {
                        imgs[j].style.display = "block";
                        imgs[j].classList.add("zoom1");
                        if(imgs[j].id === "web_grid") {
                            imgs[j].classList.add("grid_item3")
                        }

                    }
                    if(event.getAttribute('name') === "all"){
                        imgs[j].style.display = "block";
                        imgs[j].classList.add("zoom2");
                    }

                }
            })
        })


