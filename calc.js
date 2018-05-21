

var num1 = document.getElementById("num1")
var num2 = document.getElementById("num2")
var operator = ""
var answer = 0
plus.addEventListener('click',function(){
  operator = "+"
})
minus.addEventListener('click',function(){
  operator = "-"
})
divide.addEventListener('click',function(){
  operator = "/"
})
multiply.addEventListener('click',function(){
  operator = "*"
})


equalButton.addEventListener(
  'click',function()
  {
    var number1 = num1.valueAsNumber
    var number2 = num2.valueAsNumber
   
  if (operator == "+"){
    var answer = number1 + number2
    console.log(answer)

    }
  else if(operator == "-"){
    var answer = number1 - number2}
  else if(operator=="/"){
    var answer = number1 / number2}
  else if(operator == "*"){
    var answer = number1 * number2}    
    console.log(answer)
    var display = document.getElementById("product")
    display.innerHTML= number1 + " "+ operator +" " + number2 + " = " + answer
    document.getElementById('num1').value = " "
  document.getElementById('num2').value = " "
  }
)
clear.addEventListener('click',function(){
  document.getElementById('num1').value = " "
  document.getElementById('num2').value = " "})
