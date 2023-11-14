function create(words) {
   let content = document.getElementById('content');

   for (let i = 0; i < words.length; i++) {
      let currStr = words[i];
      let div = document.createElement('div');
      let par = document.createElement('p');

      par.textContent = currStr;
      par.style.display = 'none';

      div.appendChild(par);
      content.appendChild(div);

      div.addEventListener('click', function (e) {
         e.target.children[0].style.display = 'block';
      });

   }
}