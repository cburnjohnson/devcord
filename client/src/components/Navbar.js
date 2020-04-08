import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Navbar = ({ siteTitle }) => (
    <nav className='nav'>
        <div className='header'>
            <h1>
                <Link to='/'>{siteTitle}</Link>
            </h1>
            <ul>
                <li>
                    <Link activeClassName='active-page' to='/joinroom'>
                        Leave Room
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
);

Navbar.propTypes = {
    siteTitle: PropTypes.string
};

Navbar.defaultProps = {
    siteTitle: ``
};

export default Navbar;
