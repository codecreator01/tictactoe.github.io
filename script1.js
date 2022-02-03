// my variables
let z = 1;
let idbox = [];
for(let i = 0;i<9;i++){
    var b = "box" + z;
    idbox[i] = document.getElementById(b);
    z++;
}
let putX = true;
function game(a){
if(a.innerHTML == "X" || a.innerHTML == "O"){
    alert("please choose another option");
}
 else if(putX == true){
    
     a.innerHTML = "O";
     putX = false;
 }
 else{
     a.innerHTML = "X";
     putX = true;
 }
check();
}
function check(){


 
    
    if(idbox[0].innerHTML == "X" && idbox[1].innerHTML == "X" && idbox[2].innerHTML == "X"){
        alert("X win the match!");
        reset();
    }
    else if(idbox[0].innerHTML == "O" && idbox[1].innerHTML == "O" && idbox[2].innerHTML == "O"){
        alert("O win the match!");
        reset();
    }
    else if(idbox[3].innerHTML == "X" && idbox[4].innerHTML == "X" && idbox[5].innerHTML == "X"){
        alert("X win the match!");
        reset();
    }
    else if(idbox[3].innerHTML == "O" && idbox[4].innerHTML == "O" && idbox[5].innerHTML == "O"){
        alert("O win the match!");
        reset();
    }
    else if(idbox[6].innerHTML == "X" && idbox[7].innerHTML == "X" && idbox[8].innerHTML == "X"){
        alert("X win the match!");
        reset();
    }
    else if(idbox[6].innerHTML == "O" && idbox[7].innerHTML == "O" && idbox[8].innerHTML == "O"){
        alert("O win the match!");
        reset();
    }


   else if(idbox[0].innerHTML == "X" && idbox[3].innerHTML == "X" && idbox[6].innerHTML == "X"){
        alert("X win the match!");
        reset();
    }
    else if(idbox[0].innerHTML == "O" && idbox[3].innerHTML == "O" && idbox[6].innerHTML == "O"){
        alert("O win the match!");
        reset();
    }
    else if(idbox[1].innerHTML == "X" && idbox[4].innerHTML == "X" && idbox[7].innerHTML == "X"){
        alert("X win the match!");
        reset();
    }
    else if(idbox[1].innerHTML == "O" && idbox[4].innerHTML == "O" && idbox[7].innerHTML == "O"){
        alert("O win the match!");
        reset();
    }
    else if(idbox[2].innerHTML == "X" && idbox[5].innerHTML == "X" && idbox[8].innerHTML == "X"){
        alert("X win the match!");
        reset();
    }
    else if(idbox[2].innerHTML == "O" && idbox[5].innerHTML == "O" && idbox[8].innerHTML == "O"){
        alert("O win the match!");
        reset();
    }


    else if(idbox[0].innerHTML == "X" && idbox[4].innerHTML == "X" && idbox[8].innerHTML == "X"){
        alert("X win the match!");
        reset();
    }
    else if(idbox[0].innerHTML == "O" && idbox[4].innerHTML == "O" && idbox[8].innerHTML == "O"){
        alert("O win the match!");
        reset();
    }

    else if(idbox[2].innerHTML == "X" && idbox[4].innerHTML == "X" && idbox[6].innerHTML == "X"){
        alert("X win the match!");
        reset();
    }
    else if(idbox[2].innerHTML == "O" && idbox[4].innerHTML == "O" && idbox[6].innerHTML == "O"){
        alert("O win the match!");
        reset();
    }

    else{}
}


function reset(){
    var z = 1
    for(let i = 0;i<9;i++){
        var b = "box" + z;
  let a = document.getElementById(b);
  a.innerHTML = "";
  z++;

    }
}

