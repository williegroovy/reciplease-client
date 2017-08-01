import React from 'react';
import { mount, render, shallow } from 'enzyme';

import App from './App';
import Hello from './Hello';

describe('<App />', () => {
  it('renders App', () => {
    expect(shallow(<App />).containsMatchingElement(App)).toBe(true);
  });

  it('renders Hello', () => {
    expect(shallow(<App />).contains(<Hello />)).toBe(true);
  });

  it('should be selectable by class "app"', () => {
    expect(shallow(<App />).is('.app')).toBe(true);
  });

  it('should mount in a full DOM', () => {
    expect(mount(<App />).find('.app').length).toBe(1);
  });

  it('should render static HTML', () => {
    expect(render(<App />).text()).toEqual(
      'Welcome to ReactWelcome to the...THUNDER DOME'
    );
  });
});
