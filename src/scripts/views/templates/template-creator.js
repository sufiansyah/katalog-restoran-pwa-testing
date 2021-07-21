import CONFIG from '../../globals/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const createRestoDetailTemplate = (restaurants) => `
<h2 class="detail__name"><a href="#">${restaurants.name}</a></h2>
<div class="detail">
<img class="detail__poster lazyload" data-src="${CONFIG.BASE_IMAGE_URL}${restaurants.pictureId}" alt="${restaurants.name}">
<div class="detail__info">
<h3><a href="#">Information</a></h3>
<div class="detail__infos">
  <h4><a href="#">Kota</a></h4>
  <p>${restaurants.city}</p>
  <h4><a href="#">Address</a></h4>
  <p>${restaurants.address}</p>
  <h4><a href="#">Categories</a></h4>
  <p>${restaurants.categories.map((names) => names.name).join(', ')}</p>
  <h4><a href="#">Rating</a></h4>
  <p>${restaurants.rating}</p>
</div>
</div>
</div>
`;

const createMenuTemplate = (restaurant) => `
<div class="menu">
<h3><a href="#">Menu</a></h3>
<div class="menus">
<div class="food">
<h4><a href="#">Food</a></h4>
   ${restaurant.menus.foods.map((food) => `
   <ul>
       <li>${food.name}</li>
       `).join(' ')}
   </ul>
</div>     
<div class="drink">
<h4><a href="#">Drink</a></h4>
   ${restaurant.menus.drinks.map((drink) => `
   <ul>
       <li>${drink.name}</li>
       `).join(' ')}
   </ul>     
</div>    
</div>
</div>
   `;

const createCustomerReviewTemplate = (restaurant) => `
<div class="review">
  <h3><a href="#">Customer Reviews</a></h3>
<div class="custom">
${restaurant.customerReviews.map((customer) => `
<div class="customer">
  <h4 class="customers">Name</h4>    
      <p>${customer.name}</p>
  <h4>Date</h4>
      <p>${customer.date}</p>
  <h4>Review</h4>
      <p>${customer.review}</p>
</div>  
`).join(' ')}
</div>
</div>
`;

const createDescriptionTemplate = (restaurants) => `
<div class="details__description">
  <h3><a href="#">Description</a></h3>
<div class="details__descriptions">  
  <p class="details__teks">${restaurants.description}</p>
</div>
</div>
`;

const createRestoItemTemplate = (restaurants) => `
<div>
<article class="post-item">
    <h2 class="post-item__title"><a href="#">${restaurants.city}</a></h2>
    <img class="post-item__thumbnail lazyload " data-src="${CONFIG.BASE_IMAGE_URL}${restaurants.pictureId}" 
    alt="${restaurants.name || '-'}">
    <figcaption class="post-item__figcaption"><a href="#">Rating: ${restaurants.rating || '-'}</a></figcaption>
    <div class="post-item__content">
        <h3 class="resto__title"><a href="${`/#/detail/${restaurants.id || '-'}`}">${restaurants.name || '-'}</a></h3>
        <p class="post-item__description">${restaurants.description || '-'}</p>
    </div>
</article>
</div>
`;

const createCustomerButtonTemplate = () => `
<form>
  <label for="name">Name</label>
  <input type="text" id="inputName" name="name">
  <label for="review">Review</label>
  <input type="text" id="inputReview" name="review">
  <input type="button" id="buttonSave" value="Save">
</form>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoDetailTemplate,
  createRestoItemTemplate,
  createCustomerReviewTemplate,
  createDescriptionTemplate,
  createMenuTemplate,
  createCustomerButtonTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
