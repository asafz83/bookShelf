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

function fillDOMWithBook(book) {
 document.getElementById("title") = book.bookName;
 document.getElementById("author") = book.authorName;
 document.getElementById("score") = book.score;
 document.getElementById("description") = book.description;
}

var nameParameter = getNameParameter();
var listOfBooks = JSON.parse(localStorage.getItem("refael"));
for (var i=0;i<listOfBooks.length;i++) {
 if (nameParameter === listOfBooks[i].bookName) {
     fillDOMWithBook(listOfBooks[i]);
 }
}

