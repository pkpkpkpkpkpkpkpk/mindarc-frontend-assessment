import mobileHeaderImage from './../../assets/images/600x600.png';
import desktopHeaderImage from './../../assets/images/1920x650.png';
import ThumbnailElement from './ThumbnailElement';
import data from './../../assets/json/data.json';
import AccordionsElement from './AccordionsElement';
import TabsElement from './TabsElement';

export default () => {
  const main = document.createElement('div');
  main.classList.add('main');

  // Navigation page
  main.innerHTML = `
    <div class="navigation">
      <a href="/?=exercise-1" class="navigation__link button">EXERCISE 1</a>
      <a href="/?=exercise-2" class="navigation__link button">EXERCISE 2</a>
    </div>
  `;

  // Exercise 1 page
  if(location.search.includes('exercise-1')) {
    main.innerHTML = `
      <div class="header">
        <div class="header__image">
          <img src="${mobileHeaderImage}" class="header__image-inner is-mobile" />
          <img src="${desktopHeaderImage}" class="header__image-inner is-desktop" />
        </div>
        
        
        <div class="header__content">
          <h1 class="header__heading">Hello Developer!</h1>
          <h2 class="header__subheading">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
        </div>
      </div>
  
      <div class="thumbnails">
        <div class="thumbnails__inner">
          ${ThumbnailElement('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.')}
          ${ThumbnailElement('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')}
          ${ThumbnailElement('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.')}
        </div>
      </div>
    `;
  }

  // Exercise 2 page
  if(location.search.includes('exercise-2')) {
    main.innerHTML = `
      ${AccordionsElement(data)}
      ${TabsElement(data)}
    `;
  }

  return main;
}
