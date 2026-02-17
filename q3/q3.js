const inventory = [
    { id: 1, name: "Organic Bananas", category: "Fruit", stock: 12, price: 0.99 },
    { id: 2, name: "Whole Milk", category: "Dairy", stock: 2, price: 3.50 },
    { id: 3, name: "Sourdough Bread", category: "Bakery", stock: 0, price: 4.25 },
    { id: 4, name: "Roasted Almonds", category: "Snacks", stock: 25, price: 8.00 }
];

let taxApplied = false;

function renderInventory() {
    const grid = document.getElementById("inventory-grid");
    grid.innerHTML = "";

    for (let i = 0; i < inventory.length; i++) {
        const item = inventory[i];
        const card = document.createElement("div");
        card.classList.add("product-card");

        if (item.stock === 0) {
            card.classList.add("out-of-stock");
        }

        const name = document.createElement("h2");
        name.textContent = item.name;

        const cat = document.createElement("p");
        cat.textContent = item.category;

        const pr = document.createElement("p");
        pr.classList.add("price");
        const finalPrice = taxApplied ? item.price * 1.1 : item.price;
        pr.textContent = "$" + finalPrice.toFixed(2);

        const st = document.createElement("p");
        if (item.stock === 0) {
            st.textContent = "Out of Stock";
            const badge = document.createElement("span");
            badge.textContent = "Restock Needed";
            badge.classList.add("restock-badge");
            card.appendChild(badge);
        } else {
            st.textContent = "Stock: " + item.stock;
            if (item.stock < 5) st.style.color = "orange";
        }

        const btn = document.createElement("button");
        btn.textContent = "Remove";
        btn.classList.add("remove-btn");
        btn.addEventListener("click", function () {
            inventory.splice(i, 1);
            renderInventory();
        });

        card.append(name, cat, pr, st, btn);
        grid.appendChild(card);
    }
}

document.getElementById("tax-toggle-btn").addEventListener("click", function () {
    taxApplied = !taxApplied;
    renderInventory();
});

renderInventory();
