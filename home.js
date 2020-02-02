const placeHeading = document.querySelector('h1')

const placeimages = document.querySelectorAll(".one")


for (var i = 0; i < placeimages.length; i++) {
  placeimages[i].addEventListener("click",function(){
  placeHeading.setAttribute("class","tamil")
  placeHeading.innerHTML ="its south side of India <br>, its near Kerala"
  })
}


const dropDown = document.querySelectorAll(".dropbtn")

for (i = 0; i < dropDown.length; i++) {
  dropDown[i].addEventListener("click", function() {
  this.classList.toggle("active");
  const dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
  } else {
  dropdownContent.style.display = "block";
  }
  });
}
