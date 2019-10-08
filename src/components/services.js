export function getAnimals() {
  return fetchAnimals()
}

export function postAnimal(data) {
  return fetchAnimals({ method: 'POST', data })
}

export function patchAnimal(id, data) {
  return fetchAnimals({ method: 'PATCH', id, data })
}

function fetchAnimals({ method = 'GET', id = '', data } = {}) {
  return fetch('/animals/' + id, {
    method,
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json'
    }
  }).then(res => res.json())
}

export function getEvents() {
  return fetchEvents()
}

export function postEvent(data) {
  return fetchEvents({ method: 'POST', data })
}

export function patchEvent(id, data) {
  return fetchEvents({ method: 'PATCH', id, data })
}

function fetchEvents({ method = 'GET', id = '', data } = {}) {
  return fetch('/dailyevents' + id, {
    method,
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json'
    }
  }).then(res => res.json())
}
