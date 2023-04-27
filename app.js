const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "12345678";
const symbolSet = "~!@#$%^&*()_+/";

// Selectors

const passBox = document.getElementById("pass-box");
const totalChar = document.getElementById("total-char");
const upperInput = document.getElementById("upper-case");
const lowerInput = document.getElementById("lower-case");
const numberInput = document.getElementById("numbers");
const symbolInput = document.getElementById('symbols');

const getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)]
}

const generatePassword = (pass = "") => {
    
    if(upperInput.checked){
        pass += getRandomData(upperSet);   
    }
    if(lowerInput.checked){
        pass += getRandomData(lowerSet);   
     }
     if(numberInput.checked){
        pass += getRandomData(numberSet);   
     }
     if(symbolInput.checked){
        pass += getRandomData(symbolSet);   
     }

     if(pass.length < totalChar.value){
        return generatePassword(pass);
     }
    passBox.innerText = truncateString(pass,totalChar.value);
    console.log(totalChar.value)
}

document.getElementById('btn').addEventListener(
    "click",
    function(){
        generatePassword();
    }
)

 function truncateString(str,num){
    if(str.length > num){
        let subStr = str.substring(0,num);
        return subStr;
    }
    else{
        return str;
    }
 }   



