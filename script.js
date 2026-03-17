const btnEl = document.querySelector('button')
const imgOffEl = document.querySelector('.d-block')
const imgOnEl = document.querySelector('.d-none')

btnEl.addEventListener('click', function (){
    imgOffEl.classList.remove('d-block')
    imgOffEl.classList.add('d-none')
    imgOnEl.classList.remove('d-none')
    imgOnEl.classList.add('d-block')
})