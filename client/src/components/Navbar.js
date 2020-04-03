import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Navbar = ({ siteTitle }) => (
    <nav className='nav'>
        <div className='header'>
            <h1>
                <Link>{siteTitle}</Link>
            </h1>
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
