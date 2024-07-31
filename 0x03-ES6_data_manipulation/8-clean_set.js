export default function cleanSet(set, startString) {
  if (typeof startString !== 'string') {
    return '';
  }
  const newString = [];
  for (const item of set) {
    if (startString && item.startsWith(startString)) {
      newString.push(item.substring(startString.length));
    }
  }
  return newString.join('-');
}
