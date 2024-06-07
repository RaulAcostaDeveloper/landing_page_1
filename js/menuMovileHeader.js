let toggleMenu = false;
const toggleMenuMovileHeader = () => {
    console.log('menu');
    const menuElement = document.getElementById('menuMovileHeader');
    if (toggleMenu) {
        menuElement.style.display = 'none';
    } else {
        menuElement.style.display = 'block';
    }
    toggleMenu = !toggleMenu;
}