const write = document.querySelector('.ecrire');

const divInput = document.createElement('div');
    divInput.className = 'input-group';
    write.appendChild(divInput);

document.querySelector('#tapeBar')
.addEventListener('keyup', input => {
	optionSearch(input.target.value.toLowerCase())
})

function optionSearch(pattern){
	
    const partieDroite = document.querySelector('.lire')
    partieDroite.innerHTML = ''

    const balsieTitre = /^#/i
    const sentence = pattern
    
    if (sentence.match(balsieTitre)) {
        const titre = document.createElement('h1');
        titre.textContent = pattern
        partieDroite.appendChild(titre);
    }
    else {
        const para = document.createElement('p');
        para.textContent = pattern
        partieDroite.appendChild(para);
    }
}