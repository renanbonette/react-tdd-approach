import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should render the button correctly', () => {
  const wrapper = mount(<App />);
  const buttonText = 'Press';
  expect(wrapper.contains(buttonText)).toEqual(true);
});