window.onload = function(){

  var about = document.getElementById("about_content");
  var reviews = document.getElementById("reviews_content");

  about.style.display = "none";
  reviews.style.display = "none";
  console.log(about);
  console.log(reviews);
  
  var tabs = document.getElementsByClassName("tabs");

  var content = document.getElementsByClassName("tab_content");



  for(var i = 0; i <tabs.length; i++){
    tabs[i].addEventListener("click", function(){
     for(var j = 0; j<content.length; j++){
      content[j].style.display = "none";
     }
     document.getElementById(this.id + "_content").style.display = "block";
     console.log(content);

    })

  }
}