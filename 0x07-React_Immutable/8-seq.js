import { Seq } from 'immutable';

export default function printBestStudents(object) {
  const capitalize = (name) => name.charAt(0).toUpperCase() + name.slice(1);
  const newSequence = Seq(object)
    .filter(x => x.score > 70)
    .map((item) => {
      const { firstName, lastName } = item;
      return {
        ...item,
        firstName: capitalize(firstName),
        lastName: capitalize(lastName),
      };
    }).toJS();

  console.log(newSequence);
}
