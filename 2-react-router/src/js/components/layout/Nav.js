import React from 'react';
import { Link } from 'react-router';

const Nav = React.createClass({
    render: function() {
        return (
            <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
                <div class="container">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                    </div>
                </div>
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav">
                        <li>
                            <Link to="/">Featured</Link>
                        </li>
                        <li>
                            <Link to="/archives">Archives</Link>
                        </li>
                        <li>
                            <Link to="/settings">Settings</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
});

export default Nav;