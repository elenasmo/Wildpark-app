export function getAnimalsFilterAndSorted(animalList, sortBy, filter) {
  let newAnimalList = animalList.slice()
  if (filter === 'liked') {
    newAnimalList = newAnimalList.filter(animal => animal.isLiked === true)
  }
  if (sortBy === 'station') {
    newAnimalList.sort((a, b) => a.station - b.station)
  }
  if (sortBy === 'title') {
    newAnimalList.sort((a, b) => (a.title > b.title ? 1 : -1))
  }
  return newAnimalList
}
