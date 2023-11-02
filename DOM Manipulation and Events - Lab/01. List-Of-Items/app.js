function addItem() {
    let inputElement = document.getElementById('newItemText');
    let newLiElement = document.createElement('li');
    let parentElement = document.getElementById('items');

    newLiElement.textContent = inputElement.value;
    inputElement.value = '';
    parentElement.append(newLiElement);
}