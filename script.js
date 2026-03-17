const btnEl = document.querySelector('button')
const imgOffEl = document.querySelector('.d-block')
const imgOnEl = document.querySelector('.d-none')

btnEl.addEventListener('click', function (){
    if (imgOffEl.classList.contains('d-block')) {
            imgOffEl.classList.remove('d-block')
            imgOffEl.classList.add('d-none')
            imgOnEl.classList.remove('d-none')
            imgOnEl.classList.add('d-block')
        
            btnEl.innerHTML = ('Spegni')
        
    } else {
        
            imgOnEl.classList.remove('d-block')
            imgOnEl.classList.add('d-none')
            imgOffEl.classList.remove('d-none')
            imgOffEl.classList.add('d-block')
        
            btnEl.innerHTML = ('Accendi')
        }
})


