function getNameParameter(){
 var search = location.search;
 search = search.replace("?", "");
 var paramsArray = search.split("&");
 for (var i=0;i<paramsArray.length;i++) {
   var entryArray = paramsArray[i].split("=");
   if (entryArray[0] === "name") {
     return entryArray[1];    
   }
 }
 return "";
} 

var nameParameter = getNameParameter();
var listOfBooks = JSON.parse(localStorage.getItem("refael"));


