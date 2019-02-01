import './main.css';
import _ from 'lodash';
import images from './images/index';


function createImageElements() {
  _.each(images, imageSource => {
    // fetch the template
    let imgTemplate = document.getElementById('gallery_image');
    let newImage = document.importNode(imgTemplate.content, true);

    newImage.querySelector('img').src = `./images/${imageSource}`;

    document.getElementById('gallery_holder').appendChild(newImage);
  });
}

createImageElements();