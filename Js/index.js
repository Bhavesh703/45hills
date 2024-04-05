// bhk3

let bhk3Div = document
  .querySelector(".btn3")
  .addEventListener("click", function () {
    document.querySelectorAll(".bhk-button").forEach((e) => {
      e.classList.remove("active");
    });

    document.querySelectorAll(".bhk-button")[0].classList.add("active");
  });

let bhk3 = document.querySelectorAll(".bhk3-img");
console.log(bhk3);

let g_floor = document
  .querySelector(".bhk3_g-floor")
  .addEventListener("click", function (e) {
    bhk3.forEach((imgs) => {
      imgs.classList.remove("show");
    });

    console.log(bhk3[0]);
    bhk3[0].classList.add("show");

    document.querySelectorAll(".bhk3-btn").forEach((i) => {
      i.classList.remove("active");
    });

    document.querySelector(".bhk3_g-floor").classList.add("active");
  });

let firstFloor = document
  .querySelector(".bhk3_1-floor")
  .addEventListener("click", function () {
    bhk3.forEach((imgs) => {
      imgs.classList.remove("show");
    });

    console.log(bhk3[1]);
    bhk3[1].classList.add("show");

    document.querySelectorAll(".bhk3-btn").forEach((i) => {
      i.classList.remove("active");
    });

    document.querySelector(".bhk3_1-floor").classList.add("active");
  });

let thridFloor = document
  .querySelector(".bhk3_2-floor")
  .addEventListener("click", function () {
    bhk3.forEach((imgs) => {
      imgs.classList.remove("show");
    });

    console.log(bhk3[2]);
    bhk3[2].classList.add("show");

    document.querySelectorAll(".bhk3-btn").forEach((i) => {
      i.classList.remove("active");
    });

    document.querySelector(".bhk3_2-floor").classList.add("active");
  });

let bhk4Div = document
  .querySelector(".btn4")
  .addEventListener("click", function () {
    document.querySelectorAll(" .bhk-button").forEach((e) => {
      e.classList.remove("active");
    });

    document.querySelectorAll(".bhk-button")[1].classList.add("active");
  });

let bhk4 = document.querySelectorAll(".bhk4-img");
console.log(bhk4);

let bhk4g_floor = document
  .querySelector(".bhk4_g-floor")
  .addEventListener("click", function (e) {
    bhk4.forEach((imgs) => {
      imgs.classList.remove("show");
    });

    bhk4[0].classList.add("show");
  });

let bhk4firstFloor = document
  .querySelector(".bhk4_1-floor")
  .addEventListener("click", function () {
    bhk4.forEach((imgs) => {
      imgs.classList.remove("show");
    });

    console.log(bhk4[1]);
    bhk4[1].classList.add("show");
  });

let secondFloor = document
  .querySelector(".bhk4_2-floor")
  .addEventListener("click", function () {
    bhk4.forEach((imgs) => {
      imgs.classList.remove("show");
    });

    console.log(bhk4[2]);
    bhk4[2].classList.add("show");
  });

let bhk5Div = document
  .querySelector(".btn5")
  .addEventListener("click", function () {
    document.querySelectorAll(" .bhk-button").forEach((e) => {
      e.classList.remove("active");
    });

    document.querySelectorAll(".bhk-button")[2].classList.add("active");
  });

let bhk5 = document.querySelectorAll(".bhk5-img");
console.log(bhk4);

let bhk5g_floor = document
  .querySelector(".bhk5_g-floor")
  .addEventListener("click", function (e) {
    bhk5.forEach((imgs) => {
      imgs.classList.remove("show");
    });

    bhk5[0].classList.add("show");
  });

let bhk5firstFloor = document
  .querySelector(".bhk5_1-floor")
  .addEventListener("click", function () {
    bhk5.forEach((imgs) => {
      imgs.classList.remove("show");
    });

    console.log(bhk5[1]);
    bhk5[1].classList.add("show");
  });

let bhk5secondFloor = document
  .querySelector(".bhk5_2-floor")
  .addEventListener("click", function () {
    bhk5.forEach((imgs) => {
      imgs.classList.remove("show");
    });

    console.log(bhk5[2]);
    bhk5[2].classList.add("show");
  });

//   navbar

let rides = document.querySelectorAll(".item");
if (rides) {
  rides.forEach((event) => {
    event.addEventListener("click", function (button) {
      rides.forEach((e) => {
        e.classList.remove("active");
      });

      button.currentTarget.classList.add("active");
    });
  });
}
