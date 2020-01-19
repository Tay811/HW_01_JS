

let maine = document.getElementById("first");
let block1 = document.getElementById("container1");
let block2 = document.getElementById("container2");
let block3 = document.getElementById("container3");

function changeStyle(){
    maine.style.backgroundImage = "url('../img/1.jpg')";
    block1.style.backgroundColor = ("rgba(62, 129, 71, 0.514)");
    block2.style.backgroundColor = ("rgba(62, 129, 71, 0.514)");
    block3.style.backgroundColor = ("rgba(62, 129, 71, 0.514)");
    block1.style.borderRadius = "90px";
    block2.style.borderRadius = "90px";
    block3.style.borderRadius = "90px";
}


let flexPage = document.getElementById("page");

function newFlexBlock(){
    // maine.style.display = "none";
    // flexPage.style.display = "flex";
    if(maine.style.display == "flex"){
 		maine.style.display = "none";
 		flexPage.style.display = "flex";
    }
}

newFlexBlock()







