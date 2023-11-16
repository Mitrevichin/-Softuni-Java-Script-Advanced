function addItem() {
    let inputTextElement = document.getElementById('newItemText').value;
    let inputValueElement = document.getElementById('newItemValue').value;
    let menu = document.getElementById('menu');

    let option = document.createElement('option');
    option.textContent = inputTextElement;
    option.value = inputValueElement;

    if (inputTextElement !== '' && inputValueElement !== '') {
        menu.appendChild(option);
    };
    // It doesn't work if I make it like this: inputTextElement = ''; and inputValueElement = ''; 
    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';
}