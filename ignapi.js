var xml = new XMLHttpRequest();
xhr.open("GET", "http://ign-apis.herokuapp.com/articles?startIndex=30\u0026count=5", false);
xhr.send();

console.log(xhr.status);
console.log(xhr.statusText);
