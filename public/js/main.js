window.addEventListener("DOMContentLoaded", function () {
  const alertBtn = document.getElementById("警告-btn");
  alertBtn.addEventListener("click", function (e) {
    document.getElementById("title").style.color = "red"
  });
});
