import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div>
            <div>
                <Link to="/">Home</Link>
                <Link to="/ipad">Ipad</Link>
                <Link to="/iphone">Iphone</Link>
                <Link to="/watch">Watch</Link>
                <Link to="/tv">TV</Link>
                <Link to="/music">Music</Link>
                <Link to="/support">Support</Link>
                <Link to="/search">Search</Link>
                <Link to="/bag">Bag</Link>

            </div>

        </div>
    );
}

export default Nav;