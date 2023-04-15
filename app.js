window.onload=function(){
const opcoes= document.querySelector("#opcao");
var btn = document.querySelector("#btn");
var varentrada = document.querySelector("#number1");
var resultado = document.querySelector("#totalValue");
var decimal=0;
var binarioArray;
var binarioResult;
var result;
var hexadecimalResult;
var octalResult;
opcoes.addEventListener('input',function(e){ 
			
    if(opcoes.value=='1'  || opcoes.value=='2' ||  opcoes.value=='3' ){
        document.querySelector("#number1").placeholder="Insira o valor em Hexadecimal";
        varentrada.type="text";

    }else  if(opcoes.value=='4'  || opcoes.value=='5' ||  opcoes.value=='6'){
        document.querySelector("#number1").placeholder="Insira o valor em Binario";
        varentrada.type="number"

    }else  if(opcoes.value=='7'  || opcoes.value=='8' ||  opcoes.value=='9'){
        document.querySelector("#number1").placeholder="Insira o valor em Decimal";
        varentrada.type="number"
    }else{
        varentrada.type="text";
    }

});



    btn.addEventListener("click", function(event){
        switch (opcoes.value){
            case'1':
                // Hexadecimal para Binario

                if(varentrada.value!=hexadecimalResult){
                    hexadecimalResult = varentrada.value;
                    decimal = parseInt(hexadecimalResult, 16);
                    // A função usa o método toString() com o argumento 2 para converter result para uma string em base 2 (binário). Em seguida, o resultado é retornado como uma string binária.
                    binarioResult= decimal.toString(2);
            
                    resultado.value=hexadecimalResult+"(Hexadecimal) = "+binarioResult+"(Binario)";
                    }
               
               

            break;
            case'2':

                //Hexadecimal para Decimal
                if(varentrada.value!=hexadecimalResult){
                  //A função usa o método parseInt() com o segundo argumento 16 para converter result para um número inteiro em base 16 (hexadecimal). Em seguida, o resultado é retornado como um número decimal.
                    hexadecimalResult = varentrada.value;
                    decimal = parseInt(hexadecimalResult, 16);
                    resultado.value=hexadecimalResult+"(Hexadecimal) = "+decimal+"(Decimal)";
                }
               


            break;
            case'3':
                //Hexadecimal para Octal
                if(varentrada.value!=hexadecimalResult){
                    hexadecimalResult = varentrada.value;
                    decimal = parseInt(hexadecimalResult, 16);

                    octalResult=decimal.toString(8);
                    resultado.value=hexadecimalResult+"(Hexadecimal) = "+octalResult+"(Octal)";
                }
                


            break;
            case'4':
                //Binario para Decimal
                if(varentrada.value!=binarioResult){
                    binarioResult=varentrada.value;
                    binarioArray = binarioResult.split("").reverse();
                
                    for (let i = 0; i < binarioArray.length; i++) {
                    if (binarioArray[i] === "1") {
                        decimal += Math.pow(2, i);
                    }
                    }
                        resultado.value=binarioResult+"(Binario) = "+decimal+"(Decimal)";
                
                }
                // A string result digitada pelo usuário é convertida em um array de caracteres, usando o método split("").
                // O array é invertido com o método reverse(), para que possamos percorrer os dígitos da direita para a esquerda.
                // Em um loop for, percorremos cada dígito do array. Se o dígito for "1", adicionamos o valor correspondente à posição do dígito na string binária, elevado à potência de 2, à variável decimal.
                
                
            break;
            case'5':
                //Binario para Octal
                if(varentrada.value!=binarioResult){
                    binarioResult=varentrada.value;
                    binarioArray = binarioResult.split("").reverse();
            
                    for (let i = 0; i < binarioArray.length; i++) {
                    if (binarioArray[i] === "1") {
                        decimal += Math.pow(2, i);
                    }
                    }
                    octalResult=decimal.toString(8);
                    resultado.value=binarioResult+"(Binario) = "+octalResult+"(Octal)";    
                }
                     
            break;
            case'6':
                //Binario para Hexadecimal
                if(varentrada.value!=binarioResult){
                    binarioResult=varentrada.value;
                    binarioArray = binarioResult.split("").reverse();
        
                    for (let i = 0; i < binarioArray.length; i++) {
                        if (binarioArray[i] === "1") {
                            decimal += Math.pow(2, i);
                        }
                    }
                    hexadecimalResult=decimal.toString(16);
                    resultado.value= binarioResult+"(Binario)"+hexadecimalResult+"(Hexadecimal)";
                }
              

               

            break;
            case'7':
                //Decimal para Binario
                if(varentrada.value!=decimal){
                    decimal=varentrada.value;
                    binarioResult=(decimal >>> 0).toString(2);
                    resultado.value=decimal+"(Decimal) = "+binarioResult+"(Binario)";
                }
                

            break;
            case'8':
                //Decimal para Octal
                if(varentrada.value!=decimal){
                    decimal=varentrada.value;
                    octalResult= (decimal >>> 0).toString(8);
                    resultado.value=decimal+"(Decimal) = "+octalResult+"(Octal)";
                }    
               
            break;
            case'9':
                //Decimal para Hexadecimal
                if(varentrada.value!=decimal){
                    decimal=varentrada.value;
                    hexadecimalResult= (decimal >>> 0).toString(16);
                    resultado.value=decimal+"(Decimal) = "+hexadecimalResult+"(Hexadecimal)";  
                }
                d
            break;
            case'10':
                //Octal para Decimal
                if(varentrada.value!=octalResult){
                    octalResult= varentrada.value;
                    decimal = parseInt(octalResult, 8);
                    resultado.value=octalResult+"(Octal) = "+ decimal +"(Decimal )";
                }
                
            break;
            case'11':
                //Octal para Binario
                if(varentrada.value!=octalResult){
                    octalResult= varentrada.value;
                    decimal = parseInt(octalResult, 8);
                    binarioResult = (decimal >>> 0).toString(2);
                    resultado.value=octalResult+"(Octal) = "+ binarioResult +"(Binario)";
                }
             

            break;
            case'12':
                //Octal para hexadecimal
                if(varentrada.value!=octalResult){
                    octalResult= varentrada.value;
                    decimal = parseInt(octalResult, 8);
                    hexadecimalResult= (decimal >>> 0).toString(16);
                    resultado.value=octalResult+"(Octal) = "+ hexadecimalResult +"(Hexadecimal)";
                }
                
            break;

            }
        if(resultado.value!=""){
            resultado.style="background-color: rgb(255, 255, 255)";
        }else{
            resultado.style="background-color: rgb(163, 163, 163)";
        }    
        if(varentrada.value==""){
            resultado.value="";
        }
        event.preventDefault();
       
    });
  


}
