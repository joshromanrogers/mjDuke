let burger = document.querySelector('.burger');
let para = document.querySelector('.parallax');

let menuToggle = () => {
    console.log(burger);
    console.log('hello');
}

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }


let scrolledFromTop = () => {
    let x = window.scrollY;

    console.log(x);
    console.log(para);

}
