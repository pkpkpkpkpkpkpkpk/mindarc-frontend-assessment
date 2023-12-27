import mainElement from './elements/MainElement';
import initAccordions from './components/Accordions';
import initTabs from './components/Tabs';

// Generate HTML DOM elements
document.body.appendChild(mainElement());

// After DOM is loaded, run scripts
document.addEventListener('DOMContentLoaded', () => {
  initAccordions();
  initTabs();
});
