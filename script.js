const navbar = document.getElementById("navbar");
const sidebarIcons = navbar.querySelectorAll(".side-icons");
const expandedIcons = navbar.querySelectorAll(".expanded-icons");

let isExpanded = false;

function toggleIcons() {
  if (!isExpanded) {
    sidebarIcons.forEach((icon) => icon.classList.add("expanded-icons"));
    isExpanded = true;
  } else {
    sidebarIcons.forEach((icon) => icon.classList.remove("expanded-icons"));
    isExpanded = false;
  }
}

const toggleButton = document.querySelector(".hamburger-menu");
toggleButton.addEventListener("click", function () {
  navbar.classList.toggle("expanded");
  toggleIcons();
});
