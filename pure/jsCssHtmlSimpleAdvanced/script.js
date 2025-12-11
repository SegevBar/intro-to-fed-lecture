// Simple Shop - JavaScript Concepts Demo
// 1. Dynamic Typing   - variables hold any type
// 2. Event-Driven     - responds to clicks
// 3. Functions        - first-class, closures, callbacks
// 4. Async            - Promises, async/await
// 5. DOM Manipulation - create/update elements

let cart = [];

// FUNCTIONS: assigned to variable
const formatPrice = (n) => `$${n.toFixed(2)}`;

// FUNCTIONS: higher-order (returns function) + closure
const createDiscount = (percent) => (price) => price * (1 - percent / 100);
const studentDiscount = createDiscount(15);

// ASYNC: simulated API call with Promise
function fetchProducts() {
    return new Promise(resolve => {
        setTimeout(() => resolve([
            { id: 1, name: 'Headphones', price: 79.99 },
            { id: 2, name: 'Keyboard', price: 49.99 },
            { id: 3, name: 'Mouse', price: 29.99 }
        ]), 500);
    });
}

// ASYNC: using async/await
async function init() {
    const products = await fetchProducts();
    
    // DOM: create product buttons
    const container = document.getElementById('products');
    products.forEach(p => {
        const btn = document.createElement('button');
        btn.textContent = `${p.name} - ${formatPrice(p.price)}`;
        
        // EVENT: click handler
        btn.onclick = () => {
            cart.push(p);
            updateCart();
        };
        
        container.appendChild(btn);
    });
}

function updateCart() {
    // DOM: update cart display
    document.getElementById('cartItems').innerHTML = 
        cart.map(item => `<div>${item.name}</div>`).join('');
    
    // FUNCTIONS: callback with reduce
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    
    document.getElementById('count').textContent = cart.length;
    document.getElementById('total').textContent = formatPrice(total);
}

init();
