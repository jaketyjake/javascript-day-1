
function inWord(){
    var word = document.getElementById("inputWord");
    console.log(word.value)
    var stringword = String(word.value).toLowerCase()
    
    var output =  stringword.split("").reverse().join("")
    
    var display = document.getElementById("entered")
    display.innerHTML= "You entered " + word.value
    
    if (stringword == output){
        var answeryes = document.getElementById("answer")
        answeryes.innerHTML=  word.value + " IS a palindrome!!!"}
    else {
        var answeryes = document.getElementById("answer")
        answeryes.innerHTML=  word.value + " is NOT a palindrome!!!"  
        }
    
console.log(output)}
 



AL