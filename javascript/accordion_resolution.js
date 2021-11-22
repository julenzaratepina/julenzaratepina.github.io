var acc = document.getElementsByClassName("accordion");
var i;


for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;

    if (panel.style.display === "block") {
      panel.style.display = "none";
      document.getElementById("resolution_show").style.display = 'none';
      document.getElementById("resolution_hide").style.display = 'block';


    } else {
      panel.style.display = "block";
      document.getElementById("resolution_hide").style.display = 'none';
      document.getElementById("resolution_bloc").style.display = 'block';
    }
  });
}
