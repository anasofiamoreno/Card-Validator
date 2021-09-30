var validator = {

  isValid: (creditCardNumber) => {
 
    let creditCV = ["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"];
    let operation =0;
    let count = 0;

    for (var i =creditCardNumber.length-2; i>=0; i-=2){

      operation = creditCardNumber[i];
      operation = operation * 2;

      if(operation > 9){
        operation = Math.trunc(operation / 10) + (operation % 10);
      }
     
      creditCV[i]=operation;
    }

    for (i = creditCardNumber.length-1; i>=0; i-=2){ //16
      creditCV[i] = creditCardNumber[i];  
    }

    for (i = 0; i<creditCardNumber.length; i++){
      count = count + parseInt(creditCV[i]);
    }

    if(count%10 == 0){
      return true;
    }
    else{
      return false;
    }
  },

 

  maskify: (creditCardNumber) => {

    let enmask = "";
   
    if(creditCardNumber.length>3){

      for(var i=0;i<creditCardNumber.length-4;i++){
        enmask = enmask + "#";
      }

      enmask = enmask + creditCardNumber.substring(creditCardNumber.length-4,creditCardNumber.length)

      return enmask; 
    }    
    else{
      return creditCardNumber;
    }

  },

  getIssuer: (creditCardNumber) =>{
   
    switch(creditCardNumber[0]){

      case "3":
        return 1; 
      case "4": 
        return 2;      
      case "5": 
        return 3; 
      case "6": 
        return 4; 
      default: 
        return 0; 
    }

  }

}

export default validator;