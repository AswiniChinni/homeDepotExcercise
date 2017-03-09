/*below function is used convert currency using JSON API*/
   function inputChange(){
  var demo = function(data) {
  fx.rates = data.rates
  amount = document.getElementById("InputAmount").value
  InputCurr = document.getElementById("inputSelect").value
  outputCurr = document.getElementById("outPutSelect").value
  if(amount === ""){ /* empty value check for input currency amount*/
    document.getElementsByName('outputAmount')[0].value = "0.00";
  } else{
  var rate = fx(amount).from(InputCurr).to(outputCurr)
  finalAmount = rate.toFixed(2)
  document.getElementsByName('outputAmount')[0].value = finalAmount;
  }
}
$.getJSON("http://api.fixer.io/latest", demo)
   }