import React from 'react';

import Nav from '../components/layout/Nav'
import Footer from '../components/layout/Footer'

const Layout = React.createClass({
    render: function() {
        return (
            <div>
                <Nav />

                <div class="container">
                    <div id="main" class="row">
                        <div class="col-lg-12">
                            {this.props.children}
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        );
    }
});

export default Layout;