
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


  const showFilters = document.querySelectorAll('.filter-item-head'),
        filterBox = document.querySelector('.filter-box'),
        showFilter_btn = document.querySelector('.showFilter__btn'),
        filterSort = document.querySelector('.filter-sort'),
        showSort_btn = document.querySelector('.showSort__btn');

  showFilters.forEach(show => {
    show.addEventListener('click', () => {
        show.parentElement.classList.toggle('showFilter')
    })
  });

  showFilter_btn.addEventListener('click', () => {
    filterBox.classList.toggle('showFilterBox')
  });

  showSort_btn.addEventListener('click', () => {
    console.log(filterSort)
    filterSort.classList.toggle('showFilterSort')
  });


