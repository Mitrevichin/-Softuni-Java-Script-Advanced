function solve() {
  let input = document.getElementById('text').value;
  let convention = document.getElementById('naming-convention').value;
  let result = '';

  if (convention === 'Camel Case') {

    for (let index = 0; index < input.length; index++) {

      if (input[index] === ' ') {
        result += input[index + 1].toUpperCase();
        index++;
      } else {
        result += input[index].toLowerCase();
      }
    }

  } else if (convention === 'Pascal Case') {
    result += input[0].toUpperCase();

    for (let index = 1; index < input.length; index++) {

      if (input[index] === ' ') {
        result += input[index + 1].toUpperCase();
        index++;
      } else {
        result += input[index].toLowerCase();
      }
    }
  } else {
    result = 'Error!';
  }

  let resultElement = document.getElementById('result');
  resultElement.textContent = result;
}

