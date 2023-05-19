import React from 'react';
import { shallow } from 'enzyme';

import NotificationItem from './NotificationItem';

describe('<NotificationItem />', () => {
  it('renders without crashing', () => {
    shallow(<NotificationItem />);
  });

  it('should render <li data-priority="default">test</li>', () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.find('li').text()).toEqual('test');
    expect(wrapper.find('li').prop('data-priority')).toEqual('default');
  });

  it('should render <li data-priority="default"><u>test</u></li>', () => {
    const wrapper = shallow(<NotificationItem type="default" html={{ __html: '<u>test</u>' }} />);
    expect(wrapper.html()).toEqual('<li data-priority="default"><u>test</u></li>');
  });
})
