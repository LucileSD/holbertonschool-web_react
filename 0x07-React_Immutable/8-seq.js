import { Seq } from 'immutable';

export default function printBestStudents(object) {
  const newSequence = Seq(object)
    .filter(x => x.score > 70);

  const newObj = newSequence.toJS();

  const capitalize = (name) => name.charAt(0).toUpperCase() + name.slice(1);

  Object.keys(newObj).map(item => {
    newObj[item].firstName = capitalize(newObj[item].firstName);
    newObj[item].lastName = capitalize(newObj[item].lastName);
  });

  console.log(newObj);
}
