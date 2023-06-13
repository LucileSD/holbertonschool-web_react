import { Seq } from 'immutable';

export default function printBestStudents(object) {
  const capitalize = (name) => name.charAt(0).toUpperCase() + name.slice(1);

  const newSequence = Seq(object)
    .filter((x) => x.score > 70)
    .map((item) => ({
      ...item,
      firstName: capitalize(item.firstName),
      lastName: capitalize(item.lastName),
    })).toJS();

  console.log(newSequence);
}
