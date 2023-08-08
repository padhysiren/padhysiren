import "./Header.css"
import img1 from '../../assets/AMZN_BIG.jpg'
import { Link } from "react-router-dom"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from "../../StateProvider";
const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  
  return (
    <nav className="header">
     {/*logo on the left -> img */}
     <div className="header_logod">
     <Link to="/">
     <img className="header_logo" src={img1} alt="Amazon Logo not Available" />
     </Link>
     </div>
     {/* Search box */}
     <div className="header_search">
     <input type="text" className="header_searchInput" />
      <SearchIcon className="header_searchIcon"/>
      </div>
     {/* 3 Links */}
      <div className="header_nav">
         {/* 1st link */}
      <Link to="/" className="header_link">
        <div className="header_option">
        <span className="header_optionLineOne">Hello Siren</span>
        <span className="header_optionlineTwo">Sign In</span>
        </div>
      </Link>
         {/* 2nd link */}
         <Link to="/" className="header_link">
        <div className="header_option">
        <span className="header_optionLineOne">Return</span>
        <span className="header_optionlineTwo">& Orders</span>
        </div>
      </Link>
         {/* 3rd Link */}
         <Link to="/" className="header_link">
        <div className="header_option">
        <span className="header_optionLineOne">Your</span>
        <span className="header_optionlineTwo">Prime</span>
        </div>
          </Link>
        {/*4th Link */}
          <Link to="/checkout" className="header_link">
            <div className="header_optionBasket">
                {/* Shopping Basket icon*/}
                <ShoppingBasketIcon/>
                {/* Number of items in the basket */}
                <span className="header_optionlineTwo header_basketCount">{basket?.length}</span>
            </div>
      </Link>
      </div>
     {/* Basket icon with number*/}
    </nav>
  )
}

export default Header