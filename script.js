const result = document.getElementById("resp");



function check(){

var ano = parseInt(document.getElementById("ano").value);

console.log(ano)


if(ano % 4 === 0){

    if(!(ano % 100 ===0) || ano % 400 === 0){
        var answer = "Esse é um ano bissexto";
    }else{

        var answer = "Não é um ano bissexto";
    }
    
}else{
    var answer = "Não é um ano bissexto";
}

result.innerText = answer;

}












