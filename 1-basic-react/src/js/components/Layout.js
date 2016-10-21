import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = React.createClass({
    getInitialState: function() {
        return {
            title: 'Welcome'
        };
    },
    changeTitle: function(title) {
        this.setState({ title });
    },
    render: function() {
        return (
            <div>
                <Header changeTitle={this.changeTitle} title={this.state.title} />
                <Footer />
            </div>
        );
    }
});

export default Layout;