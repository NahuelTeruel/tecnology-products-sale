document.addEventListener("DOMContentLoaded", function() {
    const addToCartBtns = document.querySelectorAll('.addToCartBtn');

    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', function(event) {
            const productName = btn.closest('.producto').querySelector('img').alt;
            const alreadyAdded = btn.classList.contains('added');

            if (!alreadyAdded) {
                addToCart(productName);
                btn.innerText = 'Añadido al carrito';
                btn.classList.add('added');
            } else {
                removeFromCart(productName);
                btn.innerText = 'Agregar al carrito';
                btn.classList.remove('added');
            }

            event.preventDefault(); // Evita que el evento de clic se propague
        });
    });

    function addToCart(productName) {
        console.log('Añadido al carrito:', productName);
        // Aquí puedes agregar lógica para añadir el producto al carrito
    }

    function removeFromCart(productName) {
        console.log('Quitado del carrito:', productName);
        // Aquí puedes agregar lógica para quitar el producto del carrito
    }
});

