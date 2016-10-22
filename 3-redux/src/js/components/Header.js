import React from "react";

const Header = React.createClass({
    handleTitleChange: function(ev) {
        const title = ev.target.value;
        this.props.changeTitle(title);
    },
    render: function() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <input value={this.props.title} onChange={this.handleTitleChange} />
            </div>
        );
    }
});

export default Header;