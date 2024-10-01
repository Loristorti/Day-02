fruits = ["Blackberries", "Apple", "Banana", "Mango", "Peaches", "Kiwi"];
let L = "Banana"
 function getIndexFromName(L) {
 let M = fruits.indexOf(L)
 if (M === -1){
 return null
 }
 else {
 return M
 }
 }
 function plus (resultat){
displayResult(resultat)
 }
plus(getIndexFromName(L))