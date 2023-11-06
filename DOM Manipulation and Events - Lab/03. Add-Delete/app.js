function addItem() {
    let inputElement = document.getElementById('newItemText');
    let parentItemsElement = document.getElementById('items');

    let newLiElement = document.createElement('li');
    let newAnchorElement = document.createElement('a');

    newLiElement.textContent = inputElement.value;
    inputElement.value = '';
    newAnchorElement.href = '#';
    newAnchorElement.textContent = '[Delete]';
    
    newLiElement.appendChild(newAnchorElement);
    parentItemsElement.appendChild(newLiElement);

    newAnchorElement.addEventListener('click', (e) => {
        e.currentTarget.parentElement.remove();
    });
}