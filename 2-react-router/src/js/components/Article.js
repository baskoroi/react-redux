import React from 'react';

const Article = React.createClass({
    render: function() {
        const { title } = this.props;
        return (
            <div class="col-md-4">
                <h3>{title}</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua.</p>
            </div>
        );
    }
});

export default Article