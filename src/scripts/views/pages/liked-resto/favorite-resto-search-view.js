/* eslint-disable no-shadow */
import { createRestoItemTemplate } from '../../templates/template-creator';

class FavoriteRestoSearchView {
  getTemplate() {
    return `
    <section class="content">
    <h2 class="detail__header">Your Liked Movie</h2>
    <input id="query" type="text" class="detail__search" name="search" placeholder="Search..">
    <div id="maincontent">
    <div id="resto" class="posts">
    </div>
    </div>
    `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showResto(resto) {
    this.showFavoriteResto(resto);
  }

  showFavoriteResto(resto = []) {
    let html;
    if (resto.length) {
      html = resto.reduce((carry, resto) => carry.concat(createRestoItemTemplate(resto)), '');
    } else {
      html = this._getEmptyRestoTemplate();
    }

    document.getElementById('resto').innerHTML = html;

    document.getElementById('resto').dispatchEvent(new Event('resto:updated'));
  }

  _getEmptyRestoTemplate() {
    return '<div class="resto-item">Tidak ada resto untuk ditampilkan</div>';
  }
}

export default FavoriteRestoSearchView;
