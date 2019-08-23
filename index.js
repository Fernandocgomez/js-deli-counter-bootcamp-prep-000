function takeANumber (line){
  var position = 0
  var n = postion + 1
  line.push(n)
return "Welcome, you are number " + n +". "

 }
 
  for(let i = 1; i<katzDeliLine.length;i++){ 
    
 function nowServing (deliLine){
var name;

 if(deliLine.length === 0){
  return "There is nobody waiting to be served!"
}

 name = deliLine.shift()
return "Currently serving "+ name + "."
}
 
 function currentLine (katzDeliLine){
  if(katzDeliLine.length === 0){
    return "The line is currently empty."
  }

   var myString = `The line is currently: 1. ${katzDeliLine[0]}`

   for(let i = 1; i<katzDeliLine.length;i++){
  myString = myString + `, ${i+1}. ${katzDeliLine[i]}`
}
return myString
}
 
 
 
 
 
 
 
 