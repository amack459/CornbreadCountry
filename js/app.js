window.onload = function(){

  var about = document.getElementById("about_content");
  var reviews = document.getElementsByClassName("reviews");

for(i = 0; i<reviews.length; i++){
  reviews[i].style.display = "none";
}
console.log(reviews);
  about.style.display = "none";
  
  
  var tabs = document.getElementsByClassName("tabs");

  var content = document.getElementsByClassName("tab_content");



  for(var i = 0; i <tabs.length; i++){
    tabs[i].addEventListener("click", function(){
     for(var j = 0; j<content.length; j++){
      content[j].style.display = "none";
     }
     console.log(this);
     document.getElementById(this.id + "_content").style.display = "block";
    
    })

  }
}