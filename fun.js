//images
var images = [];
images[1] = "components/paper.png";
images[2] = "components/scissor.png";
images[3] = "components/rock.png";

//random number
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}
var popup = document.getElementById('popup');
//results
function results(text){
    var txt = document.getElementById("text");
    txt.innerHTML = text;
    popup.style.display="block";
}
//close
function cls(){
    popup.style.display="none";
}

//cases
function Decesion(c, u) {
    if(c==u){
        results("draw");
    }
    else if(c==1 && u==2){
        results("win");
    }
    else if(c==1 && u==3){
        results("lose");
    }
    else if(c==2 && u==1){
        results("lose");
    }
    else if(c==2 && u==3){
        results("win");
    }
    else if(c==3 && u==1){
        results("win");
    }
    else if(c==3 && u==2){
        results("lose");
    }
    
}

//computer screen
function computer() {
    var comp = document.getElementById('comp');
    var im = document.createElement('img');
    var num = randomIntFromInterval(1, 3);

    //check weather comp alredy have an element
    if(comp.childNodes.length>1){
        //delete previous image
        comp.removeChild(comp.firstElementChild);
    }

    im.src=images[num];
    comp.appendChild(im);
    return num;
}

//user screen
function user(option){
    var com = computer();
    // console.log(com);
    var usr = document.getElementById('usr')
    var im = document.createElement('img');

    //check weather comp alredy have an element
    if(usr.childNodes.length>1){
        //delete previous image
        usr.removeChild(usr.firstElementChild);
    }

    im.src=images[option];
    usr.appendChild(im);
    Decesion(com, option);
}