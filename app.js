

 function check_palindrome(str)
 {
    let initialString = str.replace(/\W+|_/g, "").toLowerCase();
    let reverseString = initialString.split("").reverse().join("");
//    console.log(initialString);
//    console.log(reverseString);

    if(initialString!=reverseString){

     return false;
    }
   
   

    return true;
   
 }

const txtInput = document.querySelector(".inputs input"),
checkBtn = document.querySelector(".inputs button"),
infoTxt = document.querySelector(".desc");


checkBtn.addEventListener("click", () => {

    if(txtInput.value.length===0){

        infoTxt.style.display = "block";
        infoTxt.style.color="#8a743a";
        infoTxt.innerHTML= "Enter some text"
        

    }
    else{
    
    infoTxt.style.display = "block";
    let ans = check_palindrome(txtInput.value)

    if(ans==true){
        infoTxt.style.color="#408643";
        infoTxt.innerHTML= "It's a palindrome"
        

    }
    else{

        infoTxt.style.color="#af504c";
        infoTxt.innerHTML= "It's not a palindrome"
        

    }
    }
});

txtInput.addEventListener("keyup", () => {
   
    infoTxt.style.display = "none";
    
});






