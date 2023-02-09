window.addEventListener("DOMContentLoaded", function () {
  const alertBtn = document.getElementById("alert-btn");
  alertBtn.addEventListener("click", function (e) {
    document.getElementById("title").style.color = "red"
  });
});
