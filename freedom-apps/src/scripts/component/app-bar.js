class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="container">
      <button id="hamburgerButton" class="ikon header__menu"  aria-label="navigation-menu">☰</button>
      <div class="header">
          <h1>FREEDOM</h1>        
      </div>
      <nav id="navigationDrawer"  class="nav">
      <ul class="nav__ul">
        <li class="nav__li"><a href="#/home">Home</a></li>
        <li class="nav__li"><a href="#/like">Favorite</a></li> 
        <li class="nav__li"><a href="https://github.com/sufiansyah" target='_blank' rel="noreferrer">About Us</a></li>           
    </ul>
</nav>
</div>
        `;
  }
}

customElements.define('app-bar', AppBar);
