import { fromJS } from 'immutable';

function getImmutableObject(object) {
  return fromJS(object);
}

export default getImmutableObject;

const exObj = {
  fear: true,
  smell: -1033575916.9145899,
  wall: false,
  thing: -914767132
}
const exemple = getImmutableObject(exObj);
console.log(exemple);
