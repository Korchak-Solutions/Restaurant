import './styles.scss';
import {HiOutlineShoppingBag} from 'react-icons/hi2';

export const Header = () => {
  return (
    <header className="header">
      <span className="header-restaurant-name">bbc house</span>
      <div className="header-navigation">
        <span>Home</span>
        <span>About Us</span>
        <span>Shop</span>
        <span>Blog</span>
        <span>Pages</span>
        <span>Contact</span>
      </div>
      <div className="header-right-side-wrapper">
        <div className="header-basket">
          <HiOutlineShoppingBag style={{width: 25, height: 25}} />
          <div className="basket-items-circle">0</div>
        </div>
        <button className="header-contactus-button">Contact Us</button>
      </div>
    </header>
  );
};
