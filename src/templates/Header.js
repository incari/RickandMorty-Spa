import logo from '../../public/rick-and-morty-logo.png';
const Header = () => {
  const view = `
    <div class="Header-main">
      <div class="Header-logo">
        <h1>
          <a href="/">
          <img src="${logo}"</img>
          </a>
        </h1>
      </div>
      <div class="Header-nav">
      <form class="form-inline">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
       <!-- <a href="#/about/">About</a> -->
      </div>
    </div>
  `;
  return view;
};

export default Header;
