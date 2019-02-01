//GET ELEMENTS FROM HTML DOCUMENT
// hamburger icon in upper right corner
const hamburger = document.querySelector(".hamburger");
//menu page that appears when hamburger is clicked
const menu = document.querySelector(".menu");
//variable that will decide if menu wiil be shown or not

let showMenu = false;
// listen for ckick on hamberger icon and call togglemenu function 

hamburger.addEventListener("click", toggleMenu);
//declear togglemenu function 

function toggleMenu() {
  // check if showmenu variable is false
  if (showMenu === false) {
    //add a class 'close' to the hamburger in the the html doc
    hamburger.classList.add("close");
    //add show class to anything with '.menu'
    menu.classList.add("show");
    //when the the hamburger is clicked again it won't add anything

    showMenu = true;

  } else {//if showmenu is true 
    // remove the show class from hamburger 
    hamburger.classList.remove("close");
    //remove the show class form the menu

    menu.classList.remove("show");
    //reset the showmenu variable back to false

    showMenu = false;
  }
}
