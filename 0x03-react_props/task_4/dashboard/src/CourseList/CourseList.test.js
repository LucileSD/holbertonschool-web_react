import React from 'react';
import { shallow } from 'enzyme';

import CourseList from './CourseList';

describe('<CourseList />', () => {
  it('renders CourseList component without crashing', () => {
    shallow(<CourseList />);
  });

  it('renders the 5 different rows', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.html()).toEqual(
      "<table id=\"CourseList\"><thead><th>Available courses</th><th></th><th>Course name</th><th>Credit</th></thead><tbody><td>ES6</td><td>60</td><td>Webpack</td><td>20</td><td>React</td><td>40</td></tbody></table>"
    );
    expect(wrapper.find('CourseListRow')).toHaveLength(5);
  });
})
