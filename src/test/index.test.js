import React from 'react';
import test from 'tape';
import dom from 'cheerio';
import reactDom from 'react-dom/server';

const render = reactDom.renderToStaticMarkup;

import landing from '../components/Pages/Landing';

test('Landing', nest => {
  nest.test('...Welcome Message', assert => {
    const msg = 'Landing should render an h3 with a welcome message';

    const Landing = landing(React);

    const welcomeMessage = 'Welcome to Reciplease';

    const $ = dom.load(render(<Landing />));
    const output = $('h3').html();

    const actual = output;
    const expected = welcomeMessage;

    assert.equal(actual, expected, msg);
    assert.end();
  })
});