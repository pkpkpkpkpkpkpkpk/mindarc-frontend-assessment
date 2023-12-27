export default () => {
  const accordions:NodeListOf<HTMLDivElement> = document.querySelectorAll('[data-accordion]');
  
  accordions.forEach(accordion => {
    const title:HTMLDivElement = accordion.querySelector('[data-title]');
    
    title.addEventListener('click', (e:MouseEvent) => {
      e.preventDefault();
      const isActive = accordion.classList.contains('is-active');
      accordions.forEach(accordion => accordion.classList.remove('is-active'));      
      if(!isActive) accordion.classList.add('is-active');
    });
  });
}
