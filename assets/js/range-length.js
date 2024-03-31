function controlfromLength(fromLength, toLength) {
    const [from, to] = getParsed(fromLength, toLength, minLength);
    fillSlider(fromLength, toLength, '#C6C6C6', '#73A8FF', toLength);
    if (from > to) {
      fromLength.value = to;
    } 
    minLength.textContent = fromLength.value
    }

    
    function controltoLength(fromLength) {
    const [from, to] = getParsed(fromLength, toLength, maxLength);
    fillSlider(fromLength, toLength, '#C6C6C6', '#73A8FF', toLength);
    setToggleAccessible(toLength);
    if (from <= to) {
      toLength.value = to;
    } else {
      toLength.value = from;
    }
    maxLength.textContent = toLength.value
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
    const toLength = document.querySelector('#toLength');
    if (Number(currentTarget.value) <= 0 ) {
      toLength.style.zIndex = 2;
    } else {
      toLength.style.zIndex = 0;
    }
    }

   
    
    const fromLength = document.getElementById('fromLength');
    const toLength = document.getElementById('toLength');
    const minLength = document.getElementById('minLength');
    const maxLength = document.getElementById('maxLength');

    fillSlider(fromLength, toLength, '#C6C6C6', '#73A8FF', toLength);
    setToggleAccessible(toLength);
    
    
    fromLength.oninput = () => controlfromLength(fromLength, toLength);
    toLength.oninput = () => controltoLength(fromLength, toLength);
 