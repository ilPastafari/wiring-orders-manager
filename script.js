// app.js
document.getElementById('orderForm').addEventListener('submit', function (e) {
    e.preventDefault();
    addOrder();
});

function addOrder() {
    const customerName = document.getElementById('customerName').value;
    const orderDetails = document.getElementById('orderDetails').value;
    const deliveryDate = document.getElementById('deliveryDate').value;
    const color = document.getElementById('colorPicker').value;

    const order = document.createElement('div');
    order.className = 'order';
    order.style.backgroundColor = color;

    const orderContent = document.createElement('div');
    orderContent.className = 'order-content';
    orderContent.innerHTML = `
        <span class="customer-name">${customerName}</span>
        <span class="order-details">${orderDetails}</span>
        <span class="delivery-date">${deliveryDate}</span>
        <button onclick="toggleNotes(this)">Mostra Note</button>
        <div class="order-notes" style="display:none;">
            <textarea placeholder="Aggiungi note..."></textarea>
            <button onclick="saveNote()">Salva Nota</button>
        </div>
        <input type="checkbox" class="complete-order" onclick="toggleOrderCompletion(this)">
    `;

    order.appendChild(orderContent);
    document.getElementById('ordersList').appendChild(order);

    // Clear form
    document.getElementById('orderForm').reset();
}

function searchOrders() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const orders = document.querySelectorAll('.order');

    orders.forEach(order => {
        const customerName = order.querySelector('.customer-name').innerText.toLowerCase();
        if (customerName.includes(input)) {
            order.style.display = '';
        } else {
            order.style.display = 'none';
        }
    });
}

function showNotesSection() {
    document.querySelector('.container').style.display = 'none';
    document.getElementById('notesSection').style.display = 'block';
}

function saveNotes() {
    const notes = document.getElementById('sharedNotes').value;
    // Save notes logic (e.g., local storage, server-side storage)
    alert('Note salvate: ' + notes);
    document.querySelector('.container').style.display = 'flex';
    document.getElementById('notesSection').style.display = 'none';
}

function toggleNotes(button) {
    const notes = button.nextElementSibling;
    notes.style.display = notes.style.display === 'none' ? 'block' : 'none';
}

function saveNote() {
    // Implement save note logic
}

function toggleOrderCompletion(checkbox) {
    const order = checkbox.closest('.order');
    order.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
}