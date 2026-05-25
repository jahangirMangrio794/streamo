document.addEventListener("DOMContentLoaded", function () {

  const loginBtn = document.querySelector(".right button");
  loginBtn.addEventListener("click", function () {
    alert("Login system abhi backend se connect nahi hai!");
  });

  const playBtn = document.querySelector(".play");
  playBtn.addEventListener("click", function () {
    alert("Watch Now clicked!");
  });

  const listBtn = document.querySelector(".list");
  listBtn.addEventListener("click", function () {
    alert("Added to My List!");
  });

});
