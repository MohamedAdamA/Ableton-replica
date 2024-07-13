
function moreMenu() {
    event.preventDefault();
    var menu = document.getElementById("menuButton"); // Use a variable to store the menu element
    if (menu.style.display === "block") {
      menu.style.display = "none"; // Hide the menu if it's currently displayed
    } else {
      menu.style.display = "block"; // Show the menu if it's currently hidden
    }
  }
  
  document.getElementById("moreColor").addEventListener("click", moreMenu); 
