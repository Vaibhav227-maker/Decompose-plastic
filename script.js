// Toggle the side menu on click
function toggleMenu() {
    const sideMenu = document.getElementById('sideMenu');
    const mainContent = document.querySelector('.main-content');
    
    if (sideMenu.style.width === '250px') {
        sideMenu.style.width = '0';
        mainContent.style.marginLeft = '0';
    } else {
        sideMenu.style.width = '250px';
        mainContent.style.marginLeft = '250px';
    }
}
