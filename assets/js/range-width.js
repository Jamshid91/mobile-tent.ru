
function controlfromWidth(fromWidth, toWidth) {
    const [from, to] = getParsed(fromWidth, toWidth);
    fillSlider(fromWidth, toWidth, '#C6C6C6', '#73A8FF', toWidth);
    if (from > to) {
      fromWidth.value = to;
    } 
    minWidth.textContent = fromWidth.value
    }
    
    function controltoWidth(fromWidth) {
    const [from, to] = getParsed(fromWidth, toWidth, maxWidth);
    fillSlider(fromWidth, toWidth, '#C6C6C6', '#73A8FF', toWidth);
    setToggleAccessible(toWidth);
    if (from <= to) {
      toWidth.value = to;
    } else {
      toWidth.value = from;
    }
    maxWidth.textContent = toWidth.value
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
    const toWidth = document.querySelector('#toWidth');
    if (Number(currentTarget.value) <= 0 ) {
      toWidth.style.zIndex = 2;
    } else {
      toWidth.style.zIndex = 0;
    }
    }

   
    
    const fromWidth = document.getElementById('fromWidth');
    const toWidth = document.getElementById('toWidth');
    const minWidth = document.getElementById('minWidth');
    const maxWidth = document.getElementById('maxWidth');

    fillSlider(fromWidth, toWidth, '#C6C6C6', '#73A8FF', toWidth);
    setToggleAccessible(toWidth);
    
    
    fromWidth.oninput = () => controlfromWidth(fromWidth, toWidth);
    toWidth.oninput = () => controltoWidth(fromWidth, toWidth);
 