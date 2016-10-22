import React from 'react';

import Article from '../components/Article';

const Featured = React.createClass({
    render: function() {
        const articles = [
            'Clinton vs. Trump',
            'Manchester: a city or union?',
            'Brexit: is it the last farewell?',
            'It\'s not the End!'
        ].map((title, i) => <Article key={i} title={title} />);

        const adTexts = [
            'Seek and praise the Lord!',
            'Food for the new generation: 90% off!',
            'Meshuggah: The Violent Sleep of Reason',
            'Are you ready?',
            'Let\'s rock this world!'
        ];

        const adSpot = <div class="well">{adTexts[Math.floor(Math.random() * (adTexts.length - 1))]}</div>

        return (
            <div>
                <h1>KillerNews.Net</h1>
                <h2>What is KillerNews?</h2>
                <p>This is just a random news feed I made to learn React... 
                I populated this site with lorem news and some ad spot for a 
                more complete and less foolish look, though. :D</p>
                <h2>Advertisement</h2>
                <div class="row">{adSpot}</div>
                <h2>Articles</h2>
                <div class="row">
                    {articles}
                </div>
            </div>
        );
    }
});

export default Featured;