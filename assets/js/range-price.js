function controlfromPrice(fromPrice, toPrice) {
    const [from, to] = getParsed(fromPrice, toPrice, minPrice);
    fillSlider(fromPrice, toPrice, '#C6C6C6', '#73A8FF', toPrice);
    if (from > to) {
      fromPrice.value = to;
    } 
    minPrice.textContent = fromPrice.value
    }
    
    function controltoPrice(fromPrice) {
    const [from, to] = getParsed(fromPrice, toPrice, maxPrice);
    fillSlider(fromPrice, toPrice, '#C6C6C6', '#73A8FF', toPrice);
    setToggleAccessible(toPrice);
    if (from <= to) {
      toPrice.value = to;
    } else {
      toPrice.value = from;
    }
    maxPrice.textContent = toPrice.value
    }
    
    function getParsed(currentFrom, currentTo) {
    const from = parseInt(currentFrom.value, 10);
    const to = parseInt(currentTo.value, 10);
    return [from, to];
    }
    
    function fillSlider(from, to, sliderColor, rangeColor, controlSlider) {
      const rangeDistance = to.max-to.min;
      const fromPosition = from.value - to.min;
      const toPosition = to.value - to.min;
      controlSlider.style.background = `linear-gradient(
        to right,
        ${sliderColor} 0%,
        ${sliderColor} ${(fromPosition)/(rangeDistance)*100}%,
        ${rangeColor} ${((fromPosition)/(rangeDistance))*100}%,
        ${rangeColor} ${(toPosition)/(rangeDistance)*100}%, 
        ${sliderColor} ${(toPosition)/(rangeDistance)*100}%, 
        ${sliderColor} 100%)`;
    }
    
    function setToggleAccessible(currentTarget) {
    const toPrice = document.querySelector('#toPrice');
    if (Number(currentTarget.value) <= 0 ) {
      toPrice.style.zIndex = 2;
    } else {
      toPrice.style.zIndex = 0;
    }
    }

   
    
    const fromPrice = document.getElementById('fromPrice');
    const toPrice = document.getElementById('toPrice');
    const minPrice = document.getElementById('minPrice');
    const maxPrice = document.getElementById('maxPrice');

    fillSlider(fromPrice, toPrice, '#C6C6C6', '#73A8FF', toPrice);
    setToggleAccessible(toPrice);
    
    
    fromPrice.oninput = () => controlfromPrice(fromPrice, toPrice);
    toPrice.oninput = () => controltoPrice(fromPrice, toPrice);
 