import { dataItem } from "../tools/Types";

export default (data:Array<dataItem>) => {
  const tabs = document.createElement('div');
  tabs.classList.add('tabs');

  const titles = document.createElement('div');
  titles.classList.add('tabs__titles');

  data.forEach((item:dataItem, index:number) => {
    const title = document.createElement('div');
    title.setAttribute('data-tab', '');
    title.classList.add('tabs__title');
    if(index === 0) title.classList.add('is-active');

    title.innerHTML = `
      <span class="tabs__title-inner">${item.title}</span>
    `;
    
    titles.appendChild(title);
  });

  const contents = document.createElement('div');
  contents.classList.add('tabs__contents');

  data.forEach((item:dataItem, index:number) => {
    const content = document.createElement('div');
    content.setAttribute('data-content', '');
    content.classList.add('tabs__content');
    if(index === 0) content.classList.add('is-active');

    content.innerHTML = item.content;
    
    contents.appendChild(content);
  });

  tabs.appendChild(titles);
  tabs.appendChild(contents);

  return tabs.outerHTML;
}