import React from 'react';
import { IndexLink, Link } from 'react-router';

import NavItem from './NavItem'

const Nav = React.createClass({
    getInitialState: function() {
        return {
            collapsed: true
        };
    },
    toggleCollapse: function() {
        const collapsed = !this.state.collapsed;
        this.setState({collapsed});
    },
    render: function() {
        const { collapsed } = this.state;
        const navClass = collapsed ? 'collapse' : '';
        return (
            <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
                <div class="container">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" onClick={this.toggleCollapse}>
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                    </div>
                </div>
                <div class={'navbar-collapse ' + navClass} id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav">
                        <NavItem to="/" index={true} click={this.toggleCollapse}>Featured</NavItem>
                        <NavItem to="/archives" click={this.toggleCollapse}>Archives</NavItem>
                        <NavItem to="/settings" click={this.toggleCollapse}>Settings</NavItem>
                    </ul>
                </div>
            </nav>
        );
    }
});

export default Nav;