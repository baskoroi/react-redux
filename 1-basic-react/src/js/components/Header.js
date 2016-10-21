import React from 'react';
import Title from './header/Title';

const Header = React.createClass({
    handleChange: function(e) {
        const title = e.target.value;
        this.props.changeTitle(title);
    },
    render: function() {
        return (
            <header>
                <Title title={this.props.title} />
                <input value={this.props.title} onChange={this.handleChange}/>
            </header>
        );
    }
});

export default Header;