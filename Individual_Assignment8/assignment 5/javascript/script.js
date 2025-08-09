const menuItems = {
    item1: {
        image: './images/salmon.jpg',
        text: 'Grilled Salmon: Freshly caught salmon, grilled to perfection with a lemon herb sauce, served with seasonal vegetables.'
    },
    item2: {
        image: './images/pizza.jpg',
        text: 'Margherita Pizza: Classic Italian pizza with fresh tomatoes, mozzarella, basil, and a drizzle of olive oil.'
    },
    item3: {
        image: './images/Salad.jpg',
        text: 'Caesar Salad: Crisp romaine lettuce tossed with our signature Caesar dressing, croutons, and parmesan cheese.'
    }
};

function openModal(itemId, title, description) {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const modalText = document.getElementById('modal-text');
    
    modalImage.src = menuItems[itemId].image;
    modalImage.alt = title;
    modalText.textContent = description;
    modal.style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}