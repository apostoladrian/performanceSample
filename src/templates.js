const rootElement = () => `This is the content of my root element`;
const galleryImage = imageSource => `
<div class="image">
  <img src="${imageSource}" />
</div>`;

export default {
  rootElement,
  galleryImage
};