export default function getStudentsByLocation(arr, location) {
  const newArr = arr.filter((element) => element.location === location);
  return newArr;
}
