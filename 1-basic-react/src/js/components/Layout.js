import React from 'react';
import Header from './Header';

export default class Layout extends React.Component {
    constructor() {
        super();
        this.name = 'Baskoro';
    }

    render() {
        let list = [
            <Header key={1} />, 
            <Header key={2} />, 
            <Header key={3} />
        ];

        return (
            <div>
                {list}
            </div>
        );
    }
}
