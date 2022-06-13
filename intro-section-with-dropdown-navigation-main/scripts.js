// function openNav() 
// document.getElementById("mySidenav").style.width = "250px";
  

// function closeNav() 
// document.getElementById("mySidenav").style.width = "0";
  


function myFunction() {
  let openNav = document.getElementById("myLinks")
  let closeNav = document.getElementById("mySideNav")
  if (openNav.style.display === "block") {
    openNav.style.display = "none";
  } else {
    openNav.style.display = "block"
  }
}