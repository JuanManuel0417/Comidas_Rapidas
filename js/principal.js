// Información ficticia de los menús
const menus = {
    menuHamburguesas: `
        <h2>Menú de Hamburguesas</h2>
        <p>Incluye:</p>
        <ul>
            <li>Hamburguesa Clásica</li>
            <li>Hamburguesa BBQ</li>
            <li>Hamburguesa con Doble Queso</li>
            <li>Hamburguesa Vegana</li>
        </ul>
    `,
    menuPerros: `
        <h2>Menú de Perros</h2>
        <p>Incluye:</p>
        <ul>
            <li>Perro Sencillo</li>
            <li>Perro con Queso</li>
            <li>Perro Especial</li>
            <li>Perro con Tocino</li>
        </ul>
    `,
    menuChuzos: `
        <h2>Menú de Chuzos</h2>
        <p>Incluye:</p>
        <ul>
            <li>Chuzo de Res</li>
            <li>Chuzo de Pollo</li>
            <li>Chuzo Mixto</li>
            <li>Chuzo Vegano</li>
        </ul>
    `,
    menuSanduches: `
        <h2>Menú de Sánduches</h2>
        <p>Incluye:</p>
        <ul>
            <li>Sánduche Clásico</li>
            <li>Sánduche de Pollo</li>
            <li>Sánduche Vegetariano</li>
            <li>Sánduche con Queso</li>
        </ul>
    `,
    menuBebidas: `
        <h2>Menú de Bebidas</h2>
        <p>Incluye:</p>
        <ul type="none">
            <li>Agua</li>
            <li>Gaseosa</li>
            <li>Jugo Natural</li>
            <li>Limonada</li>
        </ul>
    `
};

// Función para abrir el modal con el menú correspondiente
function openModal(menuId) {
    document.getElementById('menuInfo').innerHTML = menus[menuId];
    document.getElementById('menuModal').style.display = 'block';
}

// Función para cerrar el modal
function closeModal() {
    document.getElementById('menuModal').style.display = 'none';
}
