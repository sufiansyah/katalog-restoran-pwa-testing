import UrlParser from '../../routes/url.parsel';
import DaftarResturant from '../../data/daftarresturant-source';
import {
  createRestoDetailTemplate,
  createCustomerReviewTemplate,
  createDescriptionTemplate,
  createCustomerButtonTemplate,
  createMenuTemplate,
} from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
    <div>
    <div id="resto"></div>
    <div id="menus"></div>
    <div id="description" class="details"></div>
    <div id="customer" class="buttonReview"></div>
    <div id="reviews"></div>
    <div id="likeButtonContainer"></div>
    </div>
    
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await DaftarResturant.detailResturant(url.id);
    const restoContainer = document.querySelector('#resto');
    restoContainer.innerHTML = createRestoDetailTemplate(resto.restaurant);

    const menuContainer = document.querySelector('#menus');
    menuContainer.innerHTML = createMenuTemplate(resto.restaurant);

    const descriptionContainer = document.querySelector('#description');
    descriptionContainer.innerHTML = createDescriptionTemplate(resto.restaurant);

    const customerContainer = document.querySelector('#customer');
    customerContainer.innerHTML = createCustomerButtonTemplate();

    const buttonSave = document.querySelector('#buttonSave');
    buttonSave.addEventListener('click', () => {
      const nameInput = document.querySelector('#inputName').Value;
      const reviewInput = document.querySelector('#inputReview').Value;
      const dataInput = {
        id: resto.restaurant.id,
        name: nameInput,
        review: reviewInput,
      };
      DaftarResturant.reviewResturant(dataInput);
    });

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto: {
        id: resto.restaurant.id,
        name: resto.restaurant.name,
        rating: resto.restaurant.rating,
        city: resto.restaurant.city,
        pictureId: resto.restaurant.pictureId,
        description: resto.restaurant.description,
      },
    });

    const reviewContainer = document.querySelector('#reviews');
    reviewContainer.innerHTML = createCustomerReviewTemplate(resto.restaurant);
  },
};

export default Detail;
