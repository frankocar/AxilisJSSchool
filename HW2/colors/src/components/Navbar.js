import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends PureComponent {
    render() {
        return (
            <div className="navbar">
                <Link to="/rgb">RGB</Link>
                <Link to="/bw">BW</Link>
            </div>
        );
    }
}

export default Navbar;