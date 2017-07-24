import React from 'react';
import test from 'tape';
import dom from 'cheerio';
import reactDom from 'react-dom/server';

const render = reactDom.renderToStaticMarkup;

import Header from '../components/junk/Nav/Header';

test('Header', nest => {
  nest.test('...Dashboard should render the navbar', assert => {
    const msg = 'Dashboard should render the navbar';

    //const Dashboard = header(React);

    const $ = dom.load(render(<Header />));
    const output = $('.Dashboard').html();

    const actual = output > 0;
    const expected = true;

    assert.equal(actual, expected, msg);
    assert.end();
  })
});