import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import {useStateValue} from './StateProvider';
function Header() {
    const [{cart},dispatch] = useStateValue();
    return (
        <div className='header'>
            <Link to="/">
            <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
            </Link>

            <div className="header__search">
                <input className="header__searchInput" type="text" placeholder="search" />
                <SearchIcon
                    className="header__searchIcon" />

            </div>

            <div className="header_nav">
                <div className="header__option">
                    <span
                        className='header_optionLineone'>Hello</span>
                    <span
                        className='header_optionLinetwo'>Sign In</span>
                </div>

                <div className="header__option">
                    <span
                        className='header_optionLineone'>Returns </span>
                    <span
                        className='header_optionLinetwo'>Orders</span>
                </div>

                <div className="header__option">
                    <span
                        className='header_optionLineone'>Your </span>
                    <span
                        className='header_optionLinetwo'>Prime</span>

                </div>

            </div>
            <Link to="/checkout">
            <div className="header_optionbasket">
                <ShoppingCartIcon />
                <span className="header_optionLinetwo header_basketcount">{cart.length}</span>
            </div>
            </Link>
        </div>
    )
}
export default Header