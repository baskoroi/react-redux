import React from 'react';

const Archives = React.createClass({
    render: function() {
        const { params, location } = this.props;
        const { article } = params;
        const { query } = location;
        const { date, filter } = query;

        return (
            <div>
                <h1>Archives</h1>
                <p><strong>Title: {article || 'Untitled'}</strong></p>
                <p>Date: {date || 'No date specified'}</p>
                <p>Filter: {filter || 'No filter specified'}</p>
            </div>
        );
    }
});

export default Archives;