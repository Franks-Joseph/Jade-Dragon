function myFunction() {
    var x = document.getElementById("TopNav");
    if (x.className === "navigation") {
      x.className += " responsive";
    } else {
      x.className = "navigation";
    }
  }