import React from 'react'
import Animal from './Animal'

import tiger from './img/tiger.png'
import wollschweine from './img/wollschweine.png'
import bear from './img/bear.png'
import gänsegeier from './img/gänsegeier.png'
import luchs from './img/luchs.png'
import polarwolf from './img/polarwolf.png'
import schneeleopard from './img/schneeleopard.png'

const animals = [
  { title: 'Sibirischer Tiger', picture: tiger },
  { title: 'Wollschweine', picture: wollschweine },
  { title: 'Gänsegeier', picture: gänsegeier },
  { title: 'Luchs', picture: luchs },
  { title: 'Schneeleopard', picture: schneeleopard },
  { title: 'Polarwolf', picture: polarwolf },
  { title: 'Kamtschatkabär', picture: bear },
  { title: 'Sibirischer Tiger', picture: tiger },
  { title: 'Sibirischer Tiger', picture: tiger },
  { title: 'Gänsegeier', picture: gänsegeier },
  { title: 'Luchs', picture: luchs },
  { title: 'Schneeleopard', picture: schneeleopard },
  { title: 'Polarwolf', picture: polarwolf },
  { title: 'Kamtschatkabär', picture: bear },
  { title: 'Sibirischer Tiger', picture: tiger }
]

export default function App() {
  return animals.map((animal, index) => (
    <Animal key={index} title={animal.title} picture={animal.picture} />
  ))
}
