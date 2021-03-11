const lightSequence = [
    {color: 'red', time: 3000},
    {color: 'green', time: 2000},
    {color: 'yellow', time: 1000}
  ];
  
  // Cache the divs for the lights
  const lightEls = document.querySelectorAll('main > div');
  
  // Variable to track the current light
  let curLightIdx = 0;  // Start with red object
  
  function setLightsToBlack(el){
    el.style.backgroundColor = 'black'
  }
  
  function renderLight(cb) {
    // Turn all lights off
    lightEls.forEach(setLightsToBlack);
  
  
    lightEls[curLightIdx].style.backgroundColor = lightSequence[curLightIdx].color;
  
  
    // Invoke the callback when this light's time has expired
    setTimeout(cb, lightSequence[curLightIdx].time);
  }
  
  function renderNextLight() {
    renderLight(renderNextLight);
    // Increment and reset to zero when 3 is reached
    curLightIdx = ++curLightIdx % 3;
  }
  
  // Make it start!
  renderNextLight();