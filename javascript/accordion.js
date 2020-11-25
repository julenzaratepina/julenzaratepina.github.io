var acc = document.getElementsByClassName("accordion");
var i;
var arrowdown = document.getElementbyId("arrowdown");
var arrowup = document.getElementbyId("arrowup");


for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;

    if (panel.style.display === "block") {
      panel.style.display = "none";
      //arrowdown.style.display = "block";
      //arrowup.style.display = "none";
    } else {
      panel.style.display = "block";
      //arrowup.style.display = "block";
      //arrowdown.style.display = "none";
    }
  });
}
