import { Map } from 'immutable';

export const getAllCourses = (state) => {
  const courses = Map(state.courses);
  if(courses) {
    return courses.valueSeq();
  }
  return courses;
}
