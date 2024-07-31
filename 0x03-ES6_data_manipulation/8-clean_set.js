export default function cleanSet(set, startString) {
  let newString = [];
  for (const item of set) {
    if (item.startsWith(startString))  {
      newString.push(item.substring(3)); 
    }
  }
  return newString.join('-');
}
