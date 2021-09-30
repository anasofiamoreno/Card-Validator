import validator from './validator.js';

//console.log(validator);

document.getElementById("btn").addEventListener("click", validar)

let changetx1 = document.getElementById("tx1");
let changetx2 = document.getElementById("tx2");
let changetx3 = document.getElementById("tx3");
let changetx4 = document.getElementById("tx4");

changetx1.addEventListener("keyup",changetx1s);
changetx2.addEventListener("keyup",changetx2s);
changetx3.addEventListener("keyup",changetx3s);
changetx4.addEventListener("keyup",changetx4s);

function changetx1s(e){

  if(!(e.keyCode >= 48 && e.keyCode <= 57 || e.keyCode == 8)){
    changetx1.value = changetx1.value.slice(0,-1);
  }
  


  if(changetx1.value.length >= 4){
    document.getElementById("tx2").focus();
  }
  
}

function changetx2s(e){

  if(!(e.keyCode >= 48 && e.keyCode <= 57 || e.keyCode == 8)){
    changetx2.value = changetx2.value.slice(0,-1);
  }
   
  if(changetx2.value.length >= 4){
    document.getElementById("tx3").focus();
  }
  
}

function changetx3s(e){

  if(!(e.keyCode >= 48 && e.keyCode <= 57 || e.keyCode == 8 )){
    changetx3.value = changetx3.value.slice(0,-1); 
  }
   
  if(changetx3.value.length >= 4){
    document.getElementById("tx4").focus();
  }

}

function changetx4s(e){

  if(!(e.keyCode >= 48 && e.keyCode <= 57 || e.keyCode == 8 || e.keyCode == 13)){
    changetx4.value = changetx4.value.slice(0,-1);
  }

  if(e.keyCode == 13){
    validar();
  }

}


function validar(){

  let creditC = document.getElementById("tx1").value + document.getElementById("tx2").value + document.getElementById("tx3").value + document.getElementById("tx4").value;
  document.getElementById("enmascarada").innerHTML = validator.maskify(creditC);

  if(validator.isValid(creditC) == true){
    logoTarjeta(creditC);
  }
  else{
    document.getElementById("idLogo").src = "Img/novalid.png";
    alert("Tarjeta No Valida");
  }
   
}

function logoTarjeta(x){

  let logoCard = document.getElementById("idLogo");
   
  switch(validator.getIssuer(x)){
    case 0: logoCard.src = "Img/novalid.png";
      break;
    case 1: logoCard.src = "Img/jcb.png";
      break;
    case 2: logoCard.src = "Img/visa.png";
      break;
    case 3: logoCard.src = "Img/mastercard.png";
      break;  
    case 4: logoCard.src = "Img/discover.png";
      break;
    default: logoCard.src = "Img/novalid.png"
  }
   
}

document.getElementById("btn").addEventListener("click", validar)





