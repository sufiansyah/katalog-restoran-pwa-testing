import DaftarResturant from '../../data/daftarresturant-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <section class="content">
    <div id="maincontent">
    <div id="resto" class="posts">
    </div>
    </div>
    `;
  },

  async afterRender() {
    const resto = await DaftarResturant.daftarResturant();
    const restoContainer = document.querySelector('#resto');
    resto.forEach((resturants) => {
      restoContainer.innerHTML += createRestoItemTemplate(resturants);
    });
  },
};

export default Home;
