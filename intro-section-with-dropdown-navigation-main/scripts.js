// function openNav() 
// document.getElementById("mySidenav").style.width = "250px";
  

// function closeNav() 
// document.getElementById("mySidenav").style.width = "0";
  

let openNav = document.querySelector(".hamburger")
let closeNav = document.getElementById("mySideNav")
let mySideNav = document.getElementById("mySidenav")

function myFunction() {
  if (openNav.style.display === "block") {
    openNav.style.display = "none";
  } else {
    openNav.style.display = "block"
  }
}

openNav.addEventListener('click', () => {
  if (mySideNav.style.display === "block") {
    mySideNav.style.display = "none";
  } else {
    mySideNav.style.display = "block"
  }
  console.log('Clicked hamburger');
})