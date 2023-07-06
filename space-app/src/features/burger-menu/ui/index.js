import "./burger-menu.css"

export const BurgerMenu = () => (
  <div className="hamburger-menu">
    <input id="menuToggle" type="checkbox"/>
    <label className="menuPseudoButton" htmlFor="menuToggle">
      <span/>
    </label>
    
    <ul className="menuContainer">
      <li><a className="menuItem" href="/">Home</a></li>
      <li><a className="menuItem" href="/">Products</a></li>
      <li><a className="menuItem" href="/">Cart</a></li>
    </ul>
  </div>
)
