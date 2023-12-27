import thumbnailImage from './../../assets/images/400x300.png';

export default (copy:string) => {
  const thumbnail = document.createElement('div');
  thumbnail.classList.add('thumbnail');
  thumbnail.innerHTML = `
    <div class="thumbnail__image">
      <div class="thumbnail__image-inner">
        <img src="${thumbnailImage}" class="thumbnail__image-inner" />
      </div>
    </div>

    <span class="thumbnail__copy">${copy}</span>
    <a href="/" class="thumbnail__link button">READ MORE</a>
  `;
  return thumbnail.outerHTML;
}
