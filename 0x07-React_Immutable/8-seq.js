import { Seq } from 'immutable';

export function printBestStudents(grades) {
  const newSequence = Seq(grades)
    .filter((x) => {
      return x.score > 70;
    });

  const newObj = newSequence.toJS();

  Object.keys(newObj).map(item => {
    newObj[item].firstName = newObj[item].firstName.charAt(0).toUpperCase() + newObj[item].firstName.slice(1);
    newObj[item].lastName = newObj[item].lastName.charAt(0).toUpperCase() + newObj[item].lastName.slice(1);
  })

  console.log(newObj);
}
