function getNameParameter(){
 var search = location.search;
 search = search.replace("?", "");
 var paramsArray = search.split("&");
 for (var i=0;i<paramsArray.length;i++) {
   var entryArray = paramsArray[i].split("=");
   if (entryArray[0] === "name") {
     return entryArray[1].split("%20").join(" ");    
   }
 }
 return "";
} 

function fillDOMWithBook(book) {
 document.getElementById("title").innerHTML = book.bookName;
 document.getElementById("author").innerHTML = book.authorName;
 document.getElementById("score").innerHTML = book.score;
 document.getElementById("description").innerHTML = book.description;
}

var nameParameter = getNameParameter();
var listOfBooks = JSON.parse(localStorage.getItem("refael"));
for (var i=0;i<listOfBooks.length;i++) {
 if (nameParameter === listOfBooks[i].bookName) {
  var book = listOfBooks[i];
     setTimeout(function(){
      fillDOMWithBook(book); 
     }, 500);
     
 }
}

