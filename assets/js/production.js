const often_askeds = document.querySelectorAll('.often-asked-head');


often_askeds.forEach(elem => {
    elem.addEventListener('click', () => {
        elem.parentElement.classList.toggle('showBlock')
    })
})