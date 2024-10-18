// Información real de los menús (extraída de la imagen)
const menus = {
    menuHamburguesas: `
        <h2>Menú de Hamburguesas</h2>
        <ul>
            <li><strong>Sencilla</strong> - 11K<br>Carne de res, vegetales, queso y salsas.</li>
            <li><strong>Con Tocinetas</strong> - 15K<br>Carne de res, tocineta ahumada, vegetales, queso y salsas.</li>
            <li><strong>Mixta</strong> - 17K<br>Carne de res, vegetales, queso, chorizo o pollo.</li>
            <li><strong>Full</strong> - 27K<br>Carne de res, pollo, chorizo, tocineta, vegetales, queso y salsas.</li>
        </ul>
    `,
    menuPerros: `
        <h2>Menú de Perros</h2>
        <ul>
            <li><strong>Perro</strong> - 11K<br>Salchicha, queso, ripio de papa, ensalada de la casa y salsas.</li>
            <li><strong>Perra</strong> - 15K<br>Salchicha ranchera, tocineta, ripio de papa, queso, ensalada de la casa y salsas.</li>
            <li><strong>Choriperro</strong> - 15K<br>Chorizo de puro solomito con chicharrón, ensalada de la casa, queso, ripio de papa y salsas.</li>
        </ul>
    `,
    menuChuzos: `
        <h2>Menú de Chuzos</h2>
        <ul>
            <li><strong>Pollo</strong> - 6K<br>Chuzito de pollo con tocineta acompañado con arepa.</li>
            <li><strong>Chorizo</strong> - 6K<br>Chorizo de puro solomito con chicharrón acompañado con arepa.</li>
            <li><strong>Chuzo Especial</strong> - 15K<br>Chuzito de pollo 250g acompañado de ensalada de la casa y doble arepa.</li>
        </ul>
    `,
    menuSanduches: `
        <h2>Menú de Sánduches</h2>
        <ul>
            <li><strong>Sanduche</strong> - 15K<br>Pan fresco de orégano, parmesano o cilantro, ajo, filete de pollo, tocineta, queso, vegetales, ensalada de la casa y salsa de la casa.</li>
            <li><strong>Butifarras</strong> - 1K<br>Deliciosas butifarras con salsa.</li>
        </ul>
    `,
    menuBebidas: `
        <h2>Menú de Bebidas</h2>
        <ul>
            <li><strong>Gaseosa</strong> - 3K<br>250 ml</li>
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
