import ClassRoom from './0-classroom.js'

export default function initializeRooms() {
  let classOne = new ClassRoom(19)
  let classTwo = new ClassRoom(20)
  let classThree = new ClassRoom(34)
  return [classOne, classTwo, classThree]
}
