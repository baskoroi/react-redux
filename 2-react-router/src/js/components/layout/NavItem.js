import React from 'react';
import { Link, IndexLink } from 'react-router';

const NavItem = React.createClass({
    contextTypes: {
        router: React.PropTypes.object
    },
    render: function() {
        const { router } = this.context;
        const { index, onlyActiveOnIndex, click, to, children, ...props } = this.props;

        const isActive = router.isActive(to, index);
        const LinkComponent = index ? IndexLink : Link;
        return (
            <li className={isActive ? 'active' : ''}>
                <LinkComponent to={to} onClick={click} {...props}>{children}</LinkComponent>
            </li>
        );
    }
});

export default NavItem;