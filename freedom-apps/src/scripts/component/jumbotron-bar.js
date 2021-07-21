class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="heros">
    <h1 class="hero__title">Jangan berkata kalau belum membuktikannya</h1>
    <picture>
    <source media="(min-width: 600px)" srcset="./images/hero-image_2-large.jpg"> 
    <img 
        src="./images/hero-image_2-small.jpg" 
        alt="image restoran"
        class="hero"> 
    </picture>
    </div>
      `;
  }
}

customElements.define('jumbotron-bar', AppBar);
