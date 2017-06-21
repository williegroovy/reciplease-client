import React from 'react';
import test from 'tape';
import dom from 'cheerio';
import reactDom from 'react-dom/server';

const render = reactDom.renderToStaticMarkup;

import Header from '../components/Header/Header';

test('Header', nest => {
  nest.test('...Header should render the navbar', assert => {
    const msg = 'Header should render the navbar';

    //const Header = header(React);

    const $ = dom.load(render(<Header />));
    const output = $('.nav').html();

    const actual = output > 0;
    const expected = true;

    assert.equal(actual, expected, msg);
    assert.end();
  })
});