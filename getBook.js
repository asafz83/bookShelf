 
var search = location.search;
search = "{" + search + "}"
search = search.replace("?", "");
var searchObject = search.split("&").join(",").split("=").join(":");
console.log(searchObject);
