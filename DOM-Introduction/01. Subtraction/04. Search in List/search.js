function search() {
   let input = document.getElementById('searchText').value;
   let towns = document.querySelectorAll('#towns li');
   let resultCounter = document.getElementById('result');
   let counter = 0;

   let arrTowns = Array.from(towns);

   arrTowns.forEach(x => {
      if (x.textContent.includes(input)) {
         counter++;
         x.style.textDecoration = 'underline';
         x.style.fontWeight = 'bold';
      } else {
         x.style.textDecoration = 'none';
         x.style.fontWeight = 'normal';
      }
   });
   resultCounter.textContent = `${counter} matches found`;
}
