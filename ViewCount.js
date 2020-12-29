var myStorage = window.localStorage, pageCount;
window.addEventListener('load', function(){
   if(!myStorage.getItem("pageCount")){
      myStorage.setItem("pageCount", 1);
   } else {
      pageCount = myStorage.getItem("pageCount");
      let newCount = ++pageCount;
      myStorage.setItem("pageCount", newCount);
   }
   var p = document.createElement("p");
   var text1 = document.createTextNode("Page viewcount: ");
   p.appendChild(text1);
   var text2 = document.createTextNode(myStorage.getItem("pageCount").toString());
   p.appendChild(text2);
   var div = document.getElementById("view-count");
   div.appendChild(p);
});