import { dataItem } from "../tools/Types";

export default (data:Array<dataItem>) => {
  const accordions = document.createElement('div');
  accordions.classList.add('accordions');

  data.forEach((item:dataItem, index:number) => {
    const accordion = document.createElement('div');
    accordion.setAttribute('data-accordion', '');
    accordion.classList.add('accordions__accordion');
    if(index === 0) accordion.classList.add('is-active');

    accordion.innerHTML = `
      <div class="accordions__accordion-inner">
        <div data-title class="accordions__title">
          <span class="accordions__title-inner">${item.title}</span>
        </div>
        <div class="accordions__content">${item.content}</div>
      </div>
    `;
    
    accordions.appendChild(accordion);
  });

  return accordions.outerHTML;
}
