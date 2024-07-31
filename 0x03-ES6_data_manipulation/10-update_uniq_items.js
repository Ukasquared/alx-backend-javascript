function updateUniqueItems(map) {
  map.forEach((key, value) => {
    if (value === 1) {
      map.set(key, 100);
    }
  });
}
export default updateUniqueItems;
