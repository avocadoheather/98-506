const sidebarControl = document.getElementById("sidebar-control");
const sidebar = document.getElementById("sidebar");

sidebarControl.addEventListener("click", () => {
    sidebar.classList.toggle("open");
})