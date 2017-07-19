import React from 'react';
import test from 'tape';
import dom from 'cheerio';
import reactDom from 'react-dom/server';

const render = reactDom.renderToStaticMarkup;

import Header from '../components/junk/Nav/Header';

test('Header', nest => {
  nest.test('...DashboardHeader should render the navbar', assert => {
    const msg = 'DashboardHeader should render the navbar';

    //const DashboardHeader = header(React);

    const $ = dom.load(render(<Header />));
    const output = $('.DashboardHeader').html();

    const actual = output > 0;
    const expected = true;

    assert.equal(actual, expected, msg);
    assert.end();
  })
});