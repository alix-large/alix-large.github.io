import feather from 'feather-icons';

feather.replace();

//Au clic sur l bouton, imprimer la page
const btnElt = document.querySelector('.btn');
console.log (btnElt);

btnElt.addEventListener('click', function () {
    print();    
})