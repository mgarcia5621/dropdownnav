// function openNav() 
// document.getElementById("mySidenav").style.width = "250px";
  

// function closeNav() 
// document.getElementById("mySidenav").style.width = "0";
  

let openNav = document.querySelector(".hamburger")
let closeNav = document.getElementById("mySideNav")
let mySideNav = document.getElementById("mySidenav")
let openBtn = document.querySelector(".openbtn")
let closeBtn = document.querySelector(".navbar2")

function myFunction() {
  if (openNav.style.display === "block") {
    openNav.style.display = "none";
  } else {
    openNav.style.display = "block"
  }
  // document.body.style.backgroundColor = "rgba(0,0,0,0.4)"
}

openNav.addEventListener('click', () => {
  if (mySideNav.style.display === "block") {
    mySideNav.style.display = "none";
    closeBtn.style.display = "none";
    openBtn.style.display = "block";
  } else {
    mySideNav.style.display = "block";
    openBtn.style.display = "none";
    closeBtn.style.display = "block";
  }
  console.log('Clicked hamburger');
})

// function closeNav() {
//   if (openNav)
// }