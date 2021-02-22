import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <React.Fragment>
            <h1>Hacker new Clone</h1>
            <div className="nav-link">
                <NavLink to="/top" activeClassName="active">
                    Latest Stories
                </NavLink>
                <NavLink to="/best" activeClassName="active">
                    Best Stories
                </NavLink>
            </div>
        </React.Fragment>
    )
}

export default Header;