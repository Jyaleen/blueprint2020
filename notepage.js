var boldcounter = 0
function bold(){
   boldcounter++
   if(boldcounter % 2 == 1){
       document.getElementById('words').style.fontWeight='bold'
   } else {
       document.getElementById('words').style.fontWeight='normal'
   }
  
}
 
var italiccounter = 0
function italic(){
   italiccounter++
   if(italiccounter % 2 == 1){
       document.getElementById('words').style.fontStyle='italic'
   } else {
       document.getElementById('words').style.fontStyle='normal'
   }
 
  
}
 
var ulinecounter = 0
function uline(){
   ulinecounter++
   if(ulinecounter % 2 == 1){
       document.getElementById('words').style.textDecoration ='underline'
   } else {
       document.getElementById('words').style.textDecoration ='none'
   }
}
