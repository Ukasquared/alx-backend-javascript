export default function getStudentIdsSum(arr) {
  const sum = arr.reduce((accumulator, currentId) => accumulator + currentId.id, 0);
  return sum;
}
