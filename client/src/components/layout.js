import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Navbar from './Navbar';
import '../styles/layout.css';

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <div className='container'>
            <Navbar siteTitle={data.site.siteMetadata.title} />
            <div>
                <main>{children}</main>
                <footer>© Cole Johnson</footer>
            </div>
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;
