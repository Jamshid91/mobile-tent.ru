const selects = document.querySelectorAll('.select-head'),
selectLists = document.querySelectorAll('.select-options li');


selects.forEach(select => {
select.addEventListener('click', () => {
select.parentElement.classList.toggle('showSelect')
});
})

selectLists.forEach(list => {
list.addEventListener('click', () => {
list.parentElement.parentElement.classList.toggle('showSelect');
list.parentElement.previousElementSibling.children[0].textContent = list.textContent;
});
});

document.addEventListener('click', (e) => {
selects.forEach(select => {
select.parentElement.contains(e.target)||(select.parentElement.classList.remove('showSelect'))
})
});