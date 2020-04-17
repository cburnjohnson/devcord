import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Navbar = ({ siteTitle }) => {
    const { logout } = useContext(GlobalContext);

    return (
        <nav className='nav'>
            <div className='header'>
                <h1>{siteTitle}</h1>
                <ul>
                    <li>
                        <Link
                            activeClassName='active-page'
                            to='/joinroom'
                            onClick={logout}
                        >
                            Leave Room
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

Navbar.propTypes = {
    siteTitle: PropTypes.string
};

Navbar.defaultProps = {
    siteTitle: ``
};

export default Navbar;
