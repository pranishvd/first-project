const placeHeading = document.querySelector('h1')

const placeimages = document.querySelectorAll(".one")


for (var i = 0; i < placeimages.length; i++) {
  placeimages[i].addEventListener("click",function(){
  placeHeading.setAttribute("class","tamil")
  placeHeading.innerHTML ="its south side of India <br>, its near Kerala"
  })
}

const clickButton=document.querySelectorAll('.toggle-btn')
const clickSide=document.getElementById('side-bar')


for (let i = 0; i < clickButton.length; i++) {
   clickButton[i].addEventListener('click',function(){
     clickSide.classList.toggle('active')

   });
}
