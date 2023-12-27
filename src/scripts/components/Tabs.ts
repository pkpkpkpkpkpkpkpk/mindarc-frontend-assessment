export default () => {
  const tabs:NodeListOf<HTMLDivElement> = document.querySelectorAll('[data-tab]');
  const contents:NodeListOf<HTMLDivElement> = document.querySelectorAll('[data-content]');
  
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', (e:MouseEvent) => {
      e.preventDefault();
      const isActive = tab.classList.contains('is-active');
      tabs.forEach(tab => tab.classList.remove('is-active'));      
      if(!isActive) tab.classList.add('is-active');

      contents.forEach(content => content.classList.remove('is-active'));      
      if(!isActive) contents[index].classList.add('is-active');
    });
  });
}
