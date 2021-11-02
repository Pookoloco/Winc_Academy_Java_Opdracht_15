let hoverMenuStatus = false;

let hoverMenuon = function() {

  let colorBtns = document.querySelector(".btn-toggle");
  let colorBtnsUl = document.querySelector(".main-nav ul");
  let colorBtnsLi = document.querySelectorAll(".main-nav button");

  if(hoverMenuStatus === false) {

     colorBtnsUl.style.visibility = "visible"; 

     hoverMenuStatus = true;

  }
}

let hoverMenuoff = function() {

  let colorBtns = document.querySelector(".btn-toggle");
  let colorBtnsUl = document.querySelector(".main-nav ul");
  let colorBtnsLi = document.querySelectorAll(".main-nav button");

  if(hoverMenuStatus === true) {

     colorBtnsUl.style.visibility = "hidden"; 

     hoverMenuStatus = false;

  }
}

let changeBodyBackgroundclr = function (color) {

  document.body.style.backgroundColor = color;

}

